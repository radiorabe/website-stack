import { Api } from "@/lib/api";
import { ItemsPost, ItemsPrograms } from "@/lib/api/data-contracts";
import { notFound } from "next/navigation";

import { logError } from "@/lib/loging";
import { Show } from "@/lib/Types";
import PageProgram from "./PageProgram";
import Flows from "@/lib/api/Flows";

async function getSendung(slug) {
  try {
    const itemResponse = await Api.readSingleItemsPrograms(
      // { id: slug, fields: ["*", "team.*", "team.*.directus_users_id.*"] },
      {
        id: slug,
        fields: [
          "*",
          "team.directus_users_id.avatar",
          "team.directus_users_id.last_name",
          "team.directus_users_id.first_name",
          "team.directus_users_id.email",
          "image.*",
          "promo_box.*",
        ],
        // sort:"date_created.deep[articles][_sort]=-articles_id.date_created"
      },
      // { id: slug, fields: ["*,team.directus_users_id.*"] },
      {
        next: {
          tags:
            process.env.NODE_ENV === "production"
              ? [slug, Flows.collections.directus_users]
              : undefined, // reload only when slug is revalidated
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    // console.log("response", itemResponse);
    let item = itemResponse.data.data as ItemsPrograms;
    // console.log("item", item);
    // console.log("team", item.team);
    // console.log("posts", item.posts);

    return item;
  } catch (error) {
    logError(error);

    notFound();
  }
}

export async function getNextShowForProgram(slug) {
  try {
    return fetch("https://songticker.rabe.ch/libretime/live-info-v2.json", {
      next: {
        revalidate: process.env.NODE_ENV === "production" ? 900 : undefined, // in seconds
      },
      cache: process.env.NODE_ENV === "production" ? undefined : "no-store",
    })
      .then((response: any) => response.json())
      .then((liveData: any) => {
        // console.log("liveData", liveData);
        // console.log("liveDataEnd");
        let nowPlaying = false;

        let currentShow: Show = liveData.shows.current;
        if (currentShow && currentShow.url && currentShow.url.includes(slug)) {
          nowPlaying = true;
        }

        const nextShows = [];
        for (const show of liveData.shows.next) {
          if (show && show.url && show.url.includes(slug)) nextShows.push(show);
          if (nextShows.length === 3) break;
        }

        return { nowPlaying, nextShows };
      })
      .catch((error) => {
        console.error("error", error);

        return { nowPlaying: false, nextShows: [] };
      });
  } catch (error) {
    logError(error);
    return { nowPlaying: false, nextShows: [] };
  }
}

async function getPosts(slug) {
  try {
    const itemResponse = await Api.readItemsPost(
      {
        fields: ["*", "program.name", "imagebox.image.*"],
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        filter: JSON.stringify({
          program: {
            _eq: slug,
          },
          status: {
            _eq: "published",
          },
          date: {
            _lte: "$NOW",
          },
        }),
        sort: ["-date"],
        limit: 3,
      },
      {
        next: {
          tags:
            process.env.NODE_ENV === "production"
              ? [Flows.collections.post]
              : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    // console.log("response", itemResponse);
    let item: ItemsPost[] = itemResponse.data.data;

    return item;
  } catch (error) {
    logError(error);

    notFound();
  }
}

export default async function ProgramPage({ params }) {
  const sendung = await getSendung(params.slug);
  const posts = await getPosts(params.slug);
  const { nowPlaying, nextShows } = await getNextShowForProgram(sendung.slug);
  console.info("Rerender PageSendung: " + params.slug);

  return (
    <PageProgram
      program={sendung}
      posts={posts}
      nowPlaying={nowPlaying}
      nextShows={nextShows}
    ></PageProgram>
  );
}

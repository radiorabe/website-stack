import { Api } from "@/lib/api";
import {
  ItemsEvents,
  ItemsPageHome,
  ItemsPartyTips,
  ItemsPost,
} from "@/lib/api/data-contracts";
import { logError } from "@/lib/loging";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHome from "./PageHome";
import Flows from "@/lib/api/Flows";

async function getPosts() {
  try {
    const itemResponse = await Api.readItemsPost(
      {
        fields: ["*", "program.name", "imagebox.image.*"],
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        filter: JSON.stringify({
          status: {
            _eq: "published",
          },
          date: {
            _lte: "$NOW",
          },
        }),
        sort: ["-date"],
        limit: 6,
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
    // console.log("posts", item);
    // console.log("team", item.team);
    // console.log("posts", item.posts);

    return item;
  } catch (error) {
    console.log("PageHome getPosts Error");
    logError(error);

    notFound();
  }
}

async function getPartyTips() {
  try {
    const itemResponse = await Api.readItemsPartyTips(
      {
        fields: [
          "title_1",
          "title_2",
          "date",
          "date_label",
          "party_location.*",
        ],
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        filter: JSON.stringify({
          _and: [
            {
              status: {
                _eq: "published",
              },
            },
            {
              date: {
                _gte: "$NOW",
              },
            },
            {
              date: {
                _lte: "$NOW(+8 days)",
              },
            },
          ],
        }),
        sort: ["date"],
        // limit: 3,
      },
      {
        next: {
          tags:
            process.env.NODE_ENV === "production"
              ? [Flows.collections.party_tips, Flows.collections.party_location]
              : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    // console.log("response", itemResponse);
    let item: ItemsPartyTips[] = itemResponse.data.data;

    // console.log("team", item.team);
    // console.log("posts", item.posts);

    return item;
  } catch (error) {
    console.log("PageHome getPartyTips Error");
    logError(error);

    notFound();
  }
}

async function checkEventWithPromobox() {
  try {
    const itemResponse = await Api.readItemsEvents(
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        filter: JSON.stringify({
          promo_status: {
            _eq: "active",
          },
        }),
        fields: ["*"],
      },
      {
        next: {
          tags:
            process.env.NODE_ENV === "production"
              ? [Flows.collections.events]
              : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    let item: ItemsEvents[] = itemResponse.data.data;
    // console.log("event", item);

    return item && item.length ? item[0] : null;
  } catch (error) {
    console.log("PageHome checkEventWithPromobox Error");
    logError(error);
  }
}

async function getPageData() {
  try {
    const itemResponse = await Api.readItemsPageHome(
      {
        fields: ["*", "promo_box.*"],
      },
      {
        next: {
          tags:
            process.env.NODE_ENV === "production"
              ? [Flows.collections.page_home]
              : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    let item = itemResponse.data.data as ItemsPageHome;
    // console.log("ItemsPageHome", item);

    return item;
  } catch (error) {
    console.log("PageHome getPageData Error");
    logError(error);

    notFound();
  }
}

export const metadata: Metadata = {
  title: "RaBe - Home",
};

export default async function HomePage(props) {
  const pageData = await getPageData();

  const posts = await getPosts();
  const partyTips = await getPartyTips();
  const event = await checkEventWithPromobox();

  return (
    <PageHome
      pageData={pageData}
      posts={posts}
      partyTips={partyTips}
      event={event}
    ></PageHome>
  );
}

import { Api } from "@/lib/api";
import { ItemsEvents } from "@/lib/api/data-contracts";
import { logError } from "@/lib/loging";
import { notFound } from "next/navigation";
import PageEvent from "./PageEvent";

async function getEvent(slug) {
  try {
    const itemResponse = await Api.readItemsEvents(
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        filter: JSON.stringify({
          slug: {
            _eq: slug,
          },
        }),
        fields: [
          "*",
          "logos.directus_files_id",
          "shows.event_shows_id.*",
          "shows.event_shows_id.imagebox.*",
          "partner_logos.image_link_id.*",
        ],
      },
      {
        next: {
          tags:
            process.env.NODE_ENV === "production" ? ["collection"] : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    let item = itemResponse.data.data as ItemsEvents[];
    console.log("event", item);

    if (!item || item.length === 0 || item[0].status !== "published") {
      notFound();
    }

    return item[0];
  } catch (error) {
    logError(error);

    notFound();
  }
}

export default async function EventPage({ params }) {
  const data = await getEvent(params.slug);

  return <PageEvent pageData={data}></PageEvent>;
}

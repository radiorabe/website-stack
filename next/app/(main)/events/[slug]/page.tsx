import { Api } from "@/lib/api";
import { ItemsEvents } from "@/lib/api/data-contracts";
import { logError } from "@/lib/loging";
import { notFound } from "next/navigation";
import PageEvent from "./PageEvent";
import { loadTipTapContent } from "@/components/RenderTipTap/TipTapContentLoader";

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
    let items = itemResponse.data.data as ItemsEvents[];
    console.log("event", items);

    if (!items || items.length === 0 || items[0].status !== "published") {
      notFound();
    }

    // load relational tiptap components
    if (items[0].content) {
      items[0].content = await loadTipTapContent(items[0].content);
    }

    return items[0];
  } catch (error) {
    logError(error);

    notFound();
  }
}

export default async function EventPage({ params }) {
  const data = await getEvent(params.slug);

  return <PageEvent pageData={data}></PageEvent>;
}

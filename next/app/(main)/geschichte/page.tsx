import { loadTipTapContent } from "@/components/RenderTipTap/TipTapContentLoader";
import { Api } from "@/lib/api";
import { ItemsPageHistory } from "@/lib/api/data-contracts";
import { logError } from "@/lib/loging";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHistory from "./PageHistory";
import Flows from "@/lib/api/Flows";

export const metadata: Metadata = {
  title: "Geschichte",
};

async function getPageData() {
  try {
    const itemResponse = await Api.readItemsPageHistory(
      {
        fields: [
          "*",
          "protocols.directus_files_id.*",
          "logos.directus_files_id.*",
        ],
        // limit: 3,
      },
      {
        next: {
          tags:
            process.env.NODE_ENV === "production"
              ? [Flows.collections.page_history]
              : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    // console.log("response", itemResponse);
    let item: ItemsPageHistory = itemResponse.data.data as ItemsPageHistory;
    // console.log("History: ", item);
    if (item.content) {
      item.content = await loadTipTapContent(item.content);
    }

    return item;
  } catch (error) {
    logError(error);

    notFound();
  }
}

export default async function HistoryPage(props) {
  const data = await getPageData();
  console.info("Rerender PageHistory");
  return <PageHistory pageData={data}></PageHistory>;
}

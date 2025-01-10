import { loadTipTapContent } from "@/components/RenderTipTap/TipTapContentLoader";
import { logError } from "@/lib/loging";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Api } from "../../../lib/api";
import { ItemsPageImpressum } from "../../../lib/api/data-contracts";
import PageImpressum from "./PageImpressum";
import Flows from "@/lib/api/Flows";

export const metadata: Metadata = {
  title: "Impressum",
};

async function getPageData() {
  try {
    const itemResponse = await Api.readItemsPageImpressum(
      {
        fields: ["*"],
        // limit: 3,
      },
      {
        next: {
          tags:
            process.env.NODE_ENV === "production"
              ? [Flows.collections.page_impressum]
              : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    // console.log("response", itemResponse);
    let item: ItemsPageImpressum = itemResponse.data.data as ItemsPageImpressum;

    // load relational tiptap components
    if (item.content) {
      item.content = await loadTipTapContent(
        item.content,
        Flows.collections.page_impressum
      );
    }
    return item;
  } catch (error) {
    console.log("PageImpressum getPageData Error");
    logError(error);

    notFound();
  }
}

export default async function ImpressumPage(props) {
  const data = await getPageData();
  console.info("Rerender PageImpressum");

  return <PageImpressum pageData={data}></PageImpressum>;
}

import { logError } from "@/lib/loging";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Api } from "../../../lib/api";
import { ItemsPageAgb } from "../../../lib/api/data-contracts";
import PageAgb from "./PageAgb";
import { loadTipTapContent } from "@/components/RenderTipTap/TipTapContentLoader";
import Flows from "@/lib/api/Flows";

export const metadata: Metadata = {
  title: "AGB und datenschutz",
};

async function getPageData() {
  try {
    const itemResponse = await Api.readItemsPageAgb(
      {
        fields: ["*"],
        // limit: 3,
      },
      {
        next: {
          tags:
            process.env.NODE_ENV === "production"
              ? [Flows.collections.page_agb]
              : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    // console.log("response", itemResponse);
    let item: ItemsPageAgb = itemResponse.data.data as ItemsPageAgb;
    if (item.content) {
      item.content = await loadTipTapContent(
        item.content,
        Flows.collections.page_agb
      );
    }

    return item;
  } catch (error) {
    console.log("PageAGB getPageData Error");
    logError(error);

    notFound();
  }
}

export default async function AGBPage(props) {
  const data = await getPageData();
  console.info("Rerender PageAGB");

  return <PageAgb pageData={data}></PageAgb>;
}

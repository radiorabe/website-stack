// import Layout from "../components/Layout";
import { loadTipTapContent } from "@/components/RenderTipTap/TipTapContentLoader";
import { Api } from "@/lib/api";
import { ItemsPageReceive } from "@/lib/api/data-contracts";
import { logError } from "@/lib/loging";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import PageReceive from "./PageReceive";
import Flows from "@/lib/api/Flows";

export const metadata: Metadata = {
  title: "Empfangen",
};

async function getPageData() {
  try {
    const itemResponse = await Api.readItemsPageReceive(
      {
        fields: ["*"],
        // limit: 3,
      },
      {
        next: {
          tags:
            process.env.NODE_ENV === "production"
              ? [Flows.collections.page_receive]
              : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    // console.log("response", itemResponse);
    let item: ItemsPageReceive = itemResponse.data.data as ItemsPageReceive;
    // load relational tiptap components
    if (item.content) {
      item.content = await loadTipTapContent(item.content);
    }

    return item;
  } catch (error) {
    logError(error);

    notFound();
  }
}

export default async function ReceivePage(props) {
  const data = await getPageData();
  console.info("Rerender PageReceive");

  return <PageReceive pageData={data}></PageReceive>;
}

import { logError } from "@/lib/loging";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Api } from "../../../lib/api";
import { ItemsPageAgb } from "../../../lib/api/data-contracts";
import PageAgb from "./PageAgb";
import { loadTipTapContent } from "@/components/RenderTipTap/TipTapContentLoader";

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
            process.env.NODE_ENV === "production" ? ["collection"] : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    // console.log("response", itemResponse);
    let item: ItemsPageAgb = itemResponse.data.data as ItemsPageAgb;
    if (item.content) {
      item.content = await loadTipTapContent(item.content);
    }

    return item;
  } catch (error) {
    logError(error);

    notFound();
  }
}

export default async function Page(props) {
  const data = await getPageData();

  return <PageAgb pageData={data}></PageAgb>;
}

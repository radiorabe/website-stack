import { loadTipTapContent } from "@/components/RenderTipTap/TipTapContentLoader";
import { logError } from "@/lib/loging";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Api } from "../../../lib/api";
import { ItemsPageImpressum } from "../../../lib/api/data-contracts";
import PageImpressum from "./PageImpressum";

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
            process.env.NODE_ENV === "production" ? ["collection"] : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    // console.log("response", itemResponse);
    let item: ItemsPageImpressum = itemResponse.data.data as ItemsPageImpressum;

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

export default async function ImpressumPage(props) {
  const data = await getPageData();

  return <PageImpressum pageData={data}></PageImpressum>;
}

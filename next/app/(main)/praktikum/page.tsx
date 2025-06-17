import { Api } from "@/lib/api";
import { ItemsPageInternship } from "@/lib/api/data-contracts";
import { logError } from "@/lib/loging";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import PageInternship from "./PageInternship";
import { loadTipTapContent } from "@/components/RenderTipTap/TipTapContentLoader";
import Flows from "@/lib/api/Flows";

export const metadata: Metadata = {
  title: "Praktikum",
};

async function getPageData() {
  try {
    const itemResponse = await Api.readItemsPageInternship(
      {
        fields: ["*", "internships.internships_id.*"],
        // limit: 3,
      },
      {
        next: {
          tags:
            process.env.NODE_ENV === "production"
              ? [
                  Flows.collections.page_internship,
                  Flows.collections.internships,
                ]
              : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    // console.log("response", itemResponse);
    let item = itemResponse.data.data as ItemsPageInternship;
    // console.log("ItemsPageInternship", item);

    // load relational tiptap components
    if (item.content) {
      item.content = await loadTipTapContent(
        item.content,
        Flows.collections.page_internship
      );
    }

    return item;
  } catch (error) {
    console.log("PageInternship getPageData Error");
    logError(error);

    notFound();
  }
}

export default async function page(props) {
  const data = await getPageData();
  console.info("Rerender PageInternship");

  return <PageInternship pageData={data}></PageInternship>;
}

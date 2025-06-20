import { Api } from "@/lib/api";
import { ItemsPageClasses } from "@/lib/api/data-contracts";
import { logError } from "@/lib/loging";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import PageClasses from "./PageClasses";
import { loadTipTapContent } from "@/components/RenderTipTap/TipTapContentLoader";
import Flows from "@/lib/api/Flows";

export const metadata: Metadata = {
  title: "Kurse",
};

async function getPageData() {
  try {
    const itemResponse = await Api.readItemsPageClasses(
      {
        fields: ["*", "classes.classes_id.*"],
        // limit: 3,
      },
      {
        next: {
          tags:
            process.env.NODE_ENV === "production"
              ? [Flows.collections.page_classes, Flows.collections.classes]
              : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    // console.log("response", itemResponse);
    let item = itemResponse.data.data as ItemsPageClasses;
    // console.log("ItemsPageClasses", item);

    // load relational tiptap components
    if (item.content) {
      item.content = await loadTipTapContent(
        item.content,
        Flows.collections.page_classes
      );
    }

    return item;
  } catch (error) {
    console.log("PageClasses getPageData Error");
    logError(error);

    notFound();
  }
}

export default async function page(props) {
  const data = await getPageData();
  console.info("Rerender PageClasses");

  return <PageClasses pageData={data}></PageClasses>;
}

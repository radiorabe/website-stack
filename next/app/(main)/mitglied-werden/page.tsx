import { loadTipTapContent } from "@/components/RenderTipTap/TipTapContentLoader";
import { Api } from "@/lib/api";
import {
  ItemsMemberProduct,
  ItemsPageMember,
  ItemsStatements,
} from "@/lib/api/data-contracts";
import { logError } from "@/lib/loging";
import { notFound } from "next/navigation";
import PageMember from "./PageMember";
import Flows from "@/lib/api/Flows";

async function getPageData() {
  try {
    const infoResponse = await Api.readItemsPageMember(
      {
        fields: ["*"],
      },
      {
        next: {
          tags:
            process.env.NODE_ENV === "production"
              ? [Flows.collections.page_member]
              : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    // console.log("response", infoResponse);
    let item: ItemsPageMember = infoResponse.data.data as ItemsPageMember;

    if (item.content) {
      item.content = await loadTipTapContent(item.content);
    }

    return item;
  } catch (error) {
    logError(error);
    notFound();
  }
}

async function getStatements() {
  try {
    const infoResponse = await Api.readItemsStatements(
      {
        fields: ["*"],
      },
      {
        next: {
          tags:
            process.env.NODE_ENV === "production"
              ? [Flows.collections.statements]
              : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    // console.log("response", infoResponse);
    let item: ItemsStatements[] = infoResponse.data.data;

    // console.log("ItemsStatements: ", item);

    return item;
  } catch (error) {
    logError(error);
    notFound();
  }
}

async function getMemberProducts() {
  try {
    const infoResponse = await Api.readItemsMemberProduct(
      {
        fields: ["*"],
      },
      {
        next: {
          tags:
            process.env.NODE_ENV === "production"
              ? [Flows.collections.member_product]
              : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    // console.log("response", infoResponse);
    let item: ItemsMemberProduct[] = infoResponse.data.data;

    // console.log("member products: ", item);

    return item;
  } catch (error) {
    logError(error);
    notFound();
  }
}

export default async function Page(props) {
  const data = await getPageData();
  const memberProducts = await getMemberProducts();
  const statements = await getStatements();
  console.info("Rerender PageMember");

  return (
    <PageMember
      pageData={data}
      memberProducts={memberProducts}
      statements={statements}
    ></PageMember>
  );
}

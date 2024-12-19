import { Text, View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";

import Fonts from "@/lib/Fonts";

import { Metadata } from "next";
import Metrics from "@/lib/Metrics";
import Colors from "@/lib/Colors";
import { Api } from "@/lib/api";
import { ItemsPageJoin } from "@/lib/api/data-contracts";
import { logError } from "@/lib/loging";
import { notFound } from "next/navigation";
import RenderTipTap from "@/components/RenderTipTap";
import { loadTipTapContent } from "@/components/RenderTipTap/TipTapContentLoader";
import PageJoin from "./PageJoin";

async function getPageData() {
  try {
    const itemResponse = await Api.readItemsPageJoin(
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
    let item = itemResponse.data.data as ItemsPageJoin;
    // console.log("ItemsPageJoin", item);
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

export default async function Page(props) {
  const data = await getPageData();

  return <PageJoin pageData={data}></PageJoin>;
}

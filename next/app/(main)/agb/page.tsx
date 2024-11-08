import { View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";
import Fonts from "../../../lib/Fonts";
import { Api } from "../../../lib/api";
import { ItemsPageAgb } from "../../../lib/api/data-contracts";
import RenderTipTap from "@/components/RenderTipTap";
import Metrics from "@/lib/Metrics";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { logError } from "@/lib/loging";

const { styles } = StyleSheet.create({
  container: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  link: {
    color: "blue",
  },
  textContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  text: {
    ...Fonts.style.text,
    alignItems: "center",
    fontSize: 24,
    marginBottom: 24,
  },
});

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
    // console.log("ItemsPageAgb", item);
    // console.log("team", item.team);
    // console.log("posts", item.posts);

    return item;
  } catch (error) {
    logError(error);

    notFound();
  }
}

export default async function AGBPage(props) {
  const data = await getPageData();

  return (
    <View style={{ width: "100%" }}>
      <View
        style={{
          width: "90vw",
          alignSelf: "center",
          paddingVertical: Metrics.tripleBaseMargin,
        }}
      >
        {data.content && <RenderTipTap content={data.content}></RenderTipTap>}
      </View>
    </View>
  );
}

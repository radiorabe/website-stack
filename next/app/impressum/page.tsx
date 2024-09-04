import RenderTipTap from "@/components/RenderTipTap";
import Metrics from "@/lib/Metrics";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";
import Fonts from "../../lib/Fonts";
import { Api } from "../../lib/api";
import { ItemsPageImpressum } from "../../lib/api/data-contracts";
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
  title: "Impressum",
};

async function getImpressum() {
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
    // console.log("ItemsPageImpressum", item);
    // console.log("team", item.team);
    // console.log("posts", item.posts);

    return item;
  } catch (error) {
    logError(error);

    notFound();
  }
}

export default async function ImpressumPage(props) {
  const data = await getImpressum();

  return (
    <View>
      <View
        style={{
          maxWidth: 1280,
          width: "100%",
          alignSelf: "center",
          padding: Metrics.tripleBaseMargin,
        }}
      >
        {data.content && <RenderTipTap content={data.content}></RenderTipTap>}
      </View>
    </View>
  );
}

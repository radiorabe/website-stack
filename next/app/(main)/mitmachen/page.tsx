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
  title: "Mitmachen",
};

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

    return item;
  } catch (error) {
    logError(error);

    notFound();
  }
}

export default async function MitmachenPage(props) {
  const data = await getPageData();

  return (
    <View>
      <View
        style={{
          width: "100%",
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "74vw",
            alignSelf: "center",
            paddingVertical: Metrics.tripleBaseMargin,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginBottom: Metrics.tripleBaseMargin,
            }}
          >
            <Text style={{ ...Fonts.style.text }}>{"Über Rabe"}</Text>
            <Text
              style={[
                { ...Fonts.style.h4 },
                { color: Colors.green, paddingHorizontal: Metrics.baseMargin },
              ]}
            >
              {"\u2192"}
            </Text>
            <Text style={{ ...Fonts.style.text }}>{"Deine Sendung"}</Text>
          </View>
          {data.content && <RenderTipTap content={data.content}></RenderTipTap>}
        </View>
      </View>
    </View>
  );
}

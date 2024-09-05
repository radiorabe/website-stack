import { Text, View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";
import Fonts from "../../lib/Fonts";
// import Layout from "../components/Layout";
import { Metadata } from "next";
import RenderTipTap from "@/components/RenderTipTap";
import { logError } from "@/lib/loging";
import { notFound } from "next/navigation";
import Metrics from "@/lib/Metrics";
import { ItemsPageReceive } from "@/lib/api/data-contracts";
import { Api } from "@/lib/api";
import Colors from "@/lib/Colors";

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
        //   next: {
        //     tags:
        //       process.env.NODE_ENV === "production" ? ["collection"] : undefined,
        //   },
        cache: "no-store",
        //   cache:
        //     process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    // console.log("response", itemResponse);
    let item: ItemsPageReceive = itemResponse.data.data as ItemsPageReceive;
    // console.log("ItemsPageImpressum", item);
    // console.log("team", item.team);
    // console.log("posts", item.posts);

    return item;
  } catch (error) {
    logError(error);

    notFound();
  }
}

export default async function ReceivePage(props) {
  const data = await getPageData();

  return (
    <View>
      <View
        style={{
          maxWidth: 1280,
          width: "100%",
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "75%",
            padding: Metrics.tripleBaseMargin,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              // backgroundColor: "green",
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
            <Text style={{ ...Fonts.style.text }}>{"Empfangen"}</Text>
          </View>
          {data.content && <RenderTipTap content={data.content}></RenderTipTap>}
        </View>
      </View>
    </View>
  );
}

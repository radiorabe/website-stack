import { Text, View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";
import Fonts from "../../lib/Fonts";
// import Layout from "../components/Layout";
import { Metadata } from "next";
import RenderTipTap from "@/components/RenderTipTap";
import { logError } from "@/lib/loging";
import { notFound } from "next/navigation";
import Metrics from "@/lib/Metrics";
import { ItemsPageHistory, ItemsPageReceive } from "@/lib/api/data-contracts";
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
  title: "Geschichte",
};

async function getPageData() {
  try {
    const itemResponse = await Api.readItemsPageHistory(
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
    let item: ItemsPageHistory = itemResponse.data.data as ItemsPageHistory;
    console.log("History: ", item);
    // console.log("team", item.team);
    // console.log("posts", item.posts);

    return item;
  } catch (error) {
    logError(error);

    notFound();
  }
}

export default async function HistoryPage(props) {
  const data = await getPageData();

  return (
    <View>
      <View style={styles.container}>
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
            <Text style={{ ...Fonts.style.text }}>{"Geschichte"}</Text>
          </View>
          {data.content && <RenderTipTap content={data.content}></RenderTipTap>}
        </View>
      </View>
    </View>
  );
}

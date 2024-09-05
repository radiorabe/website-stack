import RenderTipTap from "@/components/RenderTipTap";
import { Api } from "@/lib/api";
import { ItemsPageHistory } from "@/lib/api/data-contracts";
import Colors from "@/lib/Colors";
import { logError } from "@/lib/loging";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import StyleSheet from "react-native-media-query";
import Fonts from "../../lib/Fonts";
import DownloadBox from "./DownloadBox";
import DownloadProtocol from "./DownloadProtocol";

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
        fields: ["*", "protocols.protocol_id.*"],
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
  console.log("data", data.protocols);
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
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <DownloadBox
              label="Unser Leitbild"
              url={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${data.vision}?download`}
            ></DownloadBox>
            <DownloadBox
              label="Statuten"
              url={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${data.statutes}?download`}
            ></DownloadBox>
          </View>
          <View>
            <View
              style={{
                marginTop: Metrics.tripleBaseMargin,
                padding: Metrics.doubleBaseMargin,
                borderRadius: 9,
                backgroundColor: Colors.lightGreen,
              }}
            >
              <Text
                style={{
                  ...Fonts.style.h4,
                }}
              >
                {"Protokolle der Mitgliederversammlungen"}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                {data.protocols &&
                  data.protocols.map((item, index) => {
                    return (
                      <DownloadProtocol
                        label={item.protocol_id.name}
                        url={item.protocol_id.file}
                      ></DownloadProtocol>
                      // <View key={"protocol-" + index}>
                      //   <Text>{item.protocol_id.name}</Text>
                      // </View>
                    );
                  })}
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

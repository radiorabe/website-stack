import Fonts, { style } from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Api } from "@/lib/api";
import { Text, View } from "react-native";
import { ItemsSendungenInfo } from "../../lib/api/data-contracts";
import { notFound } from "next/navigation";
import StyleSheet from "react-native-media-query";
import Sendung from "./Sendung";

const { ids, styles } = StyleSheet.create({
  container: {
    maxWidth: 1920,
    alignItems: "center",
    alignSelf: "center",
    paddingVertical: Metrics.tripleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
  },
  textContainer: {
    width: "75%",
  },
  title: {
    ...Fonts.style.h2,
  },
  text: {
    ...Fonts.style.text,
  },
});

async function getSendungsInfo() {
  try {
    const infoResponse = await Api.readItemsSendungenInfo(
      {},
      {
        next: { tags: ["collection"] },
        //  cache: "no-store"
      }
    );
    // console.log("response", infoResponse);
    let sendungsInfo: ItemsSendungenInfo = infoResponse.data.data;
    return sendungsInfo;
  } catch (error) {
    notFound();
  }
}

async function getSendungen() {
  try {
    const sendungenResponse = await Api.readItemsSendungen(
      {
        filter: JSON.stringify({
          status: {
            _eq: "published",
          },
        }),
        fields: ["image", "description", "name"],
      },
      {
        next: { tags: ["collection"] },
        // cache: "no-store",
      }
    );
    // console.log("response", sendungenResponse);
    let sendungen = sendungenResponse.data.data;
    // console.log("sendungen", sendungen);
    return sendungen;
  } catch (error) {
    console.log(error);
    notFound();
  }
}

export default async function SendungenPage(props) {
  const sendungsInfo = await getSendungsInfo();
  const sendungen = await getSendungen();

  return (
    <View>
      <View style={styles.container}>
        <View
          style={styles.textContainer}
          dataSet={{ media: ids.textContainer }}
        >
          <Text accessibilityRole="header" style={styles.title}>
            {sendungsInfo.title}
          </Text>
          <View style={{ height: Metrics.tripleBaseMargin }}></View>
          <Text style={styles.text}>{sendungsInfo.text}</Text>
        </View>
        <View style={{ height: Metrics.tripleBaseMargin }}></View>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {sendungen.map((item, index) => {
            return (
              <Sendung
                key={"keySendung-" + props.index}
                name={item.name}
                image={item.image}
              ></Sendung>
            );
          })}
        </View>
      </View>
    </View>
  );
}

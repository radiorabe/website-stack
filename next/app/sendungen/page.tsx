import Fonts, { style } from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Api } from "@/lib/api";
import { Text, View } from "@/lib/server-react-native";
import { ItemsPagePrograms } from "../../lib/api/data-contracts";
import { notFound } from "next/navigation";
import StyleSheet from "react-native-media-query";
import Sendung from "./Sendung";
import { logError } from "@/lib/loging";

const { ids, styles } = StyleSheet.create({
  container: {
    width: "90vw",
    alignItems: "center",
    alignSelf: "center",
    paddingVertical: Metrics.tripleBaseMargin,
  },
  textContainer: {
    width: "74vw",
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
    const infoResponse = await Api.readItemsPagePrograms(
      {},
      {
        next: {
          tags:
            process.env.NODE_ENV === "production" ? ["collection"] : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    // console.log("response", infoResponse);
    let item: ItemsPagePrograms = infoResponse.data.data as ItemsPagePrograms;

    // console.log("sendungenInfo", item);

    return item;
  } catch (error) {
    logError(error);
    notFound();
  }
}

async function getSendungen() {
  try {
    const sendungenResponse = await Api.readItemsPrograms(
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        filter: JSON.stringify({
          status: {
            _eq: "published",
          },
        }),
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
    // console.log("response", sendungenResponse);
    let sendungen = sendungenResponse.data.data;
    // console.log("sendungen", sendungen);
    return sendungen;
  } catch (error) {
    logError(error);
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
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {sendungen.map((item, index) => {
            return (
              <Sendung
                key={"sendung-" + index}
                name={item.name}
                image={item.image}
                slug={item.slug}
              ></Sendung>
            );
          })}
        </View>
      </View>
    </View>
  );
}

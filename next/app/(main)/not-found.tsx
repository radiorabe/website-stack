"use client";
import Button from "@/components/Button";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import Image from "next/image";
import StyleSheet from "react-native-media-query";

export default function NotFound() {
  return (
    <View style={{}}>
      {/* <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link> */}

      <View
        style={styles.imageContainer}
        dataSet={{ media: ids.imageContainer }}
      >
        {/* <IconFooterRabe color={Colors.black}></IconFooterRabe> */}
        <Image
          src={"/images/404.jpg"}
          width={200}
          height={400}
          layout="responsive"
          alt={`Rabe`}
          onError={event => { console.log("IMAGE ERROR ECONNRESET: ", event)}}
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </View>
      <View style={styles.textContainer} dataSet={{ media: ids.textContainer }}>
        <Text style={styles.text} dataSet={{ media: ids.text }}>
          {"Hier gibt es nichts zu sehen"}
        </Text>

        <Button
          label={"zur Startseite"}
          href="/"
          large
          style={{ paddingTop: Metrics.tripleBaseMargin }}
        ></Button>
      </View>
    </View>
  );
}

const { styles, ids } = StyleSheet.create({
  imageContainer: {
    width: "74vw",
    alignSelf: "center",
    // aspectRatio: 0.88,
    borderRadius: 9,
    overflow: "hidden",
    marginTop: Metrics.tripleBaseMargin,
    "@media (max-width: 910px)": {
      width: "90vw",
    },
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "center",
    paddingTop: "-" + Metrics.tripleBaseMargin,
    paddingBottom: Metrics.tripleBaseMargin,
    width: "90vw",

    "@media (max-width: 910px)": {
      flexDirection: "column",
    },
  },
  text: {
    ...Fonts.style.h2,
    paddingTop: Metrics.tripleBaseMargin,
    paddingRight: Metrics.tripleBaseMargin,
    "@media (max-width: 910px)": {
      textAlign: "center",
    },
  },
});

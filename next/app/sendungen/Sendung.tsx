"use client";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import Image from "next/image";
import { Text, View } from "react-native";
import StyleSheet from "react-native-media-query";

const { ids, styles } = StyleSheet.create({
  title: {
    ...Fonts.style.h2,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    backgroundColor: "blue",
    marginBottom: Metrics.doubleBaseMargin,
    // "@media (max-width: 1600px) and (min-width: 800px)": {
    //   backgroundColor: "red",
    // },
    // "@media (max-width: 800px)": {
    //   backgroundColor: "green",
    // },
  },
  image: {
    borderRadius: 9,
    marginRight: Metrics.baseMargin,
  },
});

export default async function Sendung(props) {
  return (
    <View
      key={"keySendung-" + props.index}
      style={styles.imageContainer}
      dataSet={{ media: ids.imageContainer }}
    >
      <Image
        src={`${process.env.PUBLIC_URL}/assets/${props.image}?width=166&height=166&fit=cover`}
        width={166}
        height={166}
        style={styles.image}
        alt={props.name}
      />
      <Text style={styles.title}>{props.name}</Text>
    </View>
  );
}

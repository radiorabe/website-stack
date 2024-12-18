"use client";
import LinkComponent from "@/components/LinkComponent";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import Image from "next/image";
import { Text, View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";

export default function ProgramBox(props) {
  return (
    <View style={styles.container} dataSet={{ media: ids.container }}>
      <LinkComponent
        style={styles.linkContainer}
        dataSet={{ media: ids.linkContainer }}
        href={"/" + props.slug}
      >
        <View
          style={styles.imageContainer}
          dataSet={{ media: ids.imageContainer }}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${props.image}?width=166&height=166&fit=cover`}
            width={166}
            height={166}
            style={styles.image}
            layout="responsive"
            alt={props.name}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </View>
        <Text style={styles.title} dataSet={{ media: ids.title }}>
          {props.name}
        </Text>
      </LinkComponent>
    </View>
  );
}

const { ids, styles } = StyleSheet.create({
  container: {
    width: "48%",
    marginBottom: Metrics.doubleBaseMargin,
    "@media (max-width: 910px)": {
      width: "100%",
      marginBottom: Metrics.tripleBaseMargin,
    },
  },
  linkContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    width: Metrics.octBaseMargin,
    aspectRatio: 1,
  },
  image: {
    borderRadius: 9,
  },
  title: {
    ...Fonts.style.h2,
    paddingLeft: Metrics.doubleBaseMargin,
    "@media (max-width: 910px)": {
      paddingLeft: Metrics.tripleBaseMargin,
    },
  },
});

"use client";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";
import {
  ItemsPagePrograms,
  ItemsPrograms,
} from "../../../lib/api/data-contracts";
import ProgramBox from "./ProgramBox";

type Props = {
  programs: ItemsPrograms[];
  pageData: ItemsPagePrograms;
};

export default function SendungenPage({ programs, pageData }: Props) {
  return (
    <View style={styles.container} dataSet={{ media: styles.container }}>
      <View style={styles.textContainer} dataSet={{ media: ids.textContainer }}>
        <Text
          accessibilityRole="header"
          style={styles.title}
          dataSet={{ media: ids.title }}
        >
          {pageData.title}
        </Text>
        <Text style={styles.text} dataSet={{ media: ids.text }}>
          {pageData.text}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {programs.map((item, index) => {
          return (
            <ProgramBox
              key={"sendung-" + index}
              name={item.name}
              image={item.image}
              slug={item.slug}
            ></ProgramBox>
          );
        })}
      </View>
    </View>
  );
}

const { ids, styles } = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: Metrics.tripleBaseMargin,
    alignItems: "center",
    alignSelf: "center",
    paddingVertical: Metrics.tripleBaseMargin,
  },
  textContainer: {
    width: "74vw",
    marginBottom: Metrics.tripleBaseMargin,

    "@media (max-width: 910px)": {
      width: "90vw",
      marginBottom: Metrics.quadBaseMargin,
    },
  },
  title: {
    ...Fonts.style.h2,
  },
  text: {
    ...Fonts.style.text,
    marginTop: Metrics.tripleBaseMargin,
    "@media (max-width: 910px)": {
      marginTop: Metrics.quadBaseMargin,
    },
  },
});

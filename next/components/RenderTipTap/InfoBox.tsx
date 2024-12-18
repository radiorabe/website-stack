"use client";
import { ItemsInfoBox, ItemsQuote } from "@/lib/api/data-contracts";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import RenderTipTap from "./RenderTipTap";
import StyleSheet from "react-native-media-query";

export interface Props {
  data: ItemsInfoBox;
  backgroundColor?: any;
  textColor?: any;
  constainerStyle?: any;
}

const InfoBox = ({
  data,
  backgroundColor,
  textColor,
  constainerStyle,
}: Props) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor
            ? backgroundColor
            : Colors.lightGreen,
        },
        constainerStyle,
      ]}
      dataSet={{ media: ids.container }}
    >
      <Text
        style={[styles.title, { color: textColor ? textColor : Colors.black }]}
        dataSet={{ media: ids.title }}
      >
        {data.title}
      </Text>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <RenderTipTap
          content={data.text}
          topProps={{
            textColor: textColor ? textColor : undefined,
            linkColor: Colors.green,
            linkHoverColor: Colors.darkGreen,
          }}
        ></RenderTipTap>
      </View>
    </View>
  );
};

export default InfoBox;

const { ids, styles } = StyleSheet.create({
  container: {
    paddingHorizontal: Metrics.doubleBaseMargin,
    paddingTop: Metrics.doubleBaseMargin,
    marginVertical: Metrics.tripleBaseMargin,
    borderRadius: 9,
    "@media (max-width: 910px)": {
      paddingHorizontal: Metrics.tripleBaseMargin,
      paddingTop: Metrics.tripleBaseMargin,
    },
  },
  title: {
    ...Fonts.style.h4,
    paddingBottom: Metrics.baseMargin,
    "@media (max-width: 910px)": {
      paddingBottom: Metrics.doubleBaseMargin,
    },
  },
});

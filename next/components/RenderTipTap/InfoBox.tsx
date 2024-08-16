"use client";
import { ItemsInfoBox, ItemsQuote } from "@/lib/api/data-contracts";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "react-native";
import RenderTipTap from "./RenderTipTap";

export interface HoverableProps {
  data: ItemsInfoBox;
}

const InfoBox = ({ data }: HoverableProps) => {
  return (
    <View
      style={{
        padding: Metrics.doubleBaseMargin,
        paddingBottom: Metrics.halfBaseMargin,
        borderRadius: 9,
        backgroundColor: Colors.lightGreen,
      }}
    >
      <Text
        style={{
          ...Fonts.style.h4,
        }}
      >
        {data.title}
      </Text>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <RenderTipTap content={data.text}></RenderTipTap>
      </View>
    </View>
  );
};

export default InfoBox;

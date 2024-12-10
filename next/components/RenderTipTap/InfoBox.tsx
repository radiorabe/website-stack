"use client";
import { ItemsInfoBox, ItemsQuote } from "@/lib/api/data-contracts";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import RenderTipTap from "./RenderTipTap";

export interface HoverableProps {
  data: ItemsInfoBox;
  backgroundColor?: any;
  textColor?: any;
}

const InfoBox = ({ data, backgroundColor, textColor }: HoverableProps) => {
  return (
    <View
      style={{
        padding: Metrics.doubleBaseMargin,
        paddingBottom: Metrics.halfBaseMargin,
        borderRadius: 9,
        backgroundColor: backgroundColor ? backgroundColor : Colors.lightGreen,
      }}
    >
      <Text
        style={{
          ...Fonts.style.h4,
          paddingBottom: Metrics.baseMargin,
          color: textColor ? textColor : Colors.black,
        }}
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

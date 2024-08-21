"use client";
import { ItemsQuote } from "@/lib/api/data-contracts";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";

export interface HoverableProps {
  data: ItemsQuote;
}

const Quote = ({ data }: HoverableProps) => {
  return (
    <View
      style={{
        left: -Metrics.tripleBaseMargin,
        marginVertical: Metrics.tripleBaseMargin,
      }}
    >
      <Text
        style={{
          ...Fonts.style.quote,
          marginBottom: Metrics.doubleBaseMargin,
        }}
      >
        {"«" + data.text + "»"}
      </Text>
      <View
        style={{
          flexDirection: "row",
          paddingLeft: Metrics.doubleBaseMargin + Metrics.tripleBaseMargin,
        }}
      >
        <Text
          style={{
            ...Fonts.style.textSmall,
            fontFamily: Fonts.type.bold,
          }}
        >
          {data.author}
        </Text>
        <Text style={{ ...Fonts.style.textSmall }}> </Text>
        <Text style={{ ...Fonts.style.textSmall }}>{data.info}</Text>
      </View>
    </View>
  );
};

export default Quote;

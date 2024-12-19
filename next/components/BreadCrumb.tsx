"use client";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";

export interface Props {
  label1: string;
  label2: string;
  style?: any;
}

export default function BreadCrump({ label1, label2, style }: Props) {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          marginBottom: Metrics.tripleBaseMargin,
        },
        style,
      ]}
    >
      <Text style={{ ...Fonts.style.text }}>{label1}</Text>
      <Text
        style={[
          { ...Fonts.style.h4 },
          { color: Colors.green, paddingHorizontal: Metrics.baseMargin },
        ]}
      >
        {"\u2192"}
      </Text>
      <Text style={{ ...Fonts.style.text }}>{label2}</Text>
    </View>
  );
}

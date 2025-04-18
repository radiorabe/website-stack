"use client";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text } from "@/lib/server-react-native";

export interface Props {
  label: string;
  text: string;
}

const ShowInfoText = ({ label, text }: Props) => {
  return (
    <Text style={{ marginVertical: Metrics.halfHalfBaseMargin }}>
      <Text
        style={{
          ...Fonts.style.textLink,
        }}
      >
        {label + ": "}
      </Text>
      <Text style={{ ...Fonts.style.text }}>{text}</Text>
    </Text>
  );
};

export default ShowInfoText;

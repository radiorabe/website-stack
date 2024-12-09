"use client";
import Fonts from "@/lib/Fonts";
import { Text } from "@/lib/server-react-native";

export interface Props {
  label: string;
  text: string;
}

const ShowInfoText = ({ label, text }: Props) => {
  return (
    <Text>
      <Text
        style={{
          ...Fonts.style.text,
        }}
      >
        {label + ": "}
      </Text>
      <Text style={{ ...Fonts.style.text }}>{text}</Text>
    </Text>
  );
};

export default ShowInfoText;

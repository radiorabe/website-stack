"use client";
import Fonts from "@/lib/Fonts";
import { Text } from "@/lib/server-react-native";

export interface Props {
  label: string;
  text: string;
  bold?: boolean;
}

const ShowInfoText = ({ label, text, bold }: Props) => {
  return (
    <Text>
      <Text
        style={[
          {
            ...Fonts.style.text,
          },
          bold && { ...Fonts.style.textLink },
        ]}
      >
        {label + ": "}
      </Text>
      <Text style={{ ...Fonts.style.text }}>{text}</Text>
    </Text>
  );
};

export default ShowInfoText;

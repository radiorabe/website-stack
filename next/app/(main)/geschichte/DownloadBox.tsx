"use client";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Linking, Pressable, Text, View } from "@/lib/server-react-native";
import { PressableState } from "@/lib/Types";
import { ReactElement } from "react";
import DownloadIcon from "./DownloadIcon";

export interface Props {
  label: string;
  url: string;
}

const DownloadBox = ({ label, url }: Props) => {
  return (
    <Pressable
      style={{
        backgroundColor: Colors.darkGreen,
        borderRadius: 9,
        width: "48%",
        paddingVertical: Metrics.doubleBaseMargin,
        alignItems: "center",
      }}
      onPress={() => {
        Linking.openURL(url);
      }}
    >
      {({ pressed, hovered, focused }: PressableState): ReactElement => {
        return (
          <>
            <Text
              style={{
                ...Fonts.style.h4,
                color: hovered ? Colors.green : Colors.lightGreen,
              }}
            >
              {label}
            </Text>
            <View style={{ height: Metrics.baseMargin }}></View>

            <DownloadIcon
              color={hovered ? Colors.green : Colors.lightGreen}
            ></DownloadIcon>
          </>
        );
      }}
    </Pressable>
  );
};

export default DownloadBox;

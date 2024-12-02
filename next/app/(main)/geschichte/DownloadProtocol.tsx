"use client";
import IconDownload from "@/assets/svg/IconDownload";
import { PressableState } from "@/lib/Types";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Linking, Pressable, Text, View } from "@/lib/server-react-native";
import { ReactElement } from "react";

export interface Props {
  label: string;
  url: string;
}

const InfoBox = ({ label, url }: Props) => {
  return (
    <Pressable
      style={
        {
          // backgroundColor: Colors.darkGreen,
          // borderRadius: 9,
          // width: "48%",
          // paddingVertical: Metrics.doubleBaseMargin,
          // alignItems: "center",
        }
      }
      onPress={() => {
        Linking.openURL(url);
      }}
    >
      {({ pressed, hovered, focused }: PressableState): ReactElement => {
        return (
          <View
            style={{
              flexDirection: "row",
              paddingTop: Metrics.baseMargin,
              alignItems: "center",
            }}
          >
            <IconDownload
              color={hovered ? Colors.green : Colors.darkGreen}
            ></IconDownload>
            <Text
              style={{
                paddingLeft: Metrics.baseMargin,
                ...Fonts.style.text,
                color: hovered ? Colors.green : Colors.black,
              }}
            >
              {label}
            </Text>
          </View>
        );
      }}
    </Pressable>
  );
};

export default InfoBox;

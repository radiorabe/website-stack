"use client";
import IconShare from "@/assets/svg/IconShare";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Link from "next/link";
import React, { ReactElement } from "react";
import { Text, Pressable, TextStyle, View, Linking } from "react-native";

export type PressableState = Readonly<{
  pressed: boolean;
  hovered?: boolean;
  focused?: boolean;
}>;

export interface HoverableProps {
  url: string;
  label: string;
  icon?: any;
}

const Button = ({ url, label, icon }: HoverableProps) => {
  return (
    <Pressable style={{}} onPress={() => Linking.openURL(url)}>
      {({ pressed, hovered, focused }: PressableState): ReactElement => {
        return (
          <View
            style={[
              {
                borderColor: Colors.black,
                borderRadius: 9,
                borderWidth: 1,
                alignSelf: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 3,
                paddingHorizontal: 6,
              },
              hovered && {
                borderColor: Colors.green,
              },
            ]}
          >
            {/* <IconShare color={Colors.darkGreen}></IconShare> */}
            {icon}
            <Text
              style={[
                {
                  ...Fonts.style.textLink,
                  flexShrink: 1,
                  paddingLeft: 6,
                },
                hovered && {
                  color: Colors.green,
                  borderColor: Colors.green,
                },
              ]}
            >
              {label}
            </Text>
          </View>
        );
      }}
    </Pressable>
  );
};

export default Button;

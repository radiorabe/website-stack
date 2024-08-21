"use client";
import React, { ReactElement } from "react";
import { Text, Pressable, Linking } from "@/lib/server-react-native";
import TextStyle from "react-native-media-query";

export type PressableState = Readonly<{
  pressed: boolean;
  hovered?: boolean;
  focused?: boolean;
}>;

export interface HoverableProps {
  style?: TextStyle;
  hoverStyle?: TextStyle;
  pressStyle?: TextStyle;
  focusStyle?: TextStyle;
  url: string;
  children?: any;
}

const HoverText = ({
  style,
  hoverStyle,
  pressStyle,
  focusStyle,
  url,
  children,
}: HoverableProps) => {
  return (
    //   <TouchableWithoutFeedback
    //   onPress={() => {
    //     if (hasWindow) Linking.openURL("https://www.aarefabrik.ch");
    //   }}
    // >
    //             </TouchableWithoutFeedback>
    <Pressable style={{}} onPress={() => Linking.openURL(url)}>
      {({ pressed, hovered, focused }: PressableState): ReactElement => {
        return (
          <Text
            style={[
              style,
              hovered && hoverStyle,
              pressed && pressStyle,
              focused && focusStyle,
            ]}
          >
            {children}
          </Text>
        );
      }}
    </Pressable>
  );
};

export default HoverText;

"use client";
import React, { ReactElement } from "react";
import { Text, Pressable, TextStyle } from "react-native";

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
  children?: any;
}

const HoverText = ({
  style,
  hoverStyle,
  pressStyle,
  focusStyle,
  children,
}: HoverableProps) => {
  return (
    <Pressable
      style={{
        backgroundColor: "blue",
        margin: 0,
        padding: 0,
      }}
    >
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

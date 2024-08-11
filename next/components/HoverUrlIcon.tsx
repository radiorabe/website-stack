"use client";
import React, { ReactElement } from "react";
import { Text, Pressable, TextStyle, Linking } from "react-native";

export type PressableState = Readonly<{
  pressed: boolean;
  hovered?: boolean;
  focused?: boolean;
}>;

export interface HoverableProps {
  color?: any;
  scale?: number;
  hoverColor?: any;
  pressColor?: any;
  url: string;
  children?: any;
}

const HoverUrlIcon = ({
  color,
  hoverColor,
  pressColor,
  scale,
  url,
  children,
}: HoverableProps) => {
  return (
    <Pressable style={{}} onPress={() => Linking.openURL(url)}>
      {({ pressed, hovered, focused }: PressableState): ReactElement => {
        let newColor = pressed ? pressColor : hovered ? hoverColor : color;
        return React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            color: "green",
            scale: scale ? scale : 1,
          });
        });
      }}
    </Pressable>
  );
};

export default HoverUrlIcon;

"use client";
import Link from "next/link";
import React, { ReactElement } from "react";
import { Text, Pressable } from "@/lib/server-react-native";
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
  href?: string;
  children?: any;
  numberOfLines?: number;
}

const HoverText = ({
  style,
  hoverStyle,
  pressStyle,
  focusStyle,
  children,
  href,
  numberOfLines,
}: HoverableProps) => {
  const pressable = (
    <Pressable style={{}}>
      {({ pressed, hovered, focused }: PressableState): ReactElement => {
        return (
          <Text
            style={[
              style,
              hovered && hoverStyle,
              pressed && pressStyle,
              focused && focusStyle,
            ]}
            numberOfLines={numberOfLines}
            ellipsizeMode="tail"
          >
            {children}
          </Text>
        );
      }}
    </Pressable>
  );

  if (href) {
    return (
      <Link href={href} style={{ textDecoration: "none", maxWidth: `100%` }}>
        {pressable}
      </Link>
    );
  }
  return pressable;
};

export default HoverText;

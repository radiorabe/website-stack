"use client";
import Link from "next/link";
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
  href?: string;
  children?: any;
}

const HoverText = ({
  style,
  hoverStyle,
  pressStyle,
  focusStyle,
  children,
  href,
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
          >
            {children}
          </Text>
        );
      }}
    </Pressable>
  );

  if (href) {
    return (
      <Link href={href} style={{ textDecoration: "none" }}>
        {pressable}
      </Link>
    );
  }
  return pressable;
};

export default HoverText;

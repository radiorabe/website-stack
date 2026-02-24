"use client";
import { Pressable, Text } from "@/lib/server-react-native";
import { PressableState } from "@/lib/Types";
import Link from "next/link";
import { ReactElement } from "react";

export interface HoverableProps {
  style?: any;
  hoverStyle?: any;
  pressStyle?: any;
  focusStyle?: any;
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
      {({ pressed, hovered, focused }: PressableState): ReactElement<any> => {
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
      <Link href={href} style={{ textDecoration: "none" }}>
        {pressable}
      </Link>
    );
  }
  return pressable;
};

export default HoverText;

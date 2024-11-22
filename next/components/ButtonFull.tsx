"use client";
import IconShare from "@/assets/svg/IconShare";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Link from "next/link";
import React, { ReactElement } from "react";
import {
  Text,
  Pressable,
  TextStyle,
  View,
  Linking,
} from "@/lib/server-react-native";

export type PressableState = Readonly<{
  pressed: boolean;
  hovered?: boolean;
  focused?: boolean;
}>;

export interface HoverableProps {
  url?: string;
  href?: string;
  label: string;
  icon?: any;
  style?: any;
  large?: boolean;
  backgroundColor?: any;
  backgroundHoverColor?: any;
}

const ButtonFull = ({
  url,
  label,
  icon,
  href,
  style,
  large,
  backgroundColor,
  backgroundHoverColor,
}: HoverableProps) => {
  const button = (
    <Pressable
      style={style}
      onPress={() => {
        if (!href && url) Linking.openURL(url);
      }}
    >
      {({ pressed, hovered, focused }: PressableState): ReactElement => {
        return (
          <View
            style={[
              {
                borderRadius: 9,
                alignSelf: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: large ? 9 : 3,
                paddingHorizontal: large ? 12 : 6,
                backgroundColor: backgroundColor
                  ? backgroundColor
                  : Colors.darkGreen,
              },
              hovered && {
                backgroundColor: backgroundHoverColor
                  ? backgroundHoverColor
                  : Colors.green,
              },
            ]}
          >
            {icon}
            <Text
              style={[
                {
                  ...Fonts.style.textLink,
                  flexShrink: 1,
                  color: Colors.white,
                },
                large && { ...Fonts.style.h2 },
                icon && { paddingLeft: 6 },
              ]}
            >
              {label}
            </Text>
          </View>
        );
      }}
    </Pressable>
  );

  if (href) {
    return (
      <Link href={href} style={{ textDecoration: "none" }}>
        {button}
      </Link>
    );
  }

  return button;
};

export default ButtonFull;

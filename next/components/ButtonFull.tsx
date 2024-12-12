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
import { PressableState } from "@/lib/Types";

export interface Props {
  url?: string;
  href?: string;
  label: string;
  icon?: any;
  disabled?: boolean;
  onPress?(): void;
  style?: any;
  large?: boolean;
  backgroundColor?: any;
  backgroundHoverColor?: any;
  textColor?: any;
  hoverTextColor?: any;
  full: boolean;
}

const ButtonFull = ({
  url,
  label,
  icon,
  disabled,
  onPress,
  href,
  style,
  large,
  backgroundColor,
  backgroundHoverColor,
  textColor,
  hoverTextColor,
  full,
}: Props) => {
  const button = (
    <Pressable
      style={style}
      onPress={() => {
        if (!disabled) {
          if (onPress) {
            onPress();
          }
          if (url) {
            Linking.openURL(url);
          }
        }
      }}
    >
      {({ pressed, hovered, focused }: PressableState): ReactElement => {
        return (
          <View
            style={[
              {
                borderColor: textColor ? textColor : Colors.black,
                borderRadius: 9,
                borderWidth: full ? 0 : 1,
                alignSelf: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: large ? 9 : 6,
                paddingHorizontal: large ? 12 : 9,
                backgroundColor: backgroundColor
                  ? backgroundColor
                  : full
                    ? Colors.darkGreen
                    : undefined,
              },
              hovered &&
                !disabled && {
                  borderColor: hoverTextColor ? hoverTextColor : Colors.green,
                  backgroundColor: backgroundHoverColor
                    ? backgroundHoverColor
                    : full
                      ? Colors.green
                      : undefined,
                },
            ]}
          >
            {icon}
            <Text
              style={[
                {
                  ...Fonts.style.textLink,
                  flexShrink: 1,
                  userSelect: "none",
                  MozUserSelect: "none",
                  WebkitUserSelect: "none",
                  msUserSelect: "none",
                  color: textColor ? textColor : Colors.black,
                },
                large && { ...Fonts.style.h2 },
                hovered &&
                  !disabled && {
                    color: hoverTextColor
                      ? hoverTextColor
                      : full
                        ? Colors.white
                        : Colors.green,
                  },
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

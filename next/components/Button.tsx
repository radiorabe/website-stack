"use client";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import { Linking, Pressable, Text, View } from "@/lib/server-react-native";
import { PressableState } from "@/lib/Types";
import Link from "next/link";
import { ReactElement } from "react";

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
  full?: boolean;
}

const Button = ({
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
                paddingVertical: large ? 13 : 8,
                paddingHorizontal: large ? 15 : 11,
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
            {icon && <View style={{ width: 18, height: 18 }}>{icon}</View>}
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

export default Button;

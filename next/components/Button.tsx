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
  labelAlign?: string;
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
  multiLine?: boolean;
}

const Button = ({
  url,
  label,
  labelAlign,
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
  multiLine,
}: Props) => {
  const button = (
    <Pressable
      style={[{ maxWidth: "100%" }, style]}
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
                maxWidth: "100%",
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
            {icon && (
              <View style={{ width: large ? 32 : 18, height: large ? 32 : 18 }}>
                {icon}
              </View>
            )}
            <Text
              numberOfLines={multiLine ? undefined : 1}
              style={[
                {
                  ...Fonts.style.textLink,
                  flexShrink: 1,
                  userSelect: "none",
                  MozUserSelect: "none",
                  WebkitUserSelect: "none",
                  msUserSelect: "none",
                  color: textColor ? textColor : Colors.black,
                  textAlign: labelAlign ? labelAlign : undefined,
                  maxWidth: "100%",
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
      <Link href={href} style={{ textDecoration: "none" }} passHref={true}>
        {button}
      </Link>
    );
  }

  return button;
};

export default Button;

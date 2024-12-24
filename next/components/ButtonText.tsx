"use client";
import { Linking, Pressable, Text } from "@/lib/server-react-native";
import { PressableState } from "@/lib/Types";
import Link from "next/link";
import { ReactElement } from "react";

export interface Props {
  url?: string;
  disabled?: boolean;
  onPress?(): void;
  style?: any;
  dataSet?: any;
  hoverStyle?: any;
  pressStyle?: any;
  focusStyle?: any;
  href?: string;
  children?: any;
  numberOfLines?: number;
}

const ButtonText = ({
  url,
  disabled,
  onPress,
  style,
  dataSet,
  hoverStyle,
  pressStyle,
  focusStyle,
  href,
  children,
  numberOfLines,
}: Props) => {
  const button = (
    <Pressable
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
          <Text
            style={[
              { textDecoration: "none" },
              style,
              hovered && hoverStyle,
              pressed && pressStyle,
              focused && focusStyle,
            ]}
            dataSet={dataSet}
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
        {button}
      </Link>
    );
  }

  return button;
};

export default ButtonText;

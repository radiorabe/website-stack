"use client";
import IconShare from "@/assets/svg/IconShare";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Link from "next/link";
import React, { ReactElement } from "react";
import { Text, Pressable, TextStyle, View, Linking } from "react-native";

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
}

const ButtonFull = ({ url, label, icon, href }: HoverableProps) => {
  const button = (
    <Pressable
      style={{}}
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
                paddingVertical: 3,
                paddingHorizontal: 6,
                backgroundColor: Colors.darkGreen,
              },
              hovered && {
                backgroundColor: Colors.green,
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

"use client";
import IconShare from "@/assets/svg/IconShare";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Link from "next/link";
import React, { ReactElement } from "react";
import { Text, Pressable, View, Linking } from "@/lib/server-react-native";

export type PressableState = Readonly<{
  pressed: boolean;
  hovered?: boolean;
  focused?: boolean;
}>;

export interface HoverableProps {
  url: string;
  label: string;
  icon?: any;
  disabled?: boolean;
}

const Button = ({ url, label, icon, disabled }: HoverableProps) => {
  return (
    <Pressable
      style={{}}
      onPress={() => {
        if (!disabled) {
          Linking.openURL(url);
        }
      }}
    >
      {({ pressed, hovered, focused }: PressableState): ReactElement => {
        return (
          <View
            style={[
              {
                borderColor: Colors.black,
                borderRadius: 9,
                borderWidth: 1,
                alignSelf: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 3,
                paddingHorizontal: 6,
              },
              hovered && {
                borderColor: Colors.green,
              },
            ]}
          >
            {icon}
            <Text
              style={[
                {
                  ...Fonts.style.textLink,
                  flexShrink: 1,
                },
                hovered && {
                  color: Colors.green,
                  borderColor: Colors.green,
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
};

export default Button;

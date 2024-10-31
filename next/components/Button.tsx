"use client";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import { Linking, Pressable, Text, View } from "@/lib/server-react-native";
import { ReactElement } from "react";

export type PressableState = Readonly<{
  pressed: boolean;
  hovered?: boolean;
  focused?: boolean;
}>;

export interface HoverableProps {
  url?: string;
  label: string;
  icon?: any;
  disabled?: boolean;
  onPress(): void;
}

const Button = ({ url, label, icon, disabled, onPress }: HoverableProps) => {
  return (
    <Pressable
      style={{}}
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
                  userSelect: "none",
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

"use client";
import { Linking, Pressable, Text } from "@/lib/server-react-native";
import { PressableState } from "@/lib/Types";
import { ReactElement } from "react";

export interface HoverableProps {
  style?: any;
  hoverStyle?: any;
  pressStyle?: any;
  focusStyle?: any;
  url: string;
  children?: any;
}

const HoverUrl = ({
  style,
  hoverStyle,
  pressStyle,
  focusStyle,
  url,
  children,
}: HoverableProps) => {
  return (
    <Pressable style={{}} onPress={() => Linking.openURL(url)}>
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
};

export default HoverUrl;

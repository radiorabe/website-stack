"use client";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import { Linking, Pressable, Text, View } from "@/lib/server-react-native";
import { PressableState } from "@/lib/Types";
import Link from "next/link";
import { ReactElement } from "react";
import StyleSheet from "react-native-media-query";

export interface Props {
  url?: string;
  label: string;
  icon?: any;
  disabled?: boolean;
  onPress?(): void;
  color?: any;
  hoverColor?: any;
  href?: string;
}

const { ids, styles } = StyleSheet.create({
  example: {
    backgroundColor: "green",
    borderRadius: 5,
    "@media (max-width: 1600px) and (min-width: 800px)": {
      backgroundColor: "red",
      borderRadius: 10,
    },
    "@media (max-width: 800px)": {
      backgroundColor: "blue",
      borderRadius: 15,
    },
  },
});

const Button = ({
  url,
  label,
  icon,
  disabled,
  onPress,
  color,
  hoverColor,
  href,
}: HoverableProps) => {
  const button = (
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
                borderColor: color ? color : Colors.black,
                borderRadius: 9,
                borderWidth: 1,
                alignSelf: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 3,
                paddingHorizontal: 6,
              },
              hovered && {
                borderColor: hoverColor ? hoverColor : Colors.green,
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
                  color: color ? color : Colors.black,
                  // "-webkit-user-select": "none",
                },
                hovered && {
                  color: hoverColor ? hoverColor : Colors.green,
                  borderColor: hoverColor ? hoverColor : Colors.green,
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

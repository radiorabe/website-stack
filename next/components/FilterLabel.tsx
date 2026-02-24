"use client";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import { Pressable, Text, View } from "@/lib/server-react-native";
import { PressableState } from "@/lib/Types";
import { ReactElement } from "react";

export interface HoverableProps {
  label: string;
  onPress?(): void;
  style?: any;
}

const FilterLabel = ({ label, onPress, style }: HoverableProps) => {
  return (
    <Pressable
      style={style}
      onPress={() => {
        onPress();
      }}
    >
      {({ pressed, hovered, focused }: PressableState): ReactElement<any> => {
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
            <Text
              style={[
                {
                  ...Fonts.style.textLink,
                  flexShrink: 1,
                  userSelect: "none",
                  MozUserSelect: "none",
                  WebkitUserSelect: "none",
                  msUserSelect: "none",
                  color: Colors.black,
                },
              ]}
            >
              {label}
            </Text>
            {/* {icon} */}
          </View>
        );
      }}
    </Pressable>
  );
};

export default FilterLabel;

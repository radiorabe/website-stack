"use client";
import metrics from "@/lib/Metrics";
import * as React from "react";
import { ReactElement, SVGProps } from "react";
import { Linking, Pressable } from "react-native";
const SvgComponent = ({ color, hoverColor, url, style }) => (
  <Pressable
    style={{ paddingHorizontal: metrics.baseMargin, ...style }}
    onPress={() => Linking.openURL(url)}
  >
    {({ pressed, hovered, focused }: PressableState): ReactElement => {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="26">
          <path
            fill="none"
            stroke={hovered ? hoverColor : color}
            strokeLinecap="round"
            strokeWidth={3}
            d="m2.048 24.524 6.406-11.373-6.406-11.1"
            data-name="Path 315"
          />
        </svg>
      );
    }}
  </Pressable>
);
export default SvgComponent;

"use client";
import metrics from "@/lib/Metrics";
import Link from "next/link";
import * as React from "react";
import { ReactElement, SVGProps } from "react";
import { Linking, Pressable } from "react-native";
const SvgComponent = ({ color, hoverColor, href, style }) => (
  <Link href={href} style={{ textDecoration: "none", maxWidth: `100%` }}>
    <Pressable style={{ paddingHorizontal: metrics.baseMargin, ...style }}>
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
  </Link>
);
export default SvgComponent;

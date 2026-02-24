"use client";
import { PressableState } from "@/lib/Types";
import { useRouter } from "next/navigation";
import { ReactElement } from "react";
import { Pressable } from "react-native";

const SvgComponent = ({ color, hoverColor, href, style }) => {
  const router = useRouter();

  return (
    <Pressable
      style={{
        ...style,
      }}
      onPress={() => router.push(href, { scroll: false })}
    >
      {({ pressed, hovered, focused }: PressableState): ReactElement<any> => {
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
};
export default SvgComponent;

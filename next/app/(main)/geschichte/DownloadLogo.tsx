"use client";
import { PressableState } from "@/lib/Types";
import { Linking, Pressable, View } from "@/lib/server-react-native";
import Image from "next/image";
import { ReactElement } from "react";
import { AspectRatio } from "react-aspect-ratio"; // Recommended: if you are using React > 15.6

export interface Props {
  label: string;
  url: string;
  style?: any;
}

const DownLoadLogo = ({ url, style, label }: Props) => {
  return (
    <AspectRatio
      ratio="1/1"
      style={{
        width: "12.4vw",
        ...style,
      }}
    >
      <Pressable
        style={{ overflow: "hidden", height: "100%" }}
        onPress={() => {
          Linking.openURL(url + "?download");
        }}
      >
        {({ pressed, hovered, focused }: PressableState): ReactElement => {
          return (
            <Image
              src={url + "?width=500&height=500&fit=cover"}
              width={120}
              height={120}
              style={{ borderRadius: 9, opacity: hovered ? 0.75 : 1 }}
              layout="responsive"
              alt={label}
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            ></Image>
          );
        }}
      </Pressable>
    </AspectRatio>
  );
};

export default DownLoadLogo;

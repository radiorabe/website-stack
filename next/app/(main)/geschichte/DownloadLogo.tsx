"use client";
import IconDownload from "@/assets/svg/IconDownload";
import { PressableState } from "@/components/AudioRabePlayer";
import { ItemsInfoBox, ItemsQuote } from "@/lib/api/data-contracts";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Linking, Pressable, Text, View } from "@/lib/server-react-native";
import { ReactElement } from "react";
import Image from "next/image";

export interface Props {
  label: string;
  url: string;
  style: any;
}

const InfoBox = ({ url, style, label }: Props) => {
  return (
    <Pressable
      style={{ flexGrow: 1, ...style }}
      onPress={() => {
        Linking.openURL(url + "?download");
      }}
    >
      {({ pressed, hovered, focused }: PressableState): ReactElement => {
        return (
          <View style={{}}>
            <Image
              src={url + "?width=120&height=120&fit=cover"}
              width={120}
              height={120}
              style={{ borderRadius: 9 }}
              layout="responsive"
              alt={label}
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            ></Image>
          </View>
        );
      }}
    </Pressable>
  );
};

export default InfoBox;

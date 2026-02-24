"use client";
import { PressableState } from "@/lib/Types";
import { Linking, Pressable, View } from "@/lib/server-react-native";
import Image from "next/image";
import { ReactElement } from "react";
import StyleSheet from "react-native-media-query";

export interface Props {
  label: string;
  url: string;
  style?: any;
}

const DownLoadLogo = ({ url, style, label }: Props) => {
  return (
    <View style={[styles.container, style]} dataSet={{ media: ids.container }}>
      <Pressable
        style={{ overflow: "hidden", height: "100%" }}
        onPress={() => {
          Linking.openURL(url + "?download");
        }}
      >
        {({ pressed, hovered, focused }: PressableState): ReactElement<any> => {
          return (
            <Image
              src={url + "?width=500&height=500&fit=cover"}
              width={120}
              height={120}
              style={{ borderRadius: 9, opacity: hovered ? 0.75 : 1 }}
              layout="responsive"
              alt={label}
              onError={event => { console.log("IMAGE ERROR ECONNRESET: ", event)}}
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            ></Image>
          );
        }}
      </Pressable>
    </View>
  );
};

export default DownLoadLogo;

const { styles, ids } = StyleSheet.create({
  container: {
    width: "12.4vw",
    "@media (max-width: 910px)": {
      width: "15.6vw",
    },
  },
});

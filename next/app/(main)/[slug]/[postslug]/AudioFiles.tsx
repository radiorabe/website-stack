"use client";
import { PressableState } from "@/components/AudioRabePlayer";
import { ItemsInfoBox, ItemsQuote } from "@/lib/api/data-contracts";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Linking, Pressable, Text, View } from "@/lib/server-react-native";
import { ReactElement } from "react";
import DownloadIcon from "./DownloadIcon";
import Playbutton from "@/assets/svg/Playbutton";

export interface Props {
  audioFiles: any[];
}

const AudioFiles = ({ audioFiles }: Props) => {
  return (
    <View
      style={{
        backgroundColor: Colors.lightGreen,
        borderRadius: 9,
        padding: Metrics.doubleBaseMargin,
      }}
    >
      <Text style={{ ...Fonts.style.h4 }}>
        {"Weitere Audios zu diesem Artikel"}
      </Text>
      {audioFiles.map((item) => {
        let audioFile = item.directus_files_id;
        console.log("audioFile", audioFile);
        return (
          <View
            key={"audiofiles" + audioFile.id}
            style={{
              flexDirection: "row",
              paddingTop: Metrics.baseMargin,
              paddingRight: Metrics.baseMargin,
              alignItems: "center",
            }}
          >
            <Playbutton scale={0.3} color={Colors.darkGreen}></Playbutton>
            <Text
              style={{ ...Fonts.style.text, paddingLeft: Metrics.baseMargin }}
            >
              {audioFile.title}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default AudioFiles;

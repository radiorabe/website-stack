"use client";
import Fonts from "@/lib/Fonts";
import { logError } from "@/lib/loging";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import moment from "moment";
import HoverText from "../HoverText";
import { Show } from "@/lib/Types";
import StyleSheet from "react-native-media-query";
import { useState } from "react";

export interface Props {
  playlistData: any;
  hoverColor: any;
  backgroundColor: any;
  textColor: any;
}

export default function PlayList({
  playlistData,
  backgroundColor,
  textColor,
}: Props) {
  return (
    <View style={styles.halfContainer} dataSet={{ media: ids.halfContainer }}>
      <View
        style={{
          width: "100%",
          overflow: "hidden",
          position: "relative",
          height: 190,
        }}
      >
        <View
          style={{
            // maxHeight: 190,
            // overflow: "scroll",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 10,
            right: -20,
            overflow: "scroll",
          }}
        >
          {playlistData &&
            playlistData.map((track, index) => {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    paddingTop: Metrics.halfBaseMargin,
                  }}
                  key={"todayshows" + index}
                >
                  <Text
                    style={{
                      ...Fonts.style.text,
                      color: textColor,
                      paddingRight: Metrics.doubleBaseMargin,
                    }}
                  >
                    {moment(track.attributes.started_at).format("HH:mm")}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={[
                      {
                        ...Fonts.style.navigationText,
                        fontSize: 18,
                        color: textColor,
                      },
                    ]}
                  >
                    {track.attributes.artist + " - " + track.attributes.title}
                  </Text>
                </View>
              );
            })}
        </View>
        <View
          style={{
            height: 30,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: `linear-gradient(0deg, ${backgroundColor}, transparent)`,
          }}
        ></View>
      </View>
    </View>
  );
}

const { ids, styles } = StyleSheet.create({
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    "@media (max-width: 910px)": {
      flexDirection: "column",
      justifyContent: "space-between",
    },
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    "@media (max-width: 910px)": {
      flexDirection: "column",
      justifyContent: "space-between",
    },
  },
  halfContainer: {
    width: "50%",
    "@media (max-width: 910px)": {
      width: "100%",
    },
  },
});

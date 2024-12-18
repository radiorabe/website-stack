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
        style={styles.innerContainer}
        dataSet={{ media: ids.innerContainer }}
      >
        <View
          style={{
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
                  style={styles.showContainer}
                  dataSet={{ media: ids.showContainer }}
                  key={"playlist" + index}
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
  innerContainer: {
    width: "100%",
    overflow: "hidden",
    position: "relative",
    height: 190,
    marginTop: Metrics.halfBaseMargin,
    "@media (max-width: 910px)": {
      height: 320,
      marginTop: Metrics.doubleBaseMargin,
    },
  },
  showContainer: {
    flexDirection: "row",
    paddingBottom: Metrics.halfBaseMargin,
    "@media (max-width: 910px)": {
      paddingBottom: Metrics.doubleBaseMargin,
    },
  },
  halfContainer: {
    width: "50%",
    "@media (max-width: 910px)": {
      width: "100%",
    },
  },
});
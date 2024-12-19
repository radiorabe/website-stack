"use client";
import { ReactElement } from "react";
import { Linking, Pressable, View } from "@/lib/server-react-native";
import Colors from "../../lib/Colors";
import Metrics from "../../lib/Metrics";
import IconFace from "./IconFace";
import IconFb from "./IconFb";
import IconInsta from "./IconInsta";
import IconSpotify from "./IconSpotify";
import IconStream from "./IconStream";
import IconYoutube from "./IconYoutube";
import { PressableState } from "@/lib/Types";
import StyleSheet from "react-native-media-query";

export interface Props {}

export const socialData = [
  { link: "https://www.facebook.com/RadioRaBe/", icon: IconFb },
  { link: "https://www.instagram.com/radiorabe", icon: IconInsta },
  { link: "https://m.twitch.tv/radio_rabe/home", icon: IconFace },
  {
    link: "https://open.spotify.com/show/1YztxGTBY438i1Vua9fj89?si=feb7693d3a33445e",
    icon: IconSpotify,
  },
  {
    link: "https://podcasts.apple.com/ch/podcast/radio-rabe/id1653943288",
    icon: IconStream,
  },
  {
    link: "https://www.youtube.com/channel/UCVnWoMqLjaenGhJo5EvV_pA",
    icon: IconYoutube,
  },
];

export default function BarIcon({}: Props) {
  return (
    <View style={styles.container} dataSet={{ media: ids.container }}>
      <View style={styles.halfContainer} dataSet={{ media: ids.halfContainer }}>
        {socialData.slice(0, 3).map((iconData, index) => {
          return (
            <View
              key={"Baricon1" + index}
              style={[styles.button]}
              dataSet={{ media: ids.button }}
            >
              <Pressable onPress={() => Linking.openURL(iconData.link)}>
                {({
                  pressed,
                  hovered,
                  focused,
                }: PressableState): ReactElement => {
                  return (
                    <iconData.icon color={Colors.lightGreen}></iconData.icon>
                  );
                }}
              </Pressable>
            </View>
          );
        })}
      </View>
      <View style={styles.halfContainer} dataSet={{ media: ids.halfContainer }}>
        {socialData.slice(3, 6).map((iconData, index) => {
          return (
            <View
              key={"Baricon2" + index}
              style={[styles.button]}
              dataSet={{ media: ids.button }}
            >
              <Pressable onPress={() => Linking.openURL(iconData.link)}>
                {({
                  pressed,
                  hovered,
                  focused,
                }: PressableState): ReactElement => {
                  return (
                    <iconData.icon color={Colors.lightGreen}></iconData.icon>
                  );
                }}
              </Pressable>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const { ids, styles } = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "100%",
    flexDirection: "row",
    // backgroundColor: "blue",
    "@media (max-width: 910px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  halfContainer: {
    flexDirection: "row",
    // backgroundColor: "yellow",
    marginTop: Metrics.doubleBaseMargin,
    "@media (max-width: 910px)": {
      alignItems: "center",
      marginTop: Metrics.quadBaseMargin,
    },
  },
  button: {
    width: Metrics.baseMargin,
    marginHorizontal: Metrics.halfBaseMargin,
    // backgroundColor: "red",
    opacity: 0.75,
    aspectRatio: 1,
    "@media (max-width: 910px)": {
      width: Metrics.quadBaseMargin,
      marginHorizontal: Metrics.halfQuadBaseMargin,
      opacity: 1,
    },
    ":hover": {
      opacity: 1,
    },
  },
});

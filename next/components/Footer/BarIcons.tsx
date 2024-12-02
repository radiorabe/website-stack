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

export interface HoverableProps {}

export default ({}: HoverableProps) => {
  return (
    <View
      style={{
        justifyContent: "center",
        flexDirection: "row",
        width: "100%",
      }}
    >
      <Pressable
        style={{}}
        onPress={() => Linking.openURL("https://www.facebook.com/RadioRaBe/")}
      >
        {({ pressed, hovered, focused }: PressableState): ReactElement => {
          let newColor = pressed
            ? Colors.darkGreen
            : hovered
              ? Colors.green
              : Colors.lightGreen;
          return <IconFb color={newColor}></IconFb>;
        }}
      </Pressable>

      <View style={{ width: Metrics.doubleBaseMargin, flexShrink: 1 }}></View>
      <Pressable
        style={{}}
        onPress={() => Linking.openURL("https://www.instagram.com/radiorabe")}
      >
        {({ pressed, hovered, focused }: PressableState): ReactElement => {
          let newColor = pressed
            ? Colors.darkGreen
            : hovered
              ? Colors.green
              : Colors.lightGreen;
          return <IconInsta color={newColor}></IconInsta>;
        }}
      </Pressable>

      <View style={{ width: Metrics.doubleBaseMargin, flexShrink: 1 }}></View>
      <Pressable
        style={{}}
        onPress={() => Linking.openURL("https://m.twitch.tv/radio_rabe/home")}
      >
        {({ pressed, hovered, focused }: PressableState): ReactElement => {
          let newColor = pressed
            ? Colors.darkGreen
            : hovered
              ? Colors.green
              : Colors.lightGreen;
          return <IconFace color={newColor}></IconFace>;
        }}
      </Pressable>

      <View style={{ width: Metrics.doubleBaseMargin, flexShrink: 1 }}></View>
      <Pressable
        style={{}}
        onPress={() =>
          Linking.openURL(
            "https://open.spotify.com/show/1YztxGTBY438i1Vua9fj89?si=feb7693d3a33445e"
          )
        }
      >
        {({ pressed, hovered, focused }: PressableState): ReactElement => {
          let newColor = pressed
            ? Colors.darkGreen
            : hovered
              ? Colors.green
              : Colors.lightGreen;
          return <IconSpotify color={newColor}></IconSpotify>;
        }}
      </Pressable>

      <View style={{ width: Metrics.doubleBaseMargin, flexShrink: 1 }}></View>

      <Pressable
        style={{}}
        onPress={() =>
          Linking.openURL(
            "https://podcasts.apple.com/ch/podcast/radio-rabe/id1653943288"
          )
        }
      >
        {({ pressed, hovered, focused }: PressableState): ReactElement => {
          let newColor = pressed
            ? Colors.darkGreen
            : hovered
              ? Colors.green
              : Colors.lightGreen;
          return <IconStream color={newColor}></IconStream>;
        }}
      </Pressable>
      <View style={{ width: Metrics.doubleBaseMargin, flexShrink: 1 }}></View>

      <Pressable
        style={{}}
        onPress={() =>
          Linking.openURL(
            "https://www.youtube.com/channel/UCVnWoMqLjaenGhJo5EvV_pA"
          )
        }
      >
        {({ pressed, hovered, focused }: PressableState): ReactElement => {
          let newColor = pressed
            ? Colors.darkGreen
            : hovered
              ? Colors.green
              : Colors.lightGreen;
          return <IconYoutube color={newColor}></IconYoutube>;
        }}
      </Pressable>
      <View style={{ width: Metrics.doubleBaseMargin, flexShrink: 1 }}></View>
    </View>
  );
};

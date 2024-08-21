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

export type PressableState = Readonly<{
  pressed: boolean;
  hovered?: boolean;
  focused?: boolean;
}>;

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
        onPress={() => Linking.openURL("https://www.facbook.com")}
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
        onPress={() => Linking.openURL("https://www.instagram.com")}
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
        onPress={() => Linking.openURL("https://www.facbook.com")}
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
        onPress={() => Linking.openURL("https://www.spotify.com")}
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
        onPress={() => Linking.openURL("https://www.facbook.com")}
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
        onPress={() => Linking.openURL("https://www.facbook.com")}
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

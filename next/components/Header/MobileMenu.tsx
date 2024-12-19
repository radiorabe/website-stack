"use client";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import { logError } from "@/lib/loging";
import Metrics from "@/lib/Metrics";
import { Linking, Pressable, Text, View } from "@/lib/server-react-native";
import { PressableState, Show } from "@/lib/Types";
import useResponsive from "@/lib/useResponsisve";
import moment from "moment";
import { ReactElement, useEffect, useState } from "react";
import StyleSheet from "react-native-media-query";
import LinkComponent from "../LinkComponent";
import Button from "../Button";
import AudioRabePlayer from "./AudioRabePlayer";
import dynamic from "next/dynamic";
import { socialData } from "../Footer/BarIcons";
const AudioRabePlayerLabel = dynamic(() => import("./AudioRabePlayerLabel"), {
  ssr: false,
});
export interface Props {
  showMenu: boolean;
  closeMenu(): void;
}

const buttonArray = [
  {
    href: "/programm",
    label: "Programm",
  },
  {
    href: "/mitmachen",
    label: "Mitmachen",
  },
  {
    href: "/kontakt",
    label: "Kontakt",
  },

  {
    href: "/team",
    label: "Team",
  },
  {
    href: "/praktikum",
    label: "Praktikum",
  },
  {
    href: "/kurse",
    label: "Kurse",
  },
  {
    href: "/empfangen",
    label: "Empfangen",
  },
];

export default function MobileMenu({ showMenu, closeMenu }: Props) {
  return (
    <View
      style={[styles.outerContainer, { left: showMenu ? 0 : "100%" }]}
      dataSet={{ media: ids.outerContainer }}
    >
      <View style={[styles.container]} dataSet={{ media: ids.container }}>
        <LinkComponent href={`/sendungen`} onPress={closeMenu}>
          <Text style={[styles.bigLink]} dataSet={{ media: ids.bigLink }}>
            {"Sendungen"}
          </Text>
        </LinkComponent>
        <View style={{ maxHeight: Metrics.octBaseMargin, flexGrow: 1 }}></View>
        <LinkComponent href={`/geschichte`} onPress={closeMenu}>
          <Text style={[styles.bigLink]} dataSet={{ media: ids.bigLink }}>
            {"Über Rabe"}
          </Text>
        </LinkComponent>
        <View style={{ maxHeight: Metrics.quadBaseMargin, flexGrow: 1 }}></View>

        <View
          style={{
            justifyContent: "center",
            flexWrap: "wrap",
            flexDirection: "row",
          }}
        >
          {buttonArray.map((item, index) => {
            return (
              <Button
                key={"mobileMenuButton" + index}
                href={item.href}
                label={item.label}
                textColor={Colors.lightGreen}
                hoverTextColor={Colors.green}
                large={true}
                style={{ margin: Metrics.doubleBaseMargin }}
              ></Button>
            );
          })}
        </View>
        <View style={{ maxHeight: Metrics.quadBaseMargin, flexGrow: 1 }}></View>

        <LinkComponent href={`/mitglied-werden`} onPress={closeMenu}>
          <Text style={[styles.bigLink]} dataSet={{ media: ids.bigLink }}>
            {"Mitglied werden"}
          </Text>
        </LinkComponent>
        <View style={{ maxHeight: Metrics.octBaseMargin, flexGrow: 1 }}></View>

        <View
          style={styles.playerContainer}
          dataSet={{ media: ids.playerContainer }}
        >
          <View
            style={styles.audioPlayerContainer}
            dataSet={{ media: ids.audioPlayerContainer }}
          >
            <AudioRabePlayer></AudioRabePlayer>
          </View>

          <View
            style={styles.audioPlayerLabelContainer}
            dataSet={{ media: ids.audioPlayerLabelContainer }}
          >
            <AudioRabePlayerLabel></AudioRabePlayerLabel>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "90%",
          height: "16vw",
          justifyContent: "space-between",
          bottom: 0,
        }}
      >
        {socialData.map((iconData, index) => {
          return (
            <View
              key={"mobileMenuitem" + index}
              style={[styles.iconButton]}
              dataSet={{ media: ids.iconButton }}
            >
              <Pressable
                key={"Baricon" + index}
                onPress={() => Linking.openURL(iconData.link)}
              >
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
  outerContainer: {
    pointerEvents: "auto",
    position: "fixed",
    top: 0,
    height: "100%",
    width: "100%",
    backgroundColor: Colors.darkGreen,
    overflow: "auto",
    overflowX: "hidden",
    transition: "left 0.3s ease-in-out",
    alignItems: "center",
    paddingHorizontal: Metrics.doubleBaseMargin,
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bigLink: {
    ...Fonts.style.h1,
    color: Colors.lightGreen,
  },
  playerContainer: {
    flexDirection: "row",
    width: "66%",
    alignItems: "center",
  },
  audioPlayerContainer: {
    width: "8vw",
    height: "8vw",
  },
  audioPlayerLabelContainer: {
    flexGrow: 1,
    marginLeft: Metrics.quadBaseMargin,
  },
  iconButton: {
    opacity: 1,
    aspectRatio: 1,
    width: Metrics.quadBaseMargin,
  },
});

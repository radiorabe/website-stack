"use client";
import { Text, View, TouchableOpacity, Pressable } from "react-native";
import StyleSheet from "react-native-media-query";

import Fonts from "../lib/Fonts";
import Metrics from "../lib/Metrics";
import Colors from "../lib/Colors";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LinkComponent from "./LinkComponent";
import { useRouter } from "next/navigation";
import Playbutton from "../assets/svg/Playbutton";
import Pausebutton from "../assets/svg/Pausebutton";
import React, { useState, useEffect, ReactElement } from "react";
import { useAudioPlayerContext } from "../context/audio-player-context";
import Loader from "react-spinners/BounceLoader";
import NavRabe from "./NavRabe";
import AudioRabePlayer from "./AudioRabePlayer";
export type PressableState = Readonly<{
  pressed?: boolean;
  hovered?: boolean;
  focused?: boolean;
}>;

const { ids, styles } = StyleSheet.create({
  container: {
    height: Metrics.navBarHeight,
    alignItems: "center",
    backgroundColor: Colors.lightGreen,
    width: "100%",
  },
  innerContainer: {
    flexDirection: "row",
    width: "100%",
    maxWidth: 1920,
    justifyContent: "space-between",
    // paddingHorizontal: Metrics.baseMargin,
  },
  navItemsContainer: {
    flexDirection: "row",
  },
  link: {
    color: "blue",
  },

  textContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  rabeLogo: {
    ...Fonts.style.navigation,
    fontSize: 18,
    color: Colors.darkGreen,
    ":hover": {
      color: Colors.green,
    },
  },
  rabeLogoBorder: {
    ...Fonts.style.navigation,
    fontSize: 18,
    color: Colors.darkGreen,
    borderWidth: 1,
    borderColor: Colors.darkGreen,
    padding: Metrics.halfBaseMargin,
    borderRadius: 10,
    ":hover": {
      color: Colors.green,
      borderColor: Colors.green,
    },
  },
  navItem: {
    flexDirection: "row",
    alignItems: "center",
    height: Metrics.navBarHeight,
    paddingHorizontal: Metrics.baseMargin,
    color: Colors.darkGreen,
    ":hover": {
      color: Colors.green,
    },
  },
  // navItemBorder: {
  //   borderWidth: 1,
  //   borderColor: Colors.darkGreen,
  //   padding: Metrics.halfBaseMargin,
  //   borderRadius: 10,
  //   ":hover": {
  //     borderColor: Colors.green,
  //   },
  // },
});

function Header() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {/* <View> */}
        <Pressable style={{}}>
          {({ pressed, hovered }: PressableState): ReactElement => {
            return (
              <LinkComponent
                href={`/`}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: Metrics.navBarHeight,
                }}
              >
                <NavRabe
                  style={{
                    paddingTop: 25,
                    paddingRight: Metrics.doubleBaseMargin,
                    paddingLeft: Metrics.doubleBaseMargin,
                  }}
                  color={hovered ? Colors.green : Colors.darkGreen}
                  scale={1}
                ></NavRabe>
                <Text
                  style={[styles.rabeLogo, hovered && { color: Colors.green }]}
                  dataSet={{ media: ids.rabeLogo }}
                >
                  RADIO BERN
                </Text>
              </LinkComponent>
            );
          }}
        </Pressable>
        {/* </View> */}

        <View style={styles.navItemsContainer}>
          <View style={styles.navItem}>
            <LinkComponent href={`/sendungen`}>
              <Text style={[styles.rabeLogo]} dataSet={{ media: ids.rabeLogo }}>
                Sendungen
              </Text>
            </LinkComponent>
          </View>
          <View style={styles.navItem}>
            <LinkComponent href={`/ueber-rabe`}>
              <Text style={[styles.rabeLogo]} dataSet={{ media: ids.rabeLogo }}>
                Über RaBe
              </Text>
            </LinkComponent>
          </View>
          <View style={styles.navItem}>
            <LinkComponent href={`/mitglied-werden`}>
              <Text
                style={styles.rabeLogoBorder}
                dataSet={{ media: ids.rabeLogoBorder }}
              >
                Mitglied werden
              </Text>
            </LinkComponent>
          </View>
          <View
            style={{
              width: 200,
              height: Metrics.navBarHeight,
              backgroundColor: Colors.darkGreen,
              justifyContent: "center",
              paddingHorizontal: Metrics.baseMargin,
              marginLeft: Metrics.baseMargin,
            }}
          >
            <AudioRabePlayer></AudioRabePlayer>
            {/* </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </View>
  );
}

export default Header;

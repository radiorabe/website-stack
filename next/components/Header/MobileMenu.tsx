"use client";
import IconArrowDown from "@/assets/svg/IconArrowDown";
import { useAudioPlayerContext } from "@/context/audio-player-context";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import StyleSheet from "react-native-media-query";
import ButtonText from "../ButtonText";
import LinkComponent from "../LinkComponent";
import PlayButton from "./PlayButton";

const AudioRabePlayerLabel = dynamic(() => import("./AudioRabePlayerLabel"), {
  ssr: false,
});
export interface Props {
  showMenu: boolean;
  closeMenu(): void;
}

const buttonArray = [
  {
    href: "/sendungen",
    label: "Sendungen",
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
    href: "/geschichte",
    label: "Geschichte",
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
  let [showDropdown, setShowDropdown] = useState(false);
  let track = {
    title: "Rabe Stream",
    src: "https://stream.rabe.ch/livestream/rabe-hd.mp3",
    author: "Trinix ft Rushawn",
  };
  const { currentTrack, setCurrentTrack, playerState, audioRef } =
    useAudioPlayerContext();
  let thisTrackSet = track.src === currentTrack.src;
  let thisTrackLoading = thisTrackSet && playerState === "loading";
  let thisTrackPlaying = thisTrackSet && playerState === "playing";

  useEffect(() => {
    if (showMenu) {
      setShowDropdown(false);
    }
  }, [showMenu]);

  return (
    <View
      style={[styles.outerContainer, { left: showMenu ? 0 : "100%" }]}
      dataSet={{ media: ids.outerContainer }}
    >
      <View style={[styles.container]} dataSet={{ media: ids.container }}>
        <LinkComponent href={`/programm`} onPress={closeMenu}>
          <Text style={[styles.bigLink]} dataSet={{ media: ids.bigLink }}>
            {"Programm"}
          </Text>
        </LinkComponent>
        <View style={{ height: Metrics.octBaseMargin }}></View>

        <View
          style={{ flexDirection: "row" }}
          onClick={() => {
            setShowDropdown(!showDropdown);
          }}
        >
          <Text style={[styles.bigLink]} dataSet={{ media: ids.bigLink }}>
            {"Über Rabe"}
          </Text>
          <View
            style={[
              { width: 32, marginLeft: Metrics.doubleBaseMargin },
              showDropdown && { transform: "rotate(180deg)" },
            ]}
          >
            <IconArrowDown color={Colors.white}></IconArrowDown>
          </View>
        </View>

        {showDropdown ? (
          <View
            style={{
              justifyContent: "center",
              paddingBottom: Metrics.quadBaseMargin,
            }}
          >
            {buttonArray.map((item, index) => {
              return (
                <ButtonText
                  key={"mobileMenuButton" + index}
                  href={item.href}
                  style={{
                    paddingTop: Metrics.quadBaseMargin,
                    ...Fonts.style.h2,
                    color: Colors.lightGreen,
                    alignSelf: "center",
                  }}
                >
                  {item.label}
                </ButtonText>
              );
            })}
          </View>
        ) : (
          <View style={{ height: Metrics.octBaseMargin }}></View>
        )}

        <LinkComponent href={`/mitglied-werden`} onPress={closeMenu}>
          <Text style={[styles.bigLink]} dataSet={{ media: ids.bigLink }}>
            {"Mitglied werden"}
          </Text>
        </LinkComponent>
        <View style={{ height: Metrics.octBaseMargin }}></View>

        <View
          style={styles.playerContainer}
          dataSet={{ media: ids.playerContainer }}
        >
          <View
            style={styles.buttonContainer}
            dataSet={{ media: ids.buttonContainer }}
          >
            <PlayButton
              state={
                thisTrackPlaying
                  ? "playing"
                  : !thisTrackPlaying && !thisTrackLoading
                    ? "paused"
                    : "loading"
              }
              onPress={() => {
                if (thisTrackPlaying) {
                  audioRef.current?.pause();
                } else if (!thisTrackPlaying && !thisTrackLoading) {
                  setCurrentTrack(track);
                  // audioRef.current?.pause();
                  audioRef.current?.load();
                }
              }}
              width={undefined}
            ></PlayButton>
          </View>

          <View
            style={styles.audioPlayerLabelContainer}
            dataSet={{ media: ids.audioPlayerLabelContainer }}
          >
            <AudioRabePlayerLabel></AudioRabePlayerLabel>
          </View>
        </View>
      </View>
      {/* <View
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
      </View> */}
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
    overflow: "scroll", // make it scroll so the main page is not scrolling
    overflowX: "hidden",
    transition: "left 0.3s ease-in-out",
    alignItems: "center",
    padding: Metrics.quadBaseMargin,
  },
  container: {
    flexGrow: 1,
    width: "100%",
    minHeight: "101%", // make it a little bigger so it scrolls, so the main page is not scrolling
    alignItems: "center",
    justifyContent: "center",
  },
  bigLink: {
    ...Fonts.style.h1,
    color: Colors.lightGreen,
    textAlign: "center",
  },
  playerContainer: {
    width: "90vw",
    alignItems: "center",
    // backgroundColor: "orange",
  },
  audioPlayerLabelContainer: {
    width: "100%",
    marginTop: Metrics.quadBaseMargin,
    alignItems: "center",
  },
  buttonContainer: {
    width: Metrics.octBaseMargin,
  },
  iconButton: {
    opacity: 1,
    aspectRatio: 1,
    width: Metrics.quadBaseMargin,
  },
});

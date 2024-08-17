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

  let track = {
    title: "Rabe Stream",
    src: "http://stream.rabe.ch/livestream/rabe-hd.mp3.m3u",
    // src: "http://localhost:1337/assets/5d4ac6ec-fbb7-4b71-aa5c-7c61e4fa9618",
    author: "Trinix ft Rushawn",
  };
  const {
    currentTrack,
    setCurrentTrack,
    playerState,
    setPlayerState,
    setDuration,
    duration,
    setTimeProgress,
    progressBarRef,
    audioRef,
  } = useAudioPlayerContext();
  // console.log("playerState header", playerState);

  const onWaiting = () => {
    console.log("onWaiting");
    setPlayerState("waiting");
  };
  const onPlaying = () => {
    console.log("onPlaying");
    setPlayerState("playing");
  };

  const onPause = () => {
    console.log("onPlaying");
    setPlayerState("paused");
  };
  const onCanplay = () => {
    console.log("onCanplay");
    audioRef.current?.play();
    setPlayerState("canplay");
  };

  const onLoadStart = () => {
    console.log("onLoadStart");
    setPlayerState("loading");
  };

  const onLoad = () => {
    console.log("onLoad");
  };

  const onAbort = () => {
    console.log("onAbort");
    setPlayerState("aborted");
  };

  const onTimeUpdate = () => {
    console.log("onTimeUpdate");
    setTimeProgress(audioRef.current.currentTime);
  };

  const onLoadedMetadata = () => {
    console.log(audioRef.current?.duration);
    const seconds = audioRef.current?.duration;
    if (seconds !== undefined) {
      setDuration(seconds);
      if (progressBarRef.current) {
        progressBarRef.current.max = seconds.toString();
      }
    }
  };

  let thisTrackLoading =
    track.src === currentTrack.src && playerState === "loading";
  let thisTrackPlaying =
    track.src === currentTrack.src && playerState === "playing";

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
            <View>
              <audio
                // key={currentTrack.src}
                // src={currentTrack.src}
                ref={audioRef}
                onWaiting={onWaiting}
                onPlaying={onPlaying}
                onPause={onPause}
                onAbort={onAbort}
                onCanPlay={onCanplay}
                onLoad={onLoad}
                onLoadStart={onLoadStart}
                onLoadedMetadata={onLoadedMetadata}
                onTimeUpdate={onTimeUpdate}
              >
                <source src={currentTrack.src} type="audio/mpeg" />
              </audio>

              {thisTrackPlaying && (
                <Pressable
                  style={{}}
                  onPress={() => {
                    audioRef.current?.pause();
                  }}
                >
                  {({ pressed, hovered }: PressableState): ReactElement => {
                    let newColor = pressed
                      ? Colors.darkGreen
                      : hovered
                        ? Colors.green
                        : Colors.lightGreen;
                    return (
                      <Pausebutton color={newColor} scale={0.6}></Pausebutton>
                    );
                  }}
                </Pressable>
              )}
              {!thisTrackPlaying && !thisTrackLoading && (
                <Pressable
                  style={{}}
                  onPress={() => {
                    setCurrentTrack(track);
                    // audioRef.current?.pause();
                    audioRef.current?.load();
                  }}
                >
                  {({ pressed, hovered }: PressableState): ReactElement => {
                    let newColor = pressed
                      ? Colors.darkGreen
                      : hovered
                        ? Colors.green
                        : Colors.lightGreen;
                    return (
                      <Playbutton color={newColor} scale={0.6}></Playbutton>
                    );
                  }}
                </Pressable>
              )}
              {thisTrackLoading && (
                <View style={{ width: 38, height: 38 }}>
                  <Loader
                    color={Colors.green}
                    size={38}
                    loading={true}
                  ></Loader>
                </View>
              )}
            </View>
            {/* </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </View>
  );
}

export default Header;

"use client";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native-web";
import Fonts from "../lib/Fonts";
import Metrics from "../lib/Metrics";
import Colors from "../lib/Colors";
import Image from "next/image";
import { withMedia } from "../hocs/withMedia";
import Hoverable from "./Hoverable";
import { usePathname } from "next/navigation";
import LinkComponent from "./LinkComponent";
import { useRouter } from "next/navigation";
import Playbutton from "../assets/svg/Playbutton";
import Pausebutton from "../assets/svg/Pausebutton";
import React, { useState, useEffect } from "react";
import { useAudioPlayerContext } from "../context/audio-player-context";
import Loader from "react-spinners/BounceLoader";

const styles = StyleSheet.create({
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
  },
  navItem: {
    flexDirection: "row",
    alignItems: "center",
    height: Metrics.navBarHeight,
    paddingHorizontal: Metrics.baseMargin,
  },
});

function Navigation(props) {
  const pathname = usePathname();
  const router = useRouter();
  const { currentTrack } = useAudioPlayerContext();

  console.log("pathname:", pathname);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  const { audioRef } = useAudioPlayerContext();

  const onWaiting = () => {
    setIsWaiting(true);
    console.log("onWaiting");
  };
  const onPlaying = () => {
    setIsWaiting(false);

    console.log("onPlaying");
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, audioRef]);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Hoverable>
          {(hover) => (
            <View>
              <LinkComponent
                href={`/`}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: Metrics.navBarHeight,
                }}
              >
                <Image
                  src="/svgs/Nav Rabe.svg"
                  width={80}
                  height={80}
                  style={{
                    transform: "translateX(0) translateY(-10px)",
                    paddingRight: Metrics.doubleBaseMargin,
                    paddingLeft: Metrics.baseMargin,
                  }}
                  alt="Picture of the author"
                />
                <Text
                  style={[styles.rabeLogo, hover && { color: Colors.green }]}
                >
                  RADIO BERN
                </Text>
              </LinkComponent>
            </View>
          )}
        </Hoverable>
        <View style={styles.navItemsContainer}>
          <Hoverable>
            {(hover) => (
              <View style={styles.navItem}>
                <LinkComponent href={`/sendungen`}>
                  <Text
                    style={[styles.rabeLogo, hover && { color: Colors.green }]}
                  >
                    Sendungen
                  </Text>
                </LinkComponent>
              </View>
            )}
          </Hoverable>

          <Hoverable>
            {(hover) => (
              <View style={styles.navItem}>
                <LinkComponent href={`/ueber-rabe`}>
                  <Text
                    style={[styles.rabeLogo, hover && { color: Colors.green }]}
                  >
                    Über RaBe
                  </Text>
                </LinkComponent>
              </View>
            )}
          </Hoverable>

          <Hoverable>
            {(hover) => (
              <View style={styles.navItem}>
                <LinkComponent
                  href={`/mitglied-werden`}
                  style={{
                    borderWidth: 1,
                    borderColor: hover ? Colors.green : Colors.darkGreen,
                    padding: Metrics.halfBaseMargin,
                    borderRadius: 10,
                  }}
                >
                  <Text
                    style={[styles.rabeLogo, hover && { color: Colors.green }]}
                  >
                    Mitglied werden
                  </Text>
                </LinkComponent>
              </View>
            )}
          </Hoverable>
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
            <TouchableOpacity onPress={() => setIsPlaying(!isPlaying)}>
              <View>
                <audio
                  src={currentTrack.src}
                  ref={audioRef}
                  onWaiting={onWaiting}
                  onPlaying={onPlaying}
                />

                {!isWaiting && isPlaying && (
                  <Pausebutton
                    color={Colors.lightGreen}
                    scale={0.6}
                  ></Pausebutton>
                )}
                {!isWaiting && !isPlaying && (
                  <Playbutton
                    color={Colors.lightGreen}
                    scale={0.6}
                  ></Playbutton>
                )}
                {isWaiting && (
                  <View style={{ width: 38, height: 38 }}>
                    <Loader
                      color={Colors.lightGreen}
                      size={38}
                      loading={isWaiting}
                    ></Loader>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default withMedia(Navigation);

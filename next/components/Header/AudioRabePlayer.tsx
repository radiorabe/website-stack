"use client";
import Pausebutton from "@/assets/svg/Pausebutton";
import Playbutton from "@/assets/svg/Playbutton";
import { useAudioPlayerContext } from "@/context/audio-player-context";
import Colors from "@/lib/Colors";
import "rc-slider/assets/index.css";
import { ReactElement } from "react";
import { View, Pressable } from "@/lib/server-react-native";

import Loader from "react-spinners/BounceLoader";
import dynamic from "next/dynamic";
import Metrics from "@/lib/Metrics";
import { PressableState } from "@/lib/Types";

import StyleSheet from "react-native-media-query";
import PlayButton from "./PlayButton";

const AudioRabePlayerLabel = dynamic(() => import("./AudioRabePlayerLabel"), {
  ssr: false,
});

export interface HoverableProps {}

const AudioRabePlayer = ({}: HoverableProps) => {
  let track = {
    title: "Rabe Stream",
    src: "https://stream.rabe.ch/livestream/rabe-hd.mp3",
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
    // console.log("onWaiting");
    setPlayerState("waiting");
  };
  const onPlaying = () => {
    // console.log("onPlaying");
    setPlayerState("playing");
  };

  const onPause = () => {
    // console.log("onPlaying");
    setPlayerState("paused");
  };

  const onCanplay = () => {
    // console.log("onCanplay");
    audioRef.current?.play();
    setPlayerState("canplay");
  };

  const onLoadStart = () => {
    // console.log("onLoadStart");
    setPlayerState("loading");
    // audioRef.current?.play();
  };

  const onLoad = () => {
    // console.log("onLoad");
  };

  const onAbort = () => {
    // console.log("onAbort");
    setPlayerState("aborted");
  };

  const onTimeUpdate = () => {
    // console.log("onTimeUpdate");
    setTimeProgress(audioRef.current.currentTime);
  };

  const onprogress = (p) => {
    // console.log("onprogress", p);
  };

  const onLoadedData = (p) => {
    // console.log("onLoadedData", p);
  };

  const onCanPlayThrough = (p) => {
    // console.log("onCanPlayThrough", p);
  };

  const onError = (event) => {
    // console.log("onError", event);
  };

  const onEmptied = (p) => {
    // console.log("onEmptied", p);
  };
  const onStalled = (p) => {
    // console.log("onStalled", p);
  };

  const onLoadedMetadata = () => {
    // console.log(audioRef.current?.duration);
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
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <audio
        // key={currentTrack.src}
        // src={currentTrack.src}
        preload={"auto"} // hint for browser to start download the stream for faster user experience
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
        onProgress={onprogress}
        onLoadedData={onLoadedData}
        onCanPlayThrough={onCanPlayThrough}
        onEmptied={onEmptied}
        onStalled={onStalled}
        onError={(e) => onError(e)}
      >
        <source src={currentTrack.src} type="audio/mpeg" />
      </audio>
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
        ></PlayButton>
      </View>

      <View
        style={styles.audioPlayerLabelContainer}
        dataSet={{ media: ids.audioPlayerLabelContainer }}
      >
        <AudioRabePlayerLabel></AudioRabePlayerLabel>
      </View>
    </View>
  );
};

export default AudioRabePlayer;

const { ids, styles } = StyleSheet.create({
  buttonContainer: {
    width: Metrics.doubleBaseMargin,
    "@media (max-width: 910px)": {
      width: Metrics.quadBaseMargin,
    },
  },
  audioPlayerLabelContainer: {
    flexGrow: 1,
    paddingLeft: Metrics.doubleBaseMargin,
    "@media (max-width: 910px)": {
      display: "none",
    },
  },
});

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

const AudioRabePlayerLabel = dynamic(() => import("./AudioRabePlayerLabel"), {
  ssr: false,
});

export type PressableState = Readonly<{
  pressed: boolean;
  hovered?: boolean;
  focused?: boolean;
}>;

export interface HoverableProps {}

const AudioRabePlayer = ({}: HoverableProps) => {
  let track = {
    title: "Rabe Stream",
    src: "http://stream.rabe.ch/livestream/rabe-hd.mp3.m3u",
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
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
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
            return <Pausebutton color={newColor} scale={0.6}></Pausebutton>;
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
            return <Playbutton color={newColor} scale={0.6}></Playbutton>;
          }}
        </Pressable>
      )}
      {thisTrackLoading && (
        <View style={{ width: 38, height: 38 }}>
          <Loader color={Colors.green} size={38} loading={true}></Loader>
        </View>
      )}
      <View style={{ flexGrow: 1, paddingLeft: Metrics.doubleBaseMargin }}>
        <AudioRabePlayerLabel></AudioRabePlayerLabel>
      </View>
    </View>
  );
};

export default AudioRabePlayer;

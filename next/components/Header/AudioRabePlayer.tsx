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
import useResponsive from "@/lib/useResponsisve";
import AspectRatio from "react-aspect-ratio";

const AudioRabePlayerLabel = dynamic(() => import("./AudioRabePlayerLabel"), {
  ssr: false,
});

export interface HoverableProps {}

const AudioRabePlayer = ({}: HoverableProps) => {
  const { isClient, isMobile } = useResponsive();

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

      {isClient && thisTrackPlaying && (
        <AspectRatio
          ratio="1/1"
          style={{
            width: isMobile ? "8vw" : "3vw",
          }}
        >
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
                <Pausebutton
                  color={newColor}
                  height="100%"
                  width="100%"
                ></Pausebutton>
              );
            }}
          </Pressable>
        </AspectRatio>
      )}
      {isClient && !thisTrackPlaying && !thisTrackLoading && (
        <AspectRatio
          ratio="1/1"
          style={{
            width: isMobile ? "8vw" : "3vw",
          }}
        >
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
                <Playbutton
                  color={newColor}
                  height="100%"
                  width="100%"
                ></Playbutton>
              );
            }}
          </Pressable>
        </AspectRatio>
      )}
      {thisTrackLoading && (
        <View
          style={{
            width: isMobile ? "8vw" : "3vw",
            height: isMobile ? "8vw" : "3vw",
          }}
        >
          <Loader
            color={Colors.green}
            size={isMobile ? "8vw" : "3vw"}
            loading={true}
          ></Loader>
        </View>
      )}
      {!isMobile && (
        <View style={{ flexGrow: 1, paddingLeft: Metrics.doubleBaseMargin }}>
          <AudioRabePlayerLabel></AudioRabePlayerLabel>
        </View>
      )}
    </View>
  );
};

export default AudioRabePlayer;

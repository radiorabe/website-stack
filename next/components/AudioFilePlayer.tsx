"use client";
import IconShare from "@/assets/svg/IconShare";
import Pausebutton from "@/assets/svg/Pausebutton";
import Playbutton from "@/assets/svg/Playbutton";
import { useAudioPlayerContext } from "@/context/audio-player-context";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import metrics from "@/lib/Metrics";
import Link from "next/link";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { View, Text, Pressable } from "@/lib/server-react-native";

import Loader from "react-spinners/BounceLoader";
import { PressableState } from "@/lib/Types";

export interface HoverableProps {
  src: string;
}

const AudioFilePlayer = ({ src }: HoverableProps) => {
  let track = { src: src, title: "flakbja", author: "alksdjf " };
  const {
    currentTrack,
    setCurrentTrack,
    playerState,
    progressBarRef,
    audioRef,
    setTimeProgress,
    timeProgress,
    duration,
  } = useAudioPlayerContext();
  const [localTimeProgress, setLocalTimeProgress] = useState<number>(0);
  const [localyChanging, setLocalyChanging] = useState<boolean>(false);

  let thisTrackSet = track.src === currentTrack.src;
  let thisTrackLoading = thisTrackSet && playerState === "loading";
  let thisTrackPlaying = thisTrackSet && playerState === "playing";

  const handleProgressChange = (progress) => {
    if (thisTrackSet && audioRef.current) {
      setLocalyChanging(true);
      setLocalTimeProgress(progress);
    }
  };

  const handleProgressChangeComplete = (progress) => {
    if (thisTrackSet && audioRef.current) {
      let newTime = (progress * duration) / 100;
      audioRef.current.currentTime = newTime;
      setLocalTimeProgress(progress);
      setTimeProgress(progress);
      setLocalyChanging(false);
    }
  };

  const formatTime = (time: number | undefined): string => {
    if (!thisTrackSet) {
      return "00:00";
    }
    if (typeof time === "number" && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      // Convert to string and pad with leading zeros if necessary
      const formatMinutes = minutes.toString().padStart(2, "0");
      const formatSeconds = seconds.toString().padStart(2, "0");
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  useEffect(() => {
    if (thisTrackPlaying && !localyChanging) {
      setLocalTimeProgress((timeProgress / duration) * 100);
    }
    if (!thisTrackSet) {
      setLocalTimeProgress(0);
    }
  }, [localyChanging, timeProgress, thisTrackPlaying, thisTrackSet]);

  return (
    <View>
      {/* <div className="flex items-center justify-center gap-5 w-full"> */}
      <View style={{ flexDirection: "row" }}>
        <View>
          {thisTrackPlaying && (
            <Pressable
              style={{}}
              onPress={() => {
                audioRef.current?.pause();
              }}
            >
              {({ pressed, hovered }: PressableState): ReactElement => {
                let newColor = pressed
                  ? Colors.lightGreen
                  : hovered
                    ? Colors.darkGreen
                    : Colors.green;
                return <Pausebutton color={newColor} scale={1}></Pausebutton>;
              }}
            </Pressable>
          )}
          {!thisTrackLoading && !thisTrackPlaying && (
            <Pressable
              style={{}}
              onPress={() => {
                if (!thisTrackSet) {
                  setCurrentTrack(track);
                  audioRef.current?.load();
                } else {
                  audioRef.current?.play();
                }
              }}
            >
              {({ pressed, hovered }: PressableState): ReactElement => {
                let newColor = pressed
                  ? Colors.lightGreen
                  : hovered
                    ? Colors.darkGreen
                    : Colors.green;
                return <Playbutton color={newColor} scale={1}></Playbutton>;
              }}
            </Pressable>
          )}
          {thisTrackLoading && (
            <View style={{ width: 64, height: 64 }}>
              <Loader color={Colors.green} size={64} loading={true}></Loader>
            </View>
          )}
        </View>
        <View
          style={{
            flexGrow: 1,
            paddingLeft: metrics.tripleBaseMargin,
            paddingVertical: 3,
            justifyContent: "space-between",
          }}
        >
          <Slider
            value={localTimeProgress}
            onChange={handleProgressChange}
            onChangeComplete={handleProgressChangeComplete}
            step={0.1}
            styles={{
              track: {
                backgroundColor: Colors.green,
                height: 4,
              },
              rail: { backgroundColor: Colors.lightGreen, height: 4 },
              handle: {
                backgroundColor: Colors.white,
                borderColor: Colors.green,
                borderWidth: 3,
              },
            }}
          />
          <View
            style={{
              paddingTop: metrics.baseMargin,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ ...Fonts.style.navigation, color: Colors.green }}>
              {formatTime(timeProgress)}
            </Text>

            <Text style={{ ...Fonts.style.navigation, color: Colors.green }}>
              {formatTime(duration)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AudioFilePlayer;

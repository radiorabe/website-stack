"use client";
import Pausebutton from "@/assets/svg/Pausebutton";
import Playbutton from "@/assets/svg/Playbutton";
import Colors from "@/lib/Colors";
import { Pressable, View } from "@/lib/server-react-native";
import "rc-slider/assets/index.css";
import { ReactElement } from "react";

import Metrics from "@/lib/Metrics";
import { PressableState } from "@/lib/Types";
import Loader from "react-spinners/BounceLoader";

import StyleSheet from "react-native-media-query";

export interface Props {
  state: "playing" | "paused" | "loading";
  width: any;
  onPress(): void;
}

const PlayButton = ({ state, onPress }: Props) => {
  return (
    <View
      style={styles.buttonContainer}
      dataSet={{ media: ids.buttonContainer }}
    >
      {state === "playing" && (
        <Pressable style={{}} onPress={onPress}>
          {({ pressed, hovered }: PressableState): ReactElement<any> => {
            let newColor = pressed
              ? Colors.darkGreen
              : hovered
                ? Colors.green
                : Colors.lightGreen;
            return <Pausebutton color={newColor}></Pausebutton>;
          }}
        </Pressable>
      )}
      {state === "paused" && (
        <Pressable style={{}} onPress={onPress}>
          {({ pressed, hovered }: PressableState): ReactElement<any> => {
            let newColor = pressed
              ? Colors.darkGreen
              : hovered
                ? Colors.green
                : Colors.lightGreen;
            return <Playbutton color={newColor}></Playbutton>;
          }}
        </Pressable>
      )}
      {state === "loading" && (
        <Loader color={Colors.green} size={"100%"} loading={true}></Loader>
      )}
    </View>
  );
};

export default PlayButton;

const { ids, styles } = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    aspectRatio: 1,
  },
});

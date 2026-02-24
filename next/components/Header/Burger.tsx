"use client";
import Colors from "@/lib/Colors";
import { Pressable, View } from "@/lib/server-react-native";
import { ReactElement } from "react";

import { PressableState } from "@/lib/Types";

import { disableScroll, enableScroll } from "@/lib/scroll";
import StyleSheet from "react-native-media-query";
import BurgerIcon from "./BurgerIcon";
import CloseIcon from "./CloseIcon";

export interface Props {
  menuOpen: boolean;
  onPress(): void;
}

const Burger = ({ onPress, menuOpen }: Props) => {
  return (
    <View style={{ width: "5vw", aspectRatio: 1 }}>
      <Pressable
        style={{
          overflow: "hidden",
          height: "100%",
        }}
        onPress={() => {
          onPress();
          if (menuOpen) {
            enableScroll();
          } else {
            disableScroll();
          }
        }}
      >
        {({ pressed, hovered, focused }: PressableState): ReactElement<any> => {
          return (
            <View>
              {menuOpen ? (
                <CloseIcon
                  color={hovered ? Colors.green : Colors.lightGreen}
                ></CloseIcon>
              ) : (
                <BurgerIcon
                  color={hovered ? Colors.green : Colors.lightGreen}
                ></BurgerIcon>
              )}
            </View>
          );
        }}
      </Pressable>
    </View>
  );
};

export default Burger;

const { ids, styles } = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    aspectRatio: 1,
  },
});

"use client";
import ButtonFull from "@/components/ButtonFull";
import RenderTipTap from "@/components/RenderTipTap";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Pressable, Text, View } from "@/lib/server-react-native";
import { PressableState } from "@/lib/Types";
import moment from "moment";
import { ReactElement, useState } from "react";
import ShowInfoText from "../praktikum/InfoText";
import ArrowIcon from "./ArrowIcon";

export interface Props {
  classItem: any;
}

const ClassDropDown = ({ classItem }: Props) => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <View
      style={{
        marginBottom: Metrics.doubleBaseMargin,
        backgroundColor: Colors.lightGreen,
        borderRadius: 9,
        padding: Metrics.doubleBaseMargin,
      }}
    >
      <Pressable
        style={{ marginBottom: isOpen ? Metrics.doubleBaseMargin : 0 }}
        onPress={() => setIsOpen(!isOpen)}
      >
        {({ pressed, hovered, focused }: PressableState): ReactElement => {
          return (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  ...Fonts.style.h2,
                }}
              >
                {classItem.title}
              </Text>

              <View
                style={{
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <ArrowIcon
                  color={hovered ? Colors.green : Colors.darkGreen}
                ></ArrowIcon>
              </View>
            </View>
          );
        }}
      </Pressable>
      {isOpen && (
        <View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              paddingBottom: Metrics.doubleBaseMargin,
            }}
          >
            <View style={{ width: "50%" }}>
              {classItem.date && (
                <ShowInfoText
                  label="Datum"
                  text={moment(classItem.date).format("DD. MMMM YYYY")}
                ></ShowInfoText>
              )}
              {classItem.time_start && (
                <ShowInfoText
                  label="Zeit"
                  text={
                    moment(classItem.time_start) +
                    " - " +
                    moment(classItem.time_end)
                  }
                ></ShowInfoText>
              )}
              {classItem.location && (
                <ShowInfoText
                  label="Standort"
                  text={classItem.location}
                ></ShowInfoText>
              )}
            </View>

            <View style={{ width: "50%" }}>
              {classItem.price && (
                <ShowInfoText
                  label="Kosten"
                  text={classItem.price}
                ></ShowInfoText>
              )}
              {classItem.teacher && (
                <ShowInfoText
                  label="KursleiterIn"
                  text={classItem.teacher}
                ></ShowInfoText>
              )}
              {classItem.what_else && (
                <ShowInfoText
                  label="Webseite"
                  text={classItem.what_else}
                ></ShowInfoText>
              )}
            </View>
          </View>
          <View>
            {classItem.content && (
              <RenderTipTap
                content={classItem.content}
                topProps={{
                  linkColor: Colors.green,
                  linkHoverColor: Colors.darkGreen,
                }}
              ></RenderTipTap>
            )}
          </View>
          <View
            style={{
              alignItems: "flex-start",
            }}
          >
            <ButtonFull
              label={"Jetzt anmelden"}
              href={"mailto:" + classItem.email}
              full
              textColor={Colors.white}
            ></ButtonFull>
          </View>
        </View>
      )}
    </View>
  );
};

export default ClassDropDown;

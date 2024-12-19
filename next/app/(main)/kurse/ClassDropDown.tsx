"use client";
import Button from "@/components/Button";
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
import StyleSheet from "react-native-media-query";

export interface Props {
  classItem: any;
}

const ClassDropDown = ({ classItem }: Props) => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <View style={styles.container} dataSet={{ media: ids.container }}>
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
                    classItem.time_start.slice(0, -3) +
                    " - " +
                    classItem.time_end.slice(0, -3)
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
                  label="Was noch"
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
            <Button
              label={"Jetzt anmelden"}
              href={"mailto:" + classItem.email}
              full
              textColor={Colors.white}
            ></Button>
          </View>
        </View>
      )}
    </View>
  );
};

export default ClassDropDown;

const { styles, ids } = StyleSheet.create({
  container: {
    marginBottom: Metrics.doubleBaseMargin,
    backgroundColor: Colors.lightGreen,
    borderRadius: 9,
    padding: Metrics.doubleBaseMargin,
    "@media (max-width: 910px)": {
      marginBottom: Metrics.tripleBaseMargin,
    },
  },
});

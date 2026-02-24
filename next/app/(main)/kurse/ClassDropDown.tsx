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
        {({ pressed, hovered, focused }: PressableState): ReactElement<any> => {
          return (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.title} dataSet={{ media: ids.title }}>
                {classItem.title}
              </Text>

              <View
                style={[
                  styles.arrowContainer,
                  { transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" },
                ]}
                dataSet={{ media: ids.arrowContainer }}
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
              flexWrap: "wrap",
              width: "100%",
              paddingBottom: Metrics.doubleBaseMargin,
            }}
          >
            <View
              style={styles.halfContainer}
              dataSet={{ media: ids.halfContainer }}
            >
              {classItem.date && (
                <ShowInfoText
                  label="Datum"
                  text={moment(classItem.date).format("D. MMMM YYYY")}
                  bold
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
                  bold
                ></ShowInfoText>
              )}
              {classItem.location && (
                <ShowInfoText
                  label="Standort"
                  text={classItem.location}
                  bold
                ></ShowInfoText>
              )}
            </View>

            <View
              style={styles.halfContainer}
              dataSet={{ media: ids.halfContainer }}
            >
              {classItem.price && (
                <ShowInfoText
                  label="Kosten"
                  text={classItem.price}
                  bold
                ></ShowInfoText>
              )}
              {classItem.teacher && (
                <ShowInfoText
                  label="KursleiterIn"
                  text={classItem.teacher}
                  bold
                ></ShowInfoText>
              )}
              {classItem.what_else && (
                <ShowInfoText
                  label="Was noch"
                  text={classItem.what_else}
                  bold
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
  title: {
    ...Fonts.style.h2,
    "@media (max-width: 910px)": {
      lineHeight: 22,
      fontSize: 18,
    },
  },
  halfContainer: {
    width: "50%",
    "@media (max-width: 910px)": {
      width: "100%",
    },
  },
  arrowContainer: {
    width: 42,
    "@media (max-width: 910px)": {
      width: 22,
    },
  },
});

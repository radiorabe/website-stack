"use client";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import moment from "moment";
import StyleSheet from "react-native-media-query";
import HoverText from "../HoverText";

export interface Props {
  initialShows: any;
  currentShow: any;
  hoverColor: any;
  backgroundColor: any;
  textColor: any;
}

export default function ShowsList({
  initialShows,
  currentShow,
  hoverColor,
  backgroundColor,
  textColor,
}: Props) {
  // console.log("initialShows", initialShows);
  // console.log("currentShow", currentShow);

  return (
    <View style={styles.halfContainer} dataSet={{ media: ids.halfContainer }}>
      <View
        style={styles.innerContainer}
        dataSet={{ media: ids.innerContainer }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: -20,
            overflow: "scroll",
          }}
        >
          <View style={{ paddingTop: Metrics.halfBaseMargin }}>
            {initialShows &&
              initialShows.map((show, index) => {
                if (show === null) {
                  return null;
                }
                let showDateString =
                  show && show.starts && moment(show.starts).format("HH:mm");
                let isCurrentshow =
                  currentShow &&
                  currentShow.starts &&
                  show.starts === currentShow.starts;
                return (
                  <View
                    style={styles.showContainer}
                    dataSet={{ media: ids.showContainer }}
                    key={"todayshows" + index}
                  >
                    <Text
                      style={{
                        ...Fonts.style.text,
                        color: textColor,
                        paddingRight: Metrics.doubleBaseMargin,
                      }}
                    >
                      {showDateString}
                    </Text>
                    <HoverText
                      href={show.url}
                      style={[
                        {
                          ...Fonts.style.navigation,
                          fontSize: 18,
                          color: isCurrentshow ? hoverColor : textColor,
                        },
                      ]}
                      hoverStyle={{ color: hoverColor }}
                    >
                      {show.name}
                    </HoverText>
                  </View>
                );
              })}
          </View>
        </View>
        <View
          style={{
            height: 30,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: `linear-gradient(0deg, ${backgroundColor}, transparent)`,
          }}
        ></View>
        <View
          style={{
            height: 30,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            background: `linear-gradient(180deg, ${backgroundColor}, transparent)`,
          }}
        ></View>
      </View>
    </View>
  );
}

const { ids, styles } = StyleSheet.create({
  innerContainer: {
    width: "100%",
    overflow: "hidden",
    position: "relative",
    height: 200,
    "@media (max-width: 910px)": {
      height: 320,
      marginTop: Metrics.doubleBaseMargin,
    },
  },
  showContainer: {
    flexDirection: "row",
    paddingBottom: Metrics.halfBaseMargin,
    "@media (max-width: 910px)": {
      paddingBottom: Metrics.doubleBaseMargin,
    },
  },
  halfContainer: {
    width: "50%",
    "@media (max-width: 910px)": {
      width: "100%",
    },
  },
});

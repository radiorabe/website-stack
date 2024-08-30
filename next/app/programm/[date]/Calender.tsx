import { Text, View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";

import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import moment from "moment";
import { useState } from "react";
import HoverText from "@/components/HoverText";

export interface Show {
  name: string;
  description: string;
  genre: string;
  id: number;
  instance_id: number;
  record: number;
  url: string;
  image_path: string;
  starts: string;
  ends: string;
}

const { styles } = StyleSheet.create({
  container: {
    maxWidth: 1280,
    width: "100%",
    alignItems: "center",
    alignSelf: "center",
  },
  link: {
    color: "blue",
  },
  textContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  text: {
    ...Fonts.style.text,
    alignItems: "center",
    fontSize: 24,
    marginBottom: 24,
  },
});

export default function Calender({ shows, week }) {
  let currentDay = moment().startOf("day");
  let calenderDay = moment().startOf("week").add(1, "days").add(week, "weeks");

  // console.log("currentDay", currentDay);
  // console.log("calenderDay", calenderDay);
  return (
    <View
      style={{
        flexDirection: "row",

        // paddingHorizontal: Metrics.baseMargin,
      }}
    >
      {[
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag",
        "Sonntag",
      ].map((weekday, index) => {
        let thisDay = moment(calenderDay).add(index, "days");
        // console.log("thisDay", thisDay);
        let nextDay = moment(thisDay).add(1, "days");
        // console.log("nextDay", nextDay);
        let dayShows = shows.filter(
          (item) =>
            thisDay < moment(item.starts) && nextDay > moment(item.starts)
        );
        // console.log("dayShows", dayShows);
        return (
          <View
            key={"weekday" + index}
            style={{
              width: `${100 / 7}%`,
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: `100%`,
                backgroundColor: Colors.darkGreen,
                paddingVertical: Metrics.baseMargin,
                alignItems: "center",
                marginBottom: Metrics.doubleBaseMargin,
              }}
            >
              <Text
                style={{
                  paddingBottom: Metrics.halfBaseMargin,
                  ...Fonts.style.navigation,
                  color: Colors.lightGreen,
                }}
              >
                {weekday}
              </Text>
              <Text
                style={{
                  ...Fonts.style.text,
                  color: Colors.lightGreen,
                }}
              >
                {thisDay.format("DD. MMMM")}
              </Text>
            </View>
            <View style={{ maxWidth: "100%" }}>
              {dayShows.map((item, index) => {
                return (
                  <View
                    key={"dayshow" + thisDay + index}
                    style={{
                      alignItems: "center",
                      paddingBottom: Metrics.baseMargin,
                      maxWidth: `100%`,
                    }}
                  >
                    <Text style={{ ...Fonts.style.text, fontSize: 11 }}>
                      {moment(item.starts).format("HH:mm")}
                    </Text>
                    <HoverText
                      href={item.url}
                      numberOfLines={1}
                      style={[
                        {
                          maxWidth: `100%`,
                          ...Fonts.style.navigation,
                          fontSize: 11,
                          color: Colors.darkGreen,
                          textAlign: "center",
                        },
                      ]}
                      hoverStyle={{ color: Colors.green }}
                    >
                      {item.name}
                    </HoverText>
                  </View>
                );
              })}
            </View>
          </View>
        );
      })}
    </View>
  );
}

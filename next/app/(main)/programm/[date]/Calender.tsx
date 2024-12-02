import { Text, View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";

import HoverText from "@/components/HoverText";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import moment from "moment";

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
  let monday = moment()
    .startOf("year")
    .add(week - 1, "weeks");
  console.log("monday", monday);

  return (
    <View
      style={{
        flexDirection: "row",
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
        let thisDay = moment(monday).add(index, "days");
        let nextDay = moment(thisDay).add(1, "days");
        let dayShows = shows.filter(
          (item) =>
            thisDay < moment(item.starts) && nextDay > moment(item.starts)
        );
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
                width: "100%",
                height: 94,
                alignItems: "center",
                justifyContent: "center",
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

import { Text, View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import moment from "moment";
import ButtonText from "@/components/ButtonText";
import Arrow from "./Arrow";

export default function Calender({
  shows,
  year,
  week,
  nextWeekArrowLink,
  prevWeekArrowLink,
}) {
  let monday = moment(year, "YYYY")
    .startOf("week")
    .add(week - 1, "weeks");

  // console.log("monday", monday);

  return (
    <View style={{ overflow: "hidden" }}>
      {/* hide scrollbar with 25px  */}
      <View style={{ width: "100%", overflow: "scroll", bottom: -25 }}>
        <View style={{ paddingBottom: 25, flexDirection: "row" }}>
          <View style={styles.buffer} dataSet={{ media: ids.buffer }}></View>
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
                  width: `${90 / 7}vw`,
                  alignItems: "center",
                  minWidth: 150,
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 94,
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: Metrics.doubleBaseMargin,
                    backgroundColor: Colors.darkGreen,
                  }}
                >
                  <Text
                    style={{
                      paddingBottom: Metrics.halfBaseMargin,
                      ...Fonts.style.navigation,
                      color: Colors.lightGreen,
                      textAlign: "center",
                    }}
                  >
                    {weekday}
                  </Text>
                  <Text
                    style={{
                      ...Fonts.style.textSmall,
                      color: Colors.lightGreen,
                      textAlign: "center",
                    }}
                  >
                    {thisDay.format("DD. MMMM")}
                  </Text>
                </View>
                <View
                  style={{
                    width: "100%",
                    paddingHorizontal: Metrics.halfBaseMargin,
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      borderTopColor: Colors.black,
                      borderTopWidth: 1,
                    }}
                  >
                    {dayShows.map((item, index) => {
                      return (
                        <View
                          key={"dayshow" + thisDay + index}
                          style={styles.calenderItem}
                          dataSet={{ media: ids.calenderItem }}
                        >
                          <Text
                            style={{
                              ...Fonts.style.text,
                              fontSize: 11,
                              paddingVertical: Metrics.halfHalfBaseMargin,
                            }}
                          >
                            {moment(item.starts).format("HH:mm") +
                              " - " +
                              moment(item.ends).format("HH:mm")}
                          </Text>
                          <ButtonText
                            href={item.url}
                            style={[
                              {
                                maxWidth: `100%`,
                                ...Fonts.style.h4,
                                color: Colors.darkGreen,
                              },
                            ]}
                          >
                            {item.name}
                          </ButtonText>
                        </View>
                      );
                    })}
                  </View>
                </View>
              </View>
            );
          })}
          {/* </View> */}
          <View style={styles.buffer} dataSet={{ media: ids.buffer }}></View>

          {prevWeekArrowLink && (
            <View
              style={{
                position: "absolute",
                top: 0,
                left: Metrics.doubleBaseMargin,
                height: 94,
                justifyContent: "center",
              }}
            >
              <Arrow
                color={Colors.lightGreen}
                hoverColor={Colors.green}
                href={prevWeekArrowLink}
                style={{
                  transform: "rotate(180deg)",
                  paddingLeft: Metrics.baseMargin,
                }}
              ></Arrow>
            </View>
          )}
          {nextWeekArrowLink && (
            <View
              style={{
                position: "absolute",
                top: 0,
                right: Metrics.doubleBaseMargin,
                height: 94,
                justifyContent: "center",
              }}
            >
              <Arrow
                color={Colors.lightGreen}
                hoverColor={Colors.green}
                href={nextWeekArrowLink}
                style={{ paddingLeft: Metrics.baseMargin }}
              ></Arrow>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const { styles, ids } = StyleSheet.create({
  calenderItem: {
    borderBottomColor: Colors.black,
    borderBottomWidth: 1,
    paddingBottom: Metrics.halfBaseMargin,
    maxWidth: `100%`,
    ":hover": {
      backgroundColor: Colors.lightGreen,
    },
  },
  buffer: {
    width: "5vw",
    height: 94,
    backgroundColor: Colors.darkGreen,
  },
});

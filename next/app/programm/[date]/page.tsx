import { Pressable, Text, View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";

import HoverText from "@/components/HoverText";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import moment from "moment";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Calender from "./Calender";
import Arrow from "./Arrow";
import ButtonFull from "@/components/ButtonFull";
import { ReactElement } from "react";
import HoverUrlIcon from "@/components/HoverUrlIcon";
import { logError } from "@/lib/loging";

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

export const metadata: Metadata = {
  title: "Programm",
};

export async function getLiveData() {
  try {
    return fetch("https://songticker.rabe.ch/libretime/live-info-v2.json", {
      next: {
        revalidate: process.env.NODE_ENV === "production" ? 900 : undefined, // in seconds
      },
      cache: process.env.NODE_ENV === "production" ? undefined : "no-store",
    })
      .then((response: any) => response.json())
      .then((liveData: any) => {
        console.log("liveData", liveData);
        // console.log("liveDataEnd");

        let todayShows: Show[] = liveData.shows.previous.filter(
          (item) => moment().startOf("day") < moment(item.ends)
        );

        let currentShow: Show = liveData.shows.current;
        todayShows.push(currentShow);

        let nextShowsToday = liveData.shows.next.filter(
          (item) => moment().endOf("day") > moment(item.starts)
        );
        todayShows.push(...nextShowsToday);

        let shows = [
          ...liveData.shows.previous,
          currentShow,
          ...liveData.shows.next,
        ];

        return { todayShows, currentShow, shows };
      })
      .catch((error) => {
        console.log("error", error);

        return { todayShows: [], currentShow: null, shows: [] };
      });
  } catch (error) {
    logError(error);
  }
}

export default async function ProgramPage({ params }) {
  let { todayShows, currentShow, shows } = await getLiveData();
  // params.date is of format 12-2024 Week 12 of year 2024
  let weeknumberString = params.date.split("-")[0];
  console.log("weeknumberString", weeknumberString);
  let yearString = params.date.split("-")[1];
  console.log("yearString", yearString);
  let currentYear = moment().year();

  if (
    params.date !== "heute" &&
    (parseInt(weeknumberString) < 0 ||
      parseInt(weeknumberString) > 54 ||
      parseInt(yearString) > currentYear + 1 ||
      parseInt(yearString) < currentYear)
  ) {
    console.log("not found", params.date);
    notFound();
  }

  let weekNumber =
    params.date === "heute" ? moment().week() : parseInt(weeknumberString);
  console.log("weekNumber", weekNumber);
  let year = params.date === "heute" ? moment().year() : parseInt(yearString);
  console.log("year", year);
  let maxWeeksThisYear = moment(year + "-12-31").isoWeeksInYear();
  console.log("maxWeeksThisYear", maxWeeksThisYear);

  let currentWeekNumber = moment().week();

  let nextWeekNumber = weekNumber + (1 % maxWeeksThisYear);
  let nextYearNumber = weekNumber < maxWeeksThisYear ? year : year + 1;

  let prevWeekNumber =
    weekNumber <= currentWeekNumber ? currentWeekNumber : weekNumber - 1;
  let prevYearNumber = weekNumber === 1 ? year - 1 : year;

  let nextMonthWeekNumber = weekNumber + 4;
  let nextMonthYearNumber = year;

  let prevMonthWeekNumber = weekNumber - 4;
  let prevMonthYearNumber = year;

  let hideNextMonthArrow = nextMonthWeekNumber > currentWeekNumber + 8; // not more than 8 weeks
  let hidePrevMonthArrow = prevMonthWeekNumber < currentWeekNumber; // do not go back this week
  let hideNextWeekArrow = nextWeekNumber > currentWeekNumber + 8;
  let hidePrevWeekArrow = prevWeekNumber < currentWeekNumber;

  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            width: "75%",
            padding: Metrics.tripleBaseMargin,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              // backgroundColor: "green",
            }}
          >
            <Text style={{ ...Fonts.style.text }}>{"Über Rabe"}</Text>
            <Text
              style={[
                { ...Fonts.style.h4 },
                { color: Colors.green, paddingHorizontal: Metrics.baseMargin },
              ]}
            >
              {"\u2192"}
            </Text>
            <Text style={{ ...Fonts.style.text }}>{"Programm"}</Text>
          </View>

          <View
            style={{
              marginTop: Metrics.tripleBaseMargin,
              padding: Metrics.doubleBaseMargin,
              borderRadius: 9,
              backgroundColor: Colors.lightGreen,
            }}
          >
            <Text
              style={{
                ...Fonts.style.h2,
                color: Colors.darkGreen,
                paddingBottom: Metrics.baseMargin,
              }}
            >
              {"Heutiges Programm"}
            </Text>
            <View
              style={
                {
                  // flexDirection: "row",
                }
              }
            >
              {todayShows.map((show, index) => {
                let isCurrentshow = show.starts === currentShow.starts;
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      paddingTop: Metrics.halfBaseMargin,
                    }}
                    key={"todayshows" + index}
                  >
                    <Text
                      style={{
                        ...Fonts.style.text,
                        color: Colors.darkGreen,
                        width: Metrics.baseMargin * 6,
                        // paddingRight: Metrics.doubleBaseMargin,
                      }}
                    >
                      {moment(show.starts).format("HH:mm")}
                    </Text>
                    <HoverText
                      href={show.url}
                      style={[
                        {
                          ...Fonts.style.navigation,
                          fontSize: 18,
                          color: isCurrentshow
                            ? Colors.green
                            : Colors.darkGreen,
                        },
                      ]}
                      hoverStyle={{ color: Colors.green }}
                    >
                      {show.name}
                    </HoverText>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
        <View
          style={{
            width: "100%",
          }}
        >
          <View
            style={{
              padding: Metrics.doubleBaseMargin,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                position: "absolute",
                ...Fonts.style.h2,
                paddingBottom: Metrics.baseMargin,
              }}
            >
              {"Aktuelles Programm"}
            </Text>
            <View style={{ width: 40 }}></View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {!hidePrevMonthArrow && (
                <Arrow
                  color={Colors.darkGreen}
                  hoverColor={Colors.green}
                  href={`/programm/${prevMonthWeekNumber}-${prevMonthYearNumber}`}
                  style={{ transform: "rotate(180deg)" }}
                ></Arrow>
              )}
              <Text style={{ ...Fonts.style.h4 }}>
                {moment(year, "YYYY")
                  .add(weekNumber, "weeks")
                  .format("MMMM YY")}
              </Text>

              {!hideNextMonthArrow && (
                <Arrow
                  color={Colors.darkGreen}
                  hoverColor={Colors.green}
                  href={`/programm/${nextMonthWeekNumber}-${nextMonthYearNumber}`}
                ></Arrow>
              )}
            </View>
            <ButtonFull href={"/programm"} label={"Heute"} />
          </View>
          <View>
            <Calender shows={shows} week={weekNumber}></Calender>
            {!hidePrevWeekArrow && (
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: 94,
                  justifyContent: "center",
                }}
              >
                <Arrow
                  color={Colors.lightGreen}
                  hoverColor={Colors.green}
                  href={`/programm/${prevWeekNumber}-${prevYearNumber}`}
                  style={{ transform: "rotate(180deg)" }}
                ></Arrow>
              </View>
            )}
            {!hideNextWeekArrow && (
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  height: 94,
                  justifyContent: "center",
                }}
              >
                <Arrow
                  color={Colors.lightGreen}
                  hoverColor={Colors.green}
                  href={`/programm/${nextWeekNumber}-${nextYearNumber}`}
                ></Arrow>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}

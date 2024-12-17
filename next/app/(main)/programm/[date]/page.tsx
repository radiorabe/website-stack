import { Text, View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";

import Button from "@/components/Button";
import ProgramBox from "@/components/ProgramBox/ProgramBox";
import { Api } from "@/lib/api";
import {
  ItemsPageProgram,
  ItemsPageProgramPrograms1,
  ItemsPageProgramPrograms2,
  ItemsPageProgramPrograms3,
  ItemsPrograms,
} from "@/lib/api/data-contracts";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import { logError } from "@/lib/loging";
import Metrics from "@/lib/Metrics";
import moment from "moment";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Arrow from "./Arrow";
import Calender from "./Calender";
import { Show } from "@/lib/Types";

const { styles } = StyleSheet.create({
  container: {
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
        // console.log("liveData", liveData);
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

async function getPageData() {
  try {
    const infoResponse = await Api.readItemsPageProgram(
      {
        fields: [
          "*",
          "programs_group_1.programs_slug.*",
          "programs_group_2.programs_slug.*",
          "programs_group_3.programs_slug.*",
        ],
      },
      {
        // next: {
        //   tags:
        //     process.env.NODE_ENV === "production" ? ["collection"] : undefined,
        // },
        cache: "no-store",
      }
    );
    // console.log("response", infoResponse);
    let item: ItemsPageProgram = infoResponse.data.data as ItemsPageProgram;

    console.log("program data: ", item);

    return item;
  } catch (error) {
    logError(error);
    notFound();
  }
}

export default async function ProgramPage({ params }) {
  let { todayShows, currentShow, shows } = await getLiveData();
  let data = await getPageData();
  console.log("data", data);
  // params.date is of format 12-2024 Week 12 of year 2024
  let weeknumberString = params.date.split("-")[0];
  let yearString = params.date.split("-")[1];
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
  let year = params.date === "heute" ? moment().year() : parseInt(yearString);
  let maxWeeksThisYear = moment(year + "-12-31").isoWeeksInYear();

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
            width: "74vw",
            alignSelf: "center",
            paddingVertical: Metrics.tripleBaseMargin,
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
            <ProgramBox
              textColor={Colors.darkGreen}
              hoverColor={Colors.green}
              backgroundColor={Colors.lightGreen}
              biggerFont={true}
            ></ProgramBox>
          </View>
        </View>
        <View
          style={{
            width: "90vw",
            alignSelf: "center",
          }}
        >
          <View
            style={{
              paddingVertical: Metrics.doubleBaseMargin,
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
                  style={{
                    transform: "rotate(180deg)",
                    paddingHorizontal: Metrics.baseMargin,
                  }}
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
                  style={{ paddingHorizontal: Metrics.baseMargin }}
                  href={`/programm/${nextMonthWeekNumber}-${nextMonthYearNumber}`}
                ></Arrow>
              )}
            </View>
            <Button
              href={"/programm"}
              label={"Heute"}
              full
              textColor={Colors.white}
            />
          </View>
        </View>
      </View>
      <View style={{ width: "100%" }}>
        <View>
          <View
            style={{
              width: "100%",
              height: 94,
              position: "absolute",
              top: 0,
              left: 0,
              backgroundColor: Colors.darkGreen,
            }}
          ></View>
          <View style={{ width: "90vw", alignSelf: "center" }}>
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
                  style={{
                    transform: "rotate(180deg)",
                    paddingLeft: Metrics.baseMargin,
                  }}
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
                  style={{ paddingLeft: Metrics.baseMargin }}
                ></Arrow>
              </View>
            )}
          </View>
          {data && (
            <View
              style={{
                width: "70%",
                alignSelf: "center",
                alignItems: "center",
                paddingTop: Metrics.tripleBaseMargin * 2,
                paddingBottom: Metrics.tripleBaseMargin,
              }}
            >
              <Text style={{ ...Fonts.style.h4 }}>
                {data.programs_group_1_title}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  paddingTop: Metrics.halfBaseMargin,
                  paddingBottom: Metrics.doubleBaseMargin,
                }}
              >
                {data.programs_group_1.map(
                  (programNode: ItemsPageProgramPrograms1, index) => {
                    let program = programNode.programs_slug as ItemsPrograms;
                    return (
                      <Button
                        key={"Group1-" + index}
                        style={{ padding: Metrics.halfBaseMargin }}
                        href={program.slug}
                        label={program.name}
                        large
                        full
                        textColor={Colors.white}
                      ></Button>
                    );
                  }
                )}
              </View>
              <Text style={{ ...Fonts.style.h4 }}>
                {data.programs_group_2_title}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  paddingTop: Metrics.halfBaseMargin,
                  paddingBottom: Metrics.doubleBaseMargin,
                }}
              >
                {data.programs_group_2.map(
                  (programNode: ItemsPageProgramPrograms2, index) => {
                    let program = programNode.programs_slug as ItemsPrograms;
                    return (
                      <Button
                        key={"Group2-" + index}
                        style={{ padding: Metrics.halfBaseMargin }}
                        href={program.slug}
                        label={program.name}
                        large
                        full
                        textColor={Colors.white}
                      ></Button>
                    );
                  }
                )}
              </View>
              <Text style={{ ...Fonts.style.h4 }}>
                {data.programs_group_3_title}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  paddingTop: Metrics.halfBaseMargin,
                  paddingBottom: Metrics.doubleBaseMargin,
                }}
              >
                {data.programs_group_3.map(
                  (programNode: ItemsPageProgramPrograms3, index) => {
                    let program = programNode.programs_slug as ItemsPrograms;
                    return (
                      <Button
                        key={"Group3-" + index}
                        style={{ padding: Metrics.halfBaseMargin }}
                        href={program.slug}
                        label={program.name}
                        large
                        full
                        textColor={Colors.white}
                      ></Button>
                    );
                  }
                )}
              </View>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

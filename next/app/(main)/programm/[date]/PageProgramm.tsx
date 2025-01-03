"use client";
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
import ProgramGroups from "./ProgramGroups";
import BreadCrump from "@/components/BreadCrumb";
import useResponsive from "@/lib/useResponsisve";

export const metadata: Metadata = {
  title: "Programm",
};

type Props = {
  liveData: any;
  pageData: ItemsPageProgram;
  params: any;
};

export default function ProgramPage({ liveData, pageData, params }: Props) {
  let { isMobile } = useResponsive();
  // console.log("data", pageData);
  let { todayShows, currentShow, shows } = liveData;
  // console.log("shows", shows);

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
    // console.log("not found", params.date);
    notFound();
  }

  let weekNumber =
    params.date === "heute" ? moment().week() : parseInt(weeknumberString);
  let year =
    params.date === "heute"
      ? moment().endOf("week").year()
      : parseInt(yearString);
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
  let hideNextWeekArrow = nextWeekNumber > currentWeekNumber + 8 || isMobile;
  let hidePrevWeekArrow = prevWeekNumber < currentWeekNumber || isMobile;

  let nextWeekArrowLink = hideNextWeekArrow
    ? null
    : `/programm/${nextWeekNumber}-${nextYearNumber}`;
  let prevWeekArrowLink = hidePrevWeekArrow
    ? null
    : `/programm/${prevWeekNumber}-${prevYearNumber}`;

  return (
    <View style={styles.outerContainer} dataSet={{ media: ids.outerContainer }}>
      <View style={styles.container} dataSet={{ media: ids.container }}>
        <View
          style={styles.textContainer}
          dataSet={{ media: ids.textContainer }}
        >
          <BreadCrump label1={"Über Rabe"} label2={"Programm"}></BreadCrump>

          <View
            style={styles.programBoxContainer}
            dataSet={{ media: ids.programBoxContainer }}
          >
            <ProgramBox
              textColor={Colors.darkGreen}
              hoverColor={Colors.green}
              backgroundColor={Colors.lightGreen}
              biggerFont={true}
              buttonColor={Colors.darkGreen}
              buttonBackgroundColor={Colors.lightGreen}
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
            style={styles.actuelProgramContainer}
            dataSet={{ media: ids.actuelProgramContainer }}
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
            <View
              style={styles.monthControlContainer}
              dataSet={{ media: ids.monthControlContainer }}
            >
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
            <View
              style={styles.heuteButton}
              dataSet={{ media: ids.heuteButton }}
            >
              <Button
                href={"/programm"}
                label={"Heute"}
                full
                textColor={Colors.white}
              />
            </View>
          </View>
        </View>
      </View>

      <Calender
        shows={shows}
        week={weekNumber}
        year={year}
        nextWeekArrowLink={nextWeekArrowLink}
        prevWeekArrowLink={prevWeekArrowLink}
      ></Calender>
      {pageData && (
        <View
          style={styles.groupsContainer}
          dataSet={{ media: ids.groupsContainer }}
        >
          <ProgramGroups pageData={pageData}></ProgramGroups>
        </View>
      )}
    </View>
  );
}

const { styles, ids } = StyleSheet.create({
  outerContainer: {
    "@media (max-width: 910px)": {
      paddingBottom: Metrics.quadBaseMargin,
    },
  },
  container: {
    width: "100%",
    alignItems: "center",
    alignSelf: "center",
  },
  textContainer: {
    width: "74vw",
    alignSelf: "center",
    paddingVertical: Metrics.tripleBaseMargin,
    "@media (max-width: 910px)": {
      width: "90vw",
    },
  },
  text: {
    ...Fonts.style.text,
    alignItems: "center",
    fontSize: 24,
    marginBottom: 24,
  },
  programBoxContainer: {
    paddingHorizontal: Metrics.doubleBaseMargin,
    // paddingVertical: Metrics.doubleBaseMargin,

    borderRadius: 9,
    backgroundColor: Colors.lightGreen,
    "@media (max-width: 910px)": {
      // padding: Metrics.doubleBaseMargin,
      paddingHorizontal: Metrics.tripleBaseMargin,
      paddingVertical: 0,
    },
  },
  actuelProgramContainer: {
    paddingTop: Metrics.doubleBaseMargin,
    flexDirection: "row",
    justifyContent: "space-between",
    "@media (max-width: 910px)": {
      paddingBottom: Metrics.doubleBaseMargin,
    },
  },
  monthControlContainer: {
    flexDirection: "row",
    alignItems: "center",
    "@media (max-width: 910px)": {
      display: "none",
    },
  },
  heuteButton: {
    "@media (max-width: 910px)": {
      display: "none",
    },
  },
  groupsContainer: {
    "@media (max-width: 910px)": {
      display: "none",
    },
  },
});

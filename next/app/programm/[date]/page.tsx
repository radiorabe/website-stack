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

async function getLiveData() {
  try {
    return fetch("https://songticker.rabe.ch/libretime/live-info-v2.json", {
      next: {
        revalidate: process.env.NODE_ENV === "production" ? 900 : undefined,
      },
      cache: process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
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
    console.error("error", error.error);
  }
}

export default async function ProgramPage({ params }) {
  let { todayShows, currentShow, shows } = await getLiveData();
  var dateFormat = "DD-MM-YYYY"; // TODOOO WEEKNUMBER AND YEAR (less rendering for the server)
  if (
    params.date !== "heute" &&
    !moment(params.date, dateFormat, true).isValid()
  ) {
    notFound();
  }
  let weekNumber =
    params.date === "heute" ? moment().week() : moment(params.date).week();
  console.log("weekNumber", weekNumber);
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
                      {moment(show.starts).format("hh:mm")}
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
              <Arrow
                color={Colors.darkGreen}
                hoverColor={Colors.green}
                url={""}
                style={{ transform: "rotate(180deg)" }}
              ></Arrow>
              <Text style={{ ...Fonts.style.h4 }}>
                {moment().format("MMMM YY")}
              </Text>

              <Arrow
                color={Colors.darkGreen}
                hoverColor={Colors.green}
                url={""}
              ></Arrow>
            </View>
            <ButtonFull href={"/beitraege"} label={"Heute"} />
          </View>
          <Calender shows={shows} week={0}></Calender>
        </View>
      </View>
    </View>
  );
}

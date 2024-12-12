"use client";
import Fonts from "@/lib/Fonts";
import { logError } from "@/lib/loging";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import moment from "moment";
import HoverText from "../HoverText";
import { Show } from "@/lib/Types";
import StyleSheet from "react-native-media-query";
import ShowsList from "./ShowsList";
import PlayList from "./PlayList";
import { useEffect, useState } from "react";
import useResponsive from "@/lib/useResponsisve";
import Button from "../Button";
import Colors from "@/lib/Colors";
import ButtonFull from "../ButtonFull";

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
        let todayShows: Show[] = liveData.shows.previous.filter(
          (item) => moment().startOf("day") < moment(item.ends)
        );

        let currentShow: Show = liveData.shows.current;
        todayShows.push(currentShow);

        let nextShowsToday = liveData.shows.next.filter(
          (item) => moment().endOf("day") > moment(item.starts)
        );
        todayShows.push(...nextShowsToday);
        console.log("todayShows", todayShows);

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

export async function getPlaylistData(numbers) {
  try {
    return fetch(
      `https://archiv.rabe.ch/api/tracks?sort=-started_at&page[size]=${numbers}`,
      {
        next: {
          revalidate: process.env.NODE_ENV === "production" ? 900 : undefined, // in seconds
        },
        cache: process.env.NODE_ENV === "production" ? undefined : "no-store",
      }
    )
      .then((response: any) => response.json())
      .then((responseData: any) => {
        // console.log("playlistData", responseData.data);
        return responseData.data;
      })
      .catch((error) => {
        console.log("error", error);

        return [];
      });
  } catch (error) {
    logError(error);
  }
}

export interface Props {
  textColor?: any;
  hoverColor?: any;
  backgroundColor?: any;
  biggerFont?: boolean;
}

export default function ProgramBox({
  hoverColor,
  textColor,
  backgroundColor,
  biggerFont,
}: Props) {
  let [shows, setShows] = useState([]);
  let [currentShow, setCurrentShow] = useState();
  let [playlistData, setPlaylistData] = useState();
  let { isMobile } = useResponsive();
  let [showPlaylist, setShowPlaylist] = useState(false);

  const loadLiveData = async () => {
    let { todayShows, currentShow } = await getLiveData();

    setShows(todayShows);
    setCurrentShow(currentShow);
  };

  const loadPlaylistData = async () => {
    const data = await getPlaylistData(20);
    setPlaylistData(data);
  };

  useEffect(() => {
    //load on inital rendering
    loadLiveData();
    loadPlaylistData();
  }, []);

  return (
    <View style={{ flexDirection: "column" }}>
      {!isMobile && (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: "50%" }}>
            <Text
              style={[
                styles.title,
                biggerFont && { ...Fonts.style.h2 },
                textColor && { color: textColor },
              ]}
              dataSet={{ media: ids.title }}
            >
              {"Heutiges Programm"}
            </Text>
          </View>
          <View style={{ width: "50%" }}>
            <Text
              style={[
                styles.title,
                biggerFont && { ...Fonts.style.h2 },
                textColor && { color: textColor },
              ]}
              dataSet={{ media: ids.title }}
            >
              {"Playlist"}
            </Text>
          </View>
        </View>
      )}
      {isMobile && (
        <View style={{ flexDirection: "row" }}>
          <ButtonFull
            label={"Heutiges Programm"}
            textColor={Colors.white}
          ></ButtonFull>
          <ButtonFull label={"Playlist"}></ButtonFull>
        </View>
      )}
      <View style={styles.container} dataSet={{ media: ids.container }}>
        {!isMobile ||
          (!showPlaylist && (
            <ShowsList
              initialShows={shows}
              currentShow={currentShow}
              hoverColor={hoverColor}
              backgroundColor={backgroundColor}
              textColor={textColor}
            ></ShowsList>
          ))}
        {!isMobile ||
          (showPlaylist && (
            <PlayList
              playlistData={playlistData}
              hoverColor={hoverColor}
              backgroundColor={backgroundColor}
              textColor={textColor}
            ></PlayList>
          ))}
      </View>
    </View>
  );
}

const { ids, styles } = StyleSheet.create({
  title: {
    ...Fonts.style.h3,
    paddingBottom: Metrics.baseMargin,
    "@media (max-width: 910px)": {
      flexDirection: "column",
      justifyContent: "space-between",
    },
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    // "@media (max-width: 910px)": {
    //   flexDirection: "column",
    //   justifyContent: "space-between",
    // },
  },
  halfContainer: {
    width: "50%",
    // "@media (max-width: 910px)": {
    //   width: "100%",
    // },
  },
});

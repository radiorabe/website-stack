"use client";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import { logError } from "@/lib/loging";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import { Show } from "@/lib/Types";
import useResponsive from "@/lib/useResponsisve";
import moment from "moment";
import { useEffect, useState } from "react";
import StyleSheet from "react-native-media-query";
import Button from "../Button";
import PlayList from "./PlayList";
import ShowsList from "./ShowsList";

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
        let todayShows: Show[] = liveData.shows.previous.filter((item) => {
          if (item && item.ends) {
            return moment().startOf("day") < moment(item.ends);
          } else {
            return false;
          }
        });

        let currentShow: Show = liveData.shows.current;
        todayShows.push(currentShow);

        let nextShowsToday = liveData.shows.next.filter((item) => {
          if (item && item.ends) {
            return moment().endOf("day") > moment(item.starts);
          } else {
            return false;
          }
        });
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
    console.log("PageProgramm getLiveData Error");
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
        console.log("Programbox getPlaylistData Error: ", error);
        return [];
      });
  } catch (error) {
    console.log("Programbox getPlaylistData Error");

    logError(error);
  }
}

export interface Props {
  textColor?: any;
  hoverColor?: any;
  backgroundColor?: any;
  biggerFont?: boolean;
  buttonColor?: any;
  buttonBackgroundColor?: any;
}

export default function ProgramBox({
  hoverColor,
  textColor,
  backgroundColor,
  biggerFont,
  buttonColor,
  buttonBackgroundColor,
}: Props) {
  let [shows, setShows] = useState([]);
  let [currentShow, setCurrentShow] = useState();
  let [playlistData, setPlaylistData] = useState();
  let { isMobile } = useResponsive();
  let [showPlaylist, setShowPlaylist] = useState(false);
  const [refetch, setRefetch] = useState(true);

  const loadLiveData = async () => {
    let { todayShows, currentShow } = await getLiveData();

    setShows(todayShows);
    setCurrentShow(currentShow);
  };

  const loadPlaylistData = async () => {
    const data = await getPlaylistData(20);
    setPlaylistData(data);
    setTimeout(() => {
      setRefetch(true);
    }, 120000); // refresh every 2 minutes
  };

  useEffect(() => {
    //load on inital rendering
    if (refetch) {
      loadLiveData();
      loadPlaylistData();
      setRefetch(false);
    }
  }, [refetch]);

  return (
    <View style={styles.outerContainer} dataSet={{ media: ids.outerContainer }}>
      <View
        style={styles.desktopContainer}
        dataSet={{ media: ids.desktopContainer }}
      >
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

      <View
        style={styles.mobileButtonContainer}
        dataSet={{ media: ids.mobileButtonContainer }}
      >
        <Button
          label={"Heutiges Programm"}
          textColor={Colors.white}
          full={!showPlaylist}
          disabled={!showPlaylist}
          backgroundColor={showPlaylist ? undefined : buttonColor}
          textColor={showPlaylist ? buttonColor : buttonBackgroundColor}
          onPress={() => setShowPlaylist(false)}
        ></Button>
        <View style={{ width: Metrics.tripleBaseMargin }}></View>
        <Button
          label={"Playlist"}
          textColor={Colors.white}
          full={showPlaylist}
          disabled={showPlaylist}
          backgroundColor={!showPlaylist ? undefined : buttonColor}
          textColor={!showPlaylist ? buttonColor : buttonBackgroundColor}
          onPress={() => setShowPlaylist(true)}
        ></Button>
      </View>
      <View style={styles.container} dataSet={{ media: ids.container }}>
        <ShowsList
          initialShows={shows}
          currentShow={currentShow}
          hoverColor={hoverColor}
          backgroundColor={backgroundColor}
          textColor={textColor}
        ></ShowsList>

        <PlayList
          playlistData={playlistData}
          hoverColor={hoverColor}
          backgroundColor={backgroundColor}
          textColor={textColor}
        ></PlayList>
      </View>
      <View
        style={styles.mobileContainer}
        dataSet={{ media: ids.mobileContainer }}
      >
        {!showPlaylist && (
          <ShowsList
            initialShows={shows}
            currentShow={currentShow}
            hoverColor={hoverColor}
            backgroundColor={backgroundColor}
            textColor={textColor}
          ></ShowsList>
        )}

        {showPlaylist && (
          <PlayList
            playlistData={playlistData}
            hoverColor={hoverColor}
            backgroundColor={backgroundColor}
            textColor={textColor}
          ></PlayList>
        )}
      </View>
    </View>
  );
}

const { ids, styles } = StyleSheet.create({
  title: {
    ...Fonts.style.h3,
    "@media (max-width: 910px)": {
      flexDirection: "column",
      justifyContent: "space-between",
    },
  },
  outerContainer: {
    marginVertical: Metrics.doubleBaseMargin,
    // marginBottom: Metrics.baseMargin,
    // backgroundColor: "blue",
    "@media (max-width: 910px)": {
      marginVertical: Metrics.tripleBaseMargin,
    },
  },
  container: {
    // backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-between",
    display: "flex",
    "@media (max-width: 910px)": {
      display: "none",
    },
  },
  desktopContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: Metrics.halfBaseMargin,
    "@media (max-width: 910px)": {
      display: "none",
    },
  },
  mobileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    display: "none",
    "@media (max-width: 910px)": {
      display: "flex",
      paddingTop: 7,
    },
  },
  mobileButtonContainer: {
    display: "none",
    "@media (max-width: 910px)": {
      display: "flex",
      flexDirection: "row",
    },
  },
});

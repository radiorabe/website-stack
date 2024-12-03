import Fonts from "@/lib/Fonts";
import { logError } from "@/lib/loging";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import moment from "moment";
import HoverText from "./HoverText";
import { Show } from "@/lib/Types";

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

export interface ProgramBoxProps {
  textColor?: any;
  hoverColor?: any;
  backgroundColor?: any;
  biggerFont?: boolean;
}

export default async function ProgramBox({
  hoverColor,
  textColor,
  backgroundColor,
  biggerFont,
}) {
  let { todayShows, currentShow, shows } = await getLiveData();
  const playlistData = await getPlaylistData(todayShows.length);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={{ width: "50%" }}>
        <Text
          style={[
            {
              ...Fonts.style.h3,
              color: textColor,
              paddingBottom: Metrics.baseMargin,
            },
            biggerFont && { ...Fonts.style.h2 },
          ]}
        >
          {"Heutiges Programm"}
        </Text>
        <View
          style={{
            width: "100%",
            overflow: "hidden",
            position: "relative",
            height: 190,
          }}
        >
          <View
            style={{
              // maxHeight: 190,
              // overflow: "scroll",
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 10,
              right: -20,
              overflow: "scroll",
            }}
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
                      color: textColor,
                      paddingRight: Metrics.doubleBaseMargin,
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
        </View>
      </View>
      <View style={{ width: "50%" }}>
        <Text
          style={[
            {
              ...Fonts.style.h3,
              color: textColor,
              paddingBottom: Metrics.baseMargin,
            },
            biggerFont && { ...Fonts.style.h2 },
          ]}
        >
          {"Playlist"}
        </Text>
        <View
          style={{
            width: "100%",
            overflow: "hidden",
            position: "relative",
            height: 190,
          }}
        >
          <View
            style={{
              // maxHeight: 190,
              // overflow: "scroll",
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 10,
              right: -20,
              overflow: "scroll",
            }}
          >
            {playlistData.map((track, index) => {
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
                      color: textColor,
                      paddingRight: Metrics.doubleBaseMargin,
                    }}
                  >
                    {moment(track.attributes.started_at).format("HH:mm")}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={[
                      {
                        ...Fonts.style.navigationText,
                        fontSize: 18,
                        color: textColor,
                      },
                    ]}
                  >
                    {track.attributes.artist + " - " + track.attributes.title}
                  </Text>
                </View>
              );
            })}
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
        </View>
      </View>
    </View>
  );
}

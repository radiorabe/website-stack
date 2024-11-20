import { View, Text } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";
import Fonts from "@/lib/Fonts";
import { Api } from "@/lib/api";
import {
  ItemsPartyLocation,
  ItemsPartyTips,
  ItemsPosts,
} from "@/lib/api/data-contracts";
import Button from "@/components/Button";
import ButtonFull from "@/components/ButtonFull";
import PostPreview from "@/components/PostPreview";
import PartyTip from "@/assets/svg/IconPartyTip";
import Metrics from "@/lib/Metrics";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Colors from "@/lib/Colors";
import moment from "moment";
import { getLiveData } from "./programm/[date]/page";
import HoverText from "@/components/HoverText";
import { logError } from "@/lib/loging";
import Image from "next/image";

async function getPosts() {
  try {
    const itemResponse = await Api.readItemsPost(
      {
        fields: ["*", "program.name", "imagebox.image"],
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        filter: JSON.stringify({
          status: {
            _eq: "published",
          },
        }),
        sort: ["-date"],
        // limit: 3,
      },
      {
        next: {
          tags:
            process.env.NODE_ENV === "production" ? ["collection"] : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    // console.log("response", itemResponse);
    let item: ItemsPosts[] = itemResponse.data.data;
    console.log("posts", item);
    // console.log("team", item.team);
    // console.log("posts", item.posts);

    return item;
  } catch (error) {
    logError(error);

    notFound();
  }
}

async function getPartyTips() {
  try {
    const itemResponse = await Api.readItemsPartyTips(
      {
        fields: ["title_1", "title_2", "date", "party_location.*"],
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        filter: JSON.stringify({
          status: {
            _eq: "published",
          },
        }),
        sort: ["-date"],
        // limit: 3,
      },
      {
        next: {
          tags:
            process.env.NODE_ENV === "production" ? ["collection"] : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    // console.log("response", itemResponse);
    let item: ItemsPartyTips[] = itemResponse.data.data;

    // console.log("team", item.team);
    // console.log("posts", item.posts);

    return item;
  } catch (error) {
    logError(error);

    notFound();
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

export const metadata: Metadata = {
  title: "RaBe - Home",
};

export default async function HomePage(props) {
  const posts = await getPosts();
  const partyTips = await getPartyTips();
  let { todayShows, currentShow, shows } = await getLiveData();
  const playlistData = await getPlaylistData(todayShows.length);
  return (
    <View>
      <View
        style={{
          width: "90%",
          alignSelf: "center",
          paddingVertical: Metrics.tripleBaseMargin,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: Metrics.doubleBaseMargin,
          }}
        >
          <View>
            <Text style={{ ...Fonts.style.h2 }}>{"Neuste Beiträge"}</Text>
          </View>
          <ButtonFull href={"/beitraege"} label={"Alle Beiträge"} />
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {posts.map((item, index) => {
            return (
              <PostPreview
                key={"post" + index}
                data={item}
                index={index}
              ></PostPreview>
            );
          })}
        </View>
      </View>
      <View
        style={{
          width: "100%",
          backgroundColor: Colors.darkGreen,
        }}
      >
        <View
          style={{
            width: "90%",
            alignSelf: "center",
            paddingVertical: Metrics.tripleBaseMargin,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ width: "50%" }}>
              <Text
                style={{
                  ...Fonts.style.h3,
                  color: Colors.lightGreen,
                  paddingBottom: Metrics.doubleBaseMargin,
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
                          color: Colors.lightGreen,
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
                            color: isCurrentshow
                              ? Colors.green
                              : Colors.lightGreen,
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
            <View style={{ width: "50%" }}>
              <Text
                style={{
                  ...Fonts.style.h3,
                  color: Colors.lightGreen,
                  paddingBottom: Metrics.doubleBaseMargin,
                }}
              >
                {"Playlist"}
              </Text>
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
                        color: Colors.lightGreen,
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
                          color: Colors.lightGreen,
                        },
                      ]}
                    >
                      {track.attributes.artist + " - " + track.attributes.title}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "90%",
          alignSelf: "center",
        }}
      >
        <View
          style={{
            paddingVertical: Metrics.tripleBaseMargin,
          }}
        >
          <View>
            <Text
              style={{
                ...Fonts.style.h3,
                color: Colors.black,
                marginBottom: Metrics.doubleBaseMargin,
              }}
            >
              {"Ausgehtips"}
            </Text>
            <View
              style={{
                width: "100%",
              }}
            >
              {partyTips.map((item, index) => {
                let partyLocation = item.party_location as ItemsPartyLocation;
                return (
                  <View
                    key={"partyTips" + index}
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    {partyLocation && partyLocation.logo && (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${partyLocation.logo}?width=70&height=70&fit=cover`}
                        width={70}
                        height={70}
                        style={{ paddingRight: Metrics.tripleBaseMargin }}
                        // layout="responsive"
                        alt={partyLocation.address_line_1}
                        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    )}
                    <View style={{ width: "50%" }}>
                      <Text
                        style={{
                          ...Fonts.style.h3,
                        }}
                      >
                        {item.title_1}
                      </Text>
                      <Text
                        style={{
                          ...Fonts.style.h3,
                        }}
                      >
                        {item.title_2 ? item.title_2 : ""}
                      </Text>
                    </View>

                    <View style={{ flexGrow: 1 }}>
                      <Text
                        style={{
                          ...Fonts.style.text,
                        }}
                      >
                        {partyLocation.address_line_1}
                      </Text>

                      <Text
                        style={{
                          ...Fonts.style.text,
                        }}
                      >
                        {partyLocation.address_line_2
                          ? partyLocation.address_line_2
                          : ""}
                      </Text>
                      <Text
                        style={{
                          ...Fonts.style.text,
                        }}
                      >
                        {moment(item.date).format("dd DD.MM") +
                          ", ab " +
                          moment(item.date).format("hh:mm") +
                          " Uhr"}
                      </Text>
                    </View>
                    <View>
                      <Button
                        url={partyLocation.url}
                        label={"Website"}
                      ></Button>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

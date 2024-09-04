import { View, Text } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";
import Fonts from "@/lib/Fonts";
import { Api } from "@/lib/api";
import { ItemsPartyTips, ItemsPosts } from "@/lib/api/data-contracts";
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

async function getPosts() {
  try {
    const itemResponse = await Api.readItemsPosts(
      {
        fields: ["*"],
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
    // console.log("posts", item);
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
        fields: [
          "title_1",
          "title_2",
          "date",
          "url",
          "address_line_1",
          "address_line_2",
        ],
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
    // console.log("partyTips", item);
    // console.log("team", item.team);
    // console.log("posts", item.posts);

    return item;
  } catch (error) {
    logError(error);

    notFound();
  }
}

export const metadata: Metadata = {
  title: "RaBe - Home",
};

export default async function HomePage(props) {
  const posts = await getPosts();
  const partyTips = await getPartyTips();
  let { todayShows, currentShow, shows } = await getLiveData();

  return (
    <View>
      <View
        style={{
          maxWidth: 1280,
          width: "100%",
          alignSelf: "center",
          paddingVertical: Metrics.tripleBaseMargin,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: Metrics.tripleBaseMargin,
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
            marginHorizontal: Metrics.tripleBaseMargin,
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
        <View
          style={{
            backgroundColor: Colors.darkGreen,
            padding: Metrics.tripleBaseMargin,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{}}>
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
            <Text style={{ ...Fonts.style.h3, color: Colors.white }}>
              {"Playlist"}
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: Metrics.tripleBaseMargin,
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
                return (
                  <View
                    key={"partyTips" + index}
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <PartyTip></PartyTip>
                    <View>
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
                        {item.title_2}
                      </Text>
                    </View>

                    <View>
                      <Text
                        style={{
                          ...Fonts.style.text,
                        }}
                      >
                        {item.address_line_1}
                      </Text>
                      <Text
                        style={{
                          ...Fonts.style.text,
                        }}
                      >
                        {item.address_line_2}
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
                      <Button url={item.url} label={"Website"}></Button>
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

// const {styles} = StyleSheet.create({
//   container: {
//     alignItems: "center",
//     flexGrow: 1,
//     justifyContent: "center",
//   },
//   link: {
//     color: "blue",
//   },
//   textContainer: {
//     alignItems: "center",
//     marginTop: 16,
//   },
//   text: {
//     ...Fonts.style.text,
//     alignItems: "center",
//     fontSize: 24,
//     marginBottom: 24,
//   },
// });

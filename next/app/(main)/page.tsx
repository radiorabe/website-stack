import { View, Text } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";
import Fonts from "@/lib/Fonts";
import { Api } from "@/lib/api";
import {
  ItemsEvents,
  ItemsPartyLocation,
  ItemsPartyTips,
  ItemsPost,
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
import ProgramBox from "@/components/ProgrammBox";

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
        limit: 6,
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
    let item: ItemsPost[] = itemResponse.data.data;
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

async function checkEventWithPromobox() {
  try {
    const itemResponse = await Api.readItemsEvents(
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        filter: JSON.stringify({
          promo_status: {
            _eq: "active",
          },
        }),
        fields: ["*"],
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
    let item: ItemsEvents[] = itemResponse.data.data;
    // console.log("event", item);

    return item && item.length ? item[0] : null;
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
  const event = await checkEventWithPromobox();

  return (
    <View>
      <View
        style={{
          width: "90%",
          alignSelf: "center",
          paddingVertical: Metrics.tripleBaseMargin,
        }}
      >
        {event && (
          <View
            style={{
              backgroundColor: event.color,
              borderRadius: 9,
              padding: Metrics.doubleBaseMargin,
              marginBottom: Metrics.tripleBaseMargin,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: "50%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${event.title_image}?width=280&height=220&fit=cover`}
                width={280}
                height={220}
                style={{ paddingRight: Metrics.tripleBaseMargin }}
                // layout="responsive"
                alt={event.promo_title}
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </View>
            <View
              style={{
                width: "50%",
                justifyContent: "center",
              }}
            >
              <Text style={{ ...Fonts.style.h2, color: Colors.white }}>
                {event.promo_title}
              </Text>
              <Text
                style={{
                  ...Fonts.style.text,
                  color: Colors.white,
                  paddingVertical: Metrics.baseMargin,
                }}
              >
                {event.promo_text}
              </Text>
              <View style={{ alignItems: "flex-start" }}>
                <Button
                  label={event.promo_button_label}
                  href={event.promo_button_url}
                  color={Colors.white}
                  hoverColor={Colors.whiteTransparent}
                ></Button>
              </View>
            </View>
          </View>
        )}

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
            width: "90vw",
            alignSelf: "center",
            paddingVertical: Metrics.tripleBaseMargin,
          }}
        >
          <ProgramBox
            textColor={Colors.lightGreen}
            hoverColor={Colors.green}
            backgroundColor={Colors.darkGreen}
          ></ProgramBox>
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
                      paddingBottom: Metrics.baseMargin,
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

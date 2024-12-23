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
import ProgramBox from "@/components/ProgramBox/ProgramBox";
import EventBox from "@/components/EventBox";
import PartyTips from "@/components/PartyTips";

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
        {event && <EventBox event={event}></EventBox>}

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
          <Button
            full
            textColor={Colors.white}
            href={"/beitraege"}
            label={"Alle Beiträge"}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
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
          }}
        >
          <ProgramBox
            textColor={Colors.lightGreen}
            hoverColor={Colors.green}
            backgroundColor={Colors.darkGreen}
            buttonColor={Colors.white}
            buttonBackgroundColor={Colors.darkGreen}
          ></ProgramBox>
        </View>
      </View>
      <PartyTips partyTips={partyTips}></PartyTips>
    </View>
  );
}

"use client";
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
import PostPreview from "@/components/PostPreview/PostPreview";
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

export default function HomePage({ posts, partyTips, event }) {
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
          <View
            style={styles.allPostsButtonContainer}
            dataSet={{ media: ids.allPostsButtonContainer }}
          >
            <Button
              full
              textColor={Colors.white}
              href={"/beitraege"}
              label={"Alle Beiträge"}
            />
          </View>
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
        <View
          style={styles.mobileShowPostButton}
          dataSet={{ media: ids.mobileShowPostButton }}
        >
          <Button
            full
            textColor={Colors.white}
            href={"/beitraege"}
            label={"Alle Beiträge"}
          />
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

const { styles, ids } = StyleSheet.create({
  allPostsButtonContainer: {
    "@media (max-width: 910px)": {
      display: "none",
    },
  },
  mobileShowPostButton: {
    display: "none",
    "@media (max-width: 910px)": {
      display: "flex",
      alignItems: "center",
      paddingTop: Metrics.tripleBaseMargin,
    },
  },
});

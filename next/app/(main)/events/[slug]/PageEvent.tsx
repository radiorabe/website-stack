"use client";
import RenderTipTap from "@/components/RenderTipTap";
import {
  ItemsEvents,
  ItemsEventsEventShows,
  ItemsEventShows,
  ItemsEventsImageLink,
  ItemsImageLink,
} from "@/lib/api/data-contracts";
import Colors, { shadeColor } from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Linking, Pressable, Text, View } from "@/lib/server-react-native";
import Image from "next/image";
import StyleSheet from "react-native-media-query";
import Show from "./Show";
import Link from "next/link";
import LogoBox from "../../kontakt/LogoBox";

export interface Props {
  pageData: ItemsEvents;
}

export default function EventPage({ pageData }: Props) {
  const event = pageData;

  return (
    <View
      style={{
        width: "100%",
        alignItems: "center",
      }}
    >
      <View
        style={[styles.topContainer, { backgroundColor: event.color }]}
        dataSet={{ media: ids.topContainer }}
      >
        <View
          style={{
            width: "90vw",
            alignSelf: "center",
            marginBottom: Metrics.doubleBaseMargin,
            flex: 1,
          }}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${event.title_image}?width=3000`}
            objectFit="contain"
            fill
            alt={event.title}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </View>
        <Text style={styles.topTitle} dataSet={{ media: ids.topTitle }}>
          {event.title}
        </Text>
        <Text style={styles.topText} dataSet={{ media: ids.topText }}>
          {event.title_info}
        </Text>
      </View>

      <View
        style={styles.tipTapContainer}
        dataSet={{ media: ids.tipTapContainer }}
      >
        {event.content && (
          <RenderTipTap
            content={event.content}
            topProps={{
              linkColor: event.color,
              linkHoverColor: shadeColor(event.color, 30),
            }}
          ></RenderTipTap>
        )}
      </View>
      <View
        style={styles.showsContainer}
        dataSet={{ media: ids.showsContainer }}
      >
        {event.shows.map((sh: ItemsEventsEventShows, index) => {
          let show = sh.event_shows_id as ItemsEventShows;
          // console.log("show", show);
          return (
            <Show
              key={"show" + index}
              show={show}
              eventColor={event.color}
            ></Show>
          );
        })}
      </View>
      {event && event.partner_logos && event.partner_logos.length > 0 && (
        <LogoBox
          backgroundColor={event.color}
          title={event.partner_title}
          logos={event.partner_logos}
        ></LogoBox>
      )}
    </View>
  );
}

const { ids, styles } = StyleSheet.create({
  topContainer: {
    flexDirection: "column",
    width: "100%",
    height: "75vh",
    alignItems: "center",
    paddingTop: Metrics.tripleBaseMargin,
    paddingBottom: Metrics.tripleBaseMargin,
    "@media (max-width: 910px)": {
      height: "50vh",
    },
  },
  topTitle: {
    ...Fonts.style.h1,
    color: Colors.white,
    paddingBottom: Metrics.doubleBaseMargin,
  },
  topText: { ...Fonts.style.text, color: Colors.white },
  tipTapContainer: {
    width: "74vw",
    paddingTop: Metrics.tripleBaseMargin,
    "@media (max-width: 910px)": {
      width: "90vw",
      paddingTop: Metrics.quadBaseMargin,
    },
  },
  showsContainer: {
    width: "74vw",
    "@media (max-width: 910px)": {
      width: "90vw",
      paddingBottom: Metrics.doubleBaseMargin,
    },
  },
  partnerTitle: {
    ...Fonts.style.h2,
    color: Colors.white,
    paddingBottom: Metrics.doubleBaseMargin,
    "@media (max-width: 910px)": {
      textAlign: "center",
    },
  },
  logoLink: {
    flexGrow: 1,
    borderLeftColor: Colors.white,
    alignItems: "center",
    ":hover": {
      opacity: 0.75,
    },
  },
});

"use client";
import {
  ItemsPost,
  ItemsPrograms,
  ItemsProgramsDirectusUsers,
  Users,
} from "@/lib/api/data-contracts";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import Image from "next/image";
import StyleSheet from "react-native-media-query";
import IconShare from "../../../assets/svg/IconShare";
import { Show } from "@/lib/Types";

import Button from "@/components/Button";
import MemberInfo from "@/components/MemberInfo";
import PostPreview from "@/components/PostPreview";
import RenderTipTap from "@/components/RenderTipTap";
import moment from "moment";
import Heart from "./Heart";

type Props = {
  program: ItemsPrograms;
  posts: ItemsPost[];
  nowPlaying: boolean;
  nextShows: Show[];
};

export default function ProgramPage({
  program,
  posts,
  nowPlaying,
  nextShows,
}: Props) {
  let nextShowTitle = nowPlaying
    ? "Jetzt Live"
    : nextShows.length > 0
      ? moment(nextShows[0].starts).calendar()
      : "";

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${program.image}?width=1280&height=600&fit=cover`}
          fill
          objectFit="cover"
          alt={program.name}
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            top: 0,
            background: `linear-gradient(0deg, black, transparent)`,
            opacity: 0.4,
          }}
        ></View>

        <View style={styles.imageOverlayContainer}>
          <View style={{}}>
            <Text style={styles.title} dataSet={{ media: ids.title }}>
              {program.name}
            </Text>
            <View
              style={styles.supportButton}
              dataSet={{ media: ids.supportButton }}
            >
              <Button
                href={{
                  pathname: "/bestellung",
                  query: { slug: program.slug },
                }}
                label={"Sendung supporten"}
                full
                icon={<Heart></Heart>}
                textColor={Colors.black}
                backgroundColor={Colors.white}
              />
            </View>
            <View
              style={styles.nextShowTextContainer}
              dataSet={{ media: ids.nextShowTextContainer }}
            >
              <Text
                style={styles.sendungsInfo}
                dataSet={{ media: ids.sendungsInfo }}
              >
                {"Nächste Sendung\n\r" + nextShowTitle}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={styles.contentContainer}
        dataSet={{ media: ids.contentContainer }}
      >
        <View>
          {program.content && (
            <RenderTipTap content={program.content}></RenderTipTap>
          )}
        </View>

        {program.team && program.team.length > 0 && (
          <View
            style={styles.memberContainer}
            dataSet={{ media: ids.memberContainer }}
          >
            <Text
              style={styles.h2Title}
              dataSet={{ media: ids.h2Title }}
            >{`Das ${program.name} Team`}</Text>
            <View
              style={styles.memberInfoContainer}
              dataSet={{ media: ids.memberInfoContainer }}
            >
              {program.team.map((item: ItemsProgramsDirectusUsers, index) => {
                let user: Users = item.directus_users_id as Users;
                return (
                  <MemberInfo
                    key={"Memberinfo" + index}
                    user={user}
                  ></MemberInfo>
                );
              })}
            </View>
          </View>
        )}
        {nextShows.length > 0 && (
          <View
            style={styles.memberContainer}
            dataSet={{ media: ids.memberContainer }}
          >
            <Text style={styles.h2Title} dataSet={{ media: ids.h2Title }}>
              {"Nächste Sendung"}
            </Text>
            <View
              style={{
                paddingTop: Metrics.doubleBaseMargin,
                paddingBottom: Metrics.tripleBaseMargin,
              }}
            >
              {nextShows.map((show, index) => {
                return (
                  <Text key={index + "sendung"} style={{ ...Fonts.style.text }}>
                    {moment(show.starts).format("LLLL")}
                  </Text>
                );
              })}
            </View>
          </View>
        )}
        {/* <View
          style={{
            borderBlockColor: Colors.black,
            borderRadius: 9,
            borderWidth: 1,
            alignSelf: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 3,
            paddingHorizontal: 6,
          }}
        >
          <IconShare color={Colors.darkGreen}></IconShare>
          <Text
            style={{
              ...Fonts.style.textLink,
              flexShrink: 1,
              paddingLeft: 6,
            }}
          >
            {"Teilen"}
          </Text>
        </View> */}
      </View>
      <View style={{ width: "90vw" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: Metrics.doubleBaseMargin,
          }}
        >
          <Text style={styles.h2Title} dataSet={{ media: ids.h2Title }}>
            {"Letzte Beiträge von " + program.name}
          </Text>
          <View
            style={styles.buttonContainer}
            dataSet={{ media: ids.buttonContainer }}
          >
            <Button
              href={{
                pathname: "/beitraege",
                query: { program: program.slug },
              }}
              label={"Alle Beiträge"}
              full
              textColor={Colors.white}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginBottom: Metrics.tripleBaseMargin,
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
    </View>
  );
}

const { ids, styles } = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    alignSelf: "center",
  },
  imageContainer: {
    width: "100%",
    height: "75vH",
  },
  imageOverlayContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  title: {
    ...Fonts.style.h1,
    color: "white",
    textAlign: "center",
    paddingHorizontal: Metrics.tripleBaseMargin,
  },
  supportButton: {
    paddingVertical: Metrics.doubleBaseMargin,
    alignItems: "center",
    "@media (max-width: 910px)": {
      paddingVertical: Metrics.tripleBaseMargin,
    },
  },
  nextShowTextContainer: {
    paddingBottom: Metrics.tripleBaseMargin,
    "@media (max-width: 910px)": {
      paddingBottom: Metrics.quadBaseMargin,
    },
  },
  sendungsInfo: { ...Fonts.style.text, color: "white", textAlign: "center" },
  image: { width: "100%" },
  contentContainer: {
    width: "74vw",
    paddingVertical: Metrics.tripleBaseMargin,
    "@media (max-width: 910px)": {
      width: "90vw",
    },
  },
  memberContainer: {
    marginBottom: Metrics.tripleBaseMargin,
    "@media (max-width: 910px)": {
      marginTop: Metrics.quadBaseMargin,
    },
  },
  memberInfoContainer: {
    paddingTop: Metrics.doubleBaseMargin,
    flexDirection: "row",
    flexWrap: "wrap",
    "@media (max-width: 910px)": {
      flexDirection: "column",
    },
  },
  h2Title: {
    ...Fonts.style.h2,
  },
  buttonContainer: {
    "@media (max-width: 910px)": {
      display: "none",
    },
  },
  avatar: { borderRadius: 9 },
});
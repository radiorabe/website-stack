"use client";
import {
  ItemsPost,
  ItemsPrograms,
  ItemsProgramsDirectusUsers,
  ItemsPromoBox,
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
import PostPreviewBox from "@/components/PostPreview/PostPreviewBox";
import RenderTipTap from "@/components/RenderTipTap";
import moment from "moment";
import Heart from "./Heart";
import { blurhashToBase64 } from "blurhash-base64";
import PromoBox from "@/components/PromoBox";
import { useEffect, useRef, useState } from "react";
import useResponsive from "@/lib/useResponsisve";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

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

  let promo_box = program.promo_box as ItemsPromoBox;
  let { isMobile } = useResponsive();
  let [shareButtonTitle, setShareButtonTitle] = useState("Teilen");
  const memberButtonRef = useRef<HTMLElement>(null);
  const postRef = useRef<HTMLElement>(null);
  if (postRef.current) {
    console.log("element:", postRef.current.getBoundingClientRect());
  }

  useGSAP(() => {
    gsap.to(memberButtonRef.current, {
      scrollTrigger: {
        trigger: memberButtonRef.current,
        start: "0 top",

        end: () =>
          `${postRef.current.getBoundingClientRect().y - memberButtonRef.current.getBoundingClientRect().y} bottom`,
        scrub: true,
        pin: true,
        // markers: true, // Remove after debugging
      },
    });
  });

  return (
    <View style={styles.container}>
      <View
        ref={memberButtonRef}
        style={{
          position: "absolute",
          top: "75vh",
          right: 0,
          width: "100vw",
          height: "90vh",
          zIndex: 999,
        }}
      >
        <View
          // ref={memberButtonRef}
          style={styles.memberButtonContainer}
          dataSet={{ media: ids.memberButtonContainer }}
        >
          <View
            style={{
              backgroundColor: Colors.darkGreen,
              paddingVertical: Metrics.halfHalfBaseMargin,
              paddingHorizontal: Metrics.halfBaseMargin,
              borderBottomLeftRadius: 9,
              borderBottomRightRadius: 9,
              margin: 0,
            }}
          >
            <Link
              href={"/mitglied-werden"}
              style={{
                textDecoration: "none",
              }}
              passHref={true}
            >
              <Text
                style={styles.memberButton}
                dataSet={{ media: ids.memberButton }}
              >
                {"Mitglied werden"}
              </Text>
            </Link>
          </View>
        </View>
      </View>
      <View
        style={styles.imageContainer}
        dataSet={{ media: ids.imageContainer }}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${program.image.id}?width=3000&fit=cover`}
          fill
          objectFit="cover"
          alt={program.name}
          placeholder="blur"
          blurDataURL={blurhashToBase64(program.image.blurhash)}
          onError={(event) => {
            console.log("IMAGE ERROR ECONNRESET: ", event);
          }}
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
              {"Nächste Sendungen"}
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

        <View
          // dataSet={{media:ids.}}
          style={{ flexDirection: "row" }}
        >
          <Button
            onPress={() => {
              let shareUrl = `${process.env.NEXT_PUBLIC_FE_URL}/${program.slug}`;
              if (navigator.share && isMobile) {
                // Web Share API is supported
                navigator
                  .share({
                    title: "RaBe Sendung: " + program.name,
                    url: shareUrl,
                  })
                  .then(() => {
                    setShareButtonTitle("Geteilt");
                  })
                  .catch(console.error);
              } else {
                // Fallback
                navigator.clipboard.writeText(shareUrl);
                setShareButtonTitle("Link kopiert");
              }
            }}
            icon={<IconShare color={Colors.darkGreen}></IconShare>}
            label={shareButtonTitle}
          ></Button>
        </View>
      </View>
      {promo_box && (
        <View style={{ width: "90%" }}>
          <PromoBox
            title={promo_box.title}
            text={promo_box.text}
            backgroundColor={promo_box.background_color}
            textColor={Colors.white}
            imageId={promo_box.image as string}
            buttonLabel={promo_box.button_label}
            buttonUrl={promo_box.button_url}
            goldenRatio
          ></PromoBox>
        </View>
      )}
      <View ref={postRef}>
        {posts && posts.length > 0 && (
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
                marginBottom: Metrics.tripleBaseMargin,
              }}
            >
              <PostPreviewBox posts={posts}></PostPreviewBox>
            </View>
          </View>
        )}
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
    "@media (max-width: 910px)": {
      height: "50vH",
    },
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
    width: "100%",
    wordBreak: "break-word",
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
  memberButtonContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    height: 20,
    transform: [
      { translateX: "50%" },
      { translateX: -10 },
      { rotate: "90deg" },
      { translateX: "45vh" },
    ],
    // alignItems: "center",
    // backgroundColor: "gray",
    "@media (max-width: 910px)": {
      display: "none",
    },
  },
  memberButton: {
    ...Fonts.style.textLink,
    color: Colors.white,
  },
  avatar: { borderRadius: 9 },
});

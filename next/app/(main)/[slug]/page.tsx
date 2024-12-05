import { Api } from "@/lib/api";
import {
  ItemsPost,
  ItemsPrograms,
  ItemsProgramsDirectusUsers,
  Users,
} from "@/lib/api/data-contracts";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Text, View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";
import IconShare from "../../../assets/svg/IconShare";

import ButtonFull from "@/components/ButtonFull";
import MemberInfo from "@/components/MemberInfo";
import PostPreview from "@/components/PostPreview";
import { logError } from "@/lib/loging";
import Heart from "./Heart";
import moment from "moment";
import { Show } from "@/lib/Types";

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
    paddingBottom: Metrics.doubleBaseMargin,
  },
  sendungsInfo: { ...Fonts.style.text, color: "white", textAlign: "center" },
  image: { width: "100%" },
  avatar: { borderRadius: 9 },
});

async function getSendung(slug) {
  try {
    const itemResponse = await Api.readSingleItemsPrograms(
      // { id: slug, fields: ["*", "team.*", "team.*.directus_users_id.*"] },
      {
        id: slug,
        fields: [
          "*",
          "team.directus_users_id.avatar",
          "team.directus_users_id.last_name",
          "team.directus_users_id.first_name",
          "team.directus_users_id.email",
        ],
        // sort:"date_created.deep[articles][_sort]=-articles_id.date_created"
      },
      // { id: slug, fields: ["*,team.directus_users_id.*"] },
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
    let item: ItemsPrograms = itemResponse.data.data;
    // console.log("item", item);
    // console.log("team", item.team);
    // console.log("posts", item.posts);

    return item;
  } catch (error) {
    logError(error);

    notFound();
  }
}

export async function getNextShowForProgram(slug) {
  try {
    return fetch("https://songticker.rabe.ch/libretime/live-info-v2.json", {
      next: {
        revalidate: process.env.NODE_ENV === "production" ? 900 : undefined, // in seconds
      },
      cache: process.env.NODE_ENV === "production" ? undefined : "no-store",
    })
      .then((response: any) => response.json())
      .then((liveData: any) => {
        // console.log("liveData", liveData);
        // console.log("liveDataEnd");
        let nowPlaying = false;

        let currentShow: Show = liveData.shows.current;
        if (currentShow && currentShow.url && currentShow.url.includes(slug)) {
          nowPlaying = true;
        }

        const nextShows = [];
        for (const show of liveData.shows.next) {
          if (show && show.url && show.url.includes(slug)) nextShows.push(show);
          if (nextShows.length === 3) break;
        }

        return { nowPlaying, nextShows };
      })
      .catch((error) => {
        console.log("error", error);

        return { nowPlaying: false, nextShows: [] };
      });
  } catch (error) {
    logError(error);
    return { nowPlaying: false, nextShows: [] };
  }
}

async function getPosts(slug) {
  try {
    const itemResponse = await Api.readItemsPost(
      {
        fields: ["*", "program.name", "imagebox.image"],
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        filter: JSON.stringify({
          program: {
            _eq: slug,
          },
          status: {
            _eq: "published",
          },
        }),
        sort: ["-date"],
        limit: 3,
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

export default async function ProgramPage({ params }) {
  const sendung = await getSendung(params.slug);
  const posts = await getPosts(params.slug);
  const { nowPlaying, nextShows } = await getNextShowForProgram(sendung.slug);
  let nextShowTitle = nowPlaying
    ? "Jetzt Live"
    : nextShows.length > 0
      ? moment(nextShows[0].starts).calendar()
      : "";

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${sendung.image}?width=1280&height=600&fit=cover`}
          fill
          objectFit="cover"
          alt={sendung.name}
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
            <Text style={[styles.title]}>{sendung.name}</Text>
            <View
              style={{
                paddingBottom: Metrics.doubleBaseMargin,
                alignItems: "center",
              }}
            >
              <ButtonFull
                href={{
                  pathname: "/bestellung",
                  query: { slug: sendung.slug },
                }}
                label={"Sendung supporten"}
                // large
                icon={<Heart></Heart>}
                textColor={Colors.black}
                backgroundColor={Colors.white}
              />
            </View>
            <View style={{ paddingBottom: Metrics.tripleBaseMargin }}>
              <Text style={styles.sendungsInfo}>{"Nächste Sendung"}</Text>
              <Text style={styles.sendungsInfo}>{nextShowTitle}</Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          width: "74vw",
          paddingVertical: Metrics.tripleBaseMargin,
        }}
      >
        <Text style={{ ...Fonts.style.text }}>{sendung.description}</Text>
        <View style={{ height: Metrics.tripleBaseMargin }}></View>
        {sendung.team && sendung.team.length > 0 && (
          <View style={{ marginBottom: Metrics.tripleBaseMargin }}>
            <Text
              style={{ ...Fonts.style.h2 }}
            >{`Das ${sendung.name} Team`}</Text>
            <View
              style={{
                paddingTop: Metrics.doubleBaseMargin,
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {sendung.team.map((item: ItemsProgramsDirectusUsers, index) => {
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
          <View>
            <Text
              style={{
                ...Fonts.style.h2,
                paddingBottom: Metrics.doubleBaseMargin,
              }}
            >
              {"Nächste Sendung"}
            </Text>
            {nextShows.map((show, index) => {
              return (
                <Text key={index + "sendung"} style={{ ...Fonts.style.text }}>
                  {moment(show.starts).format("LLLL")}
                </Text>
              );
            })}
            <View
              style={{
                height: Metrics.tripleBaseMargin,
              }}
            ></View>
          </View>
        )}
        <View
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
        </View>
      </View>
      <View style={{ width: "90vw" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={[
              { ...Fonts.style.h2, marginBottom: Metrics.doubleBaseMargin },
            ]}
          >
            {"Letzte Beiträge von " + sendung.name}
          </Text>

          <ButtonFull
            href={{
              pathname: "/beitraege",
              query: { program: sendung.slug },
            }}
            label={"Alle Beiträge"}
          />
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

import { Api } from "@/lib/api";
import {
  ItemsPosts,
  ItemsPrograms,
  ItemsSendungen,
} from "@/lib/api/data-contracts";
import { notFound } from "next/navigation";
import Image from "next/image";
import StyleSheet from "react-native-media-query";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { View, Text, Pressable } from "react-native";
import Colors from "@/lib/Colors";
import HoverUrl from "@/components/HoverUrl";
import IconShare from "../../../assets/svg/IconShare";
import LinkComponent from "@/components/LinkComponent";
import HoverText from "@/components/HoverText";
import moment from "moment";
import RenderTipTap from "@/components/RenderTipTap";
import { ReactElement } from "react";
import Button from "@/components/Button";
import IconDownload from "@/assets/svg/IconDownload";
import AudioFilePlayer from "@/components/AudioFilePlayer";

const { ids, styles } = StyleSheet.create({
  container: {
    maxWidth: 1920,
    width: "100%",
    alignItems: "center",
    alignSelf: "center",
  },
  imageContainer: {
    width: "100%",
  },
  postContainer: {
    width: "75%",
  },
  border: {
    borderBlockColor: Colors.black,
    borderRadius: 9,
    borderWidth: 1,
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 3,
    paddingHorizontal: 6,
  },
  title: {
    ...Fonts.style.h1,
    color: "white",
    textAlign: "center",
    paddingBottom: Metrics.doubleBaseMargin,
  },
  sendungsInfo: { ...Fonts.style.text, color: "black" },
  image: { width: "100%", borderRadius: 9 },
});

async function getPost(slug) {
  try {
    const itemResponse = await Api.readSingleItemsPosts(
      {
        id: slug,
        fields: [
          "*",
          "program.name",
          "program.slug",
          // "audio.*",
          "authors.directus_users_id.first_name",
          "authors.directus_users_id.last_name",
        ],
      },
      {
        // next: { tags: ["collection"] },
        cache: "no-store",
      }
    );
    let item: ItemsPosts = itemResponse.data.data;
    console.log("item", item);
    // console.log("team", item.team);
    // console.log("posts", item.posts);

    return item;
  } catch (error) {
    console.error("error", error.error);

    notFound();
  }
}

async function getRelatedPosts(slug) {
  try {
    const itemResponse = await Api.readItemsPosts(
      {
        fields: ["*"],
        filter: JSON.stringify({
          program: {
            _eq: slug,
          },
        }),
        sort: "-date",
        limit: 3,
      },
      {
        // next: { tags: ["collection"] },
        cache: "no-store",
      }
    );
    // console.log("response", itemResponse);
    let item: ItemsPosts = itemResponse.data.data;
    console.log("posts", item);
    // console.log("team", item.team);
    // console.log("posts", item.posts);

    return item;
  } catch (error) {
    console.error("error", error.error);

    notFound();
  }
}

export default async function DynamicPage({ params }) {
  const post = await getPost(params.postslug);
  // const relatedPosts = await getPost(post);

  let authorsLink = "Von";
  post.authors.forEach((item, index) => {
    if (index) {
      authorsLink += " &";
    }
    authorsLink += ` ${item.directus_users_id.first_name} ${item.directus_users_id.last_name}`;
  });

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.postContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: Metrics.tripleBaseMargin,
            }}
          >
            <HoverText
              href={"/" + post.program.slug}
              style={[styles.sendungsInfo, styles.border]}
              hoverStyle={{
                color: Colors.green,
                borderColor: Colors.green,
              }}
            >
              {post.program.name}
            </HoverText>
            <View style={{ width: Metrics.doubleBaseMargin }}></View>
            <Text style={{ ...Fonts.style.text }}>
              <Text> {"Von "}</Text>
              {post.authors.map((item, index) => {
                return (
                  <HoverText
                    key={"author" + index}
                    href={"/beiträge"}
                    style={{ ...Fonts.style.textLink, color: Colors.green }}
                    hoverStyle={{ color: Colors.darkGreen }}
                  >{`${index ? " &" : ""} ${item.directus_users_id.first_name} ${item.directus_users_id.last_name}`}</HoverText>
                );
              })}

              <Text> {`am ${moment(post.date).format("DD. MMMM YY")}`}</Text>
            </Text>
          </View>
          <Text
            style={{
              ...Fonts.style.h1,
              paddingBottom: Metrics.tripleBaseMargin,
            }}
          >
            {post.title}
          </Text>
          {post.image && (
            <View style={styles.imageContainer}>
              <Image
                src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${post.image}?width=1440&height=960&fit=cover`}
                width={1440}
                height={960}
                style={styles.image}
                layout="responsive"
                alt={post.title}
              />
              {post.imageTitle && (
                <View
                  style={{
                    flexDirection: "row",
                    paddingHorizontal: Metrics.tripleBaseMargin,
                    paddingVertical: Metrics.doubleBaseMargin,
                  }}
                >
                  <Text
                    style={{
                      ...Fonts.style.textSmall,
                      fontFamily: Fonts.type.bold,
                    }}
                  >
                    {"Foto: " + post.imageTitle}
                  </Text>
                  <Text style={{ ...Fonts.style.textSmall }}> </Text>
                  {post.imageText && (
                    <Text style={{ ...Fonts.style.textSmall }}>
                      {post.imageText}
                    </Text>
                  )}
                </View>
              )}
            </View>
          )}

          {post.text && <RenderTipTap content={post.text}></RenderTipTap>}
          {post.audio && (
            <View style={{ paddingBottom: Metrics.tripleBaseMargin }}>
              <AudioFilePlayer
                src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${post.audio}/rabe-audio.mp3`}
              ></AudioFilePlayer>
            </View>
          )}
          <View style={{ flexDirection: "row" }}>
            {post.audio && (
              <>
                <Button
                  url={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${post.audio}/rabe-audio.mp3?download`}
                  icon={<IconDownload color={Colors.darkGreen}></IconDownload>}
                  label={"Herunterladen"}
                ></Button>
                <View style={{ width: Metrics.baseMargin }}></View>
              </>
            )}
            <Button
              url={"alksjdfkl"}
              icon={<IconShare color={Colors.darkGreen}></IconShare>}
              label={"Teilen"}
            ></Button>
          </View>

          <View>
            <View
              style={{
                height: Metrics.tripleBaseMargin,
              }}
            ></View>
            {/* <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {posts.map((item, index) => {
              return (
                <View
                  key={"team-" + index}
                  style={{
                    maxWidth: 360,
                    width: "30%",
                    height: 450,
                    marginRight: Metrics.doubleBaseMargin,
                    backgroundColor: "yellow",
                    marginBottom: Metrics.doubleBaseMargin,
                  }}
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${item.image}?width=360&height=240&fit=cover`}
                    width={360}
                    height={240}
                    style={styles.avatar}
                    layout="responsive"
                    alt={sendung.name}
                  />
                  <View
                    style={{
                      justifyContent: "center",
                      paddingLeft: Metrics.doubleBaseMargin,
                    }}
                  >
                    <Text style={{ ...Fonts.style.text }}>{item.title}</Text>

                  </View>
                </View>
              );
            })}
          </View> */}
          </View>
        </View>
      </View>
    </View>
  );
}

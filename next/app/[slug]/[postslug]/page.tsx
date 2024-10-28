import IconDownload from "@/assets/svg/IconDownload";
import AudioFilePlayer from "@/components/AudioFilePlayer";
import Button from "@/components/Button";
import HoverText from "@/components/HoverText";
import RenderTipTap from "@/components/RenderTipTap";
import { Api } from "@/lib/api";
import {
  ItemsPosts,
  ItemsPostsDirectusUsers1,
  ItemsPrograms,
  Users,
} from "@/lib/api/data-contracts";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import moment from "moment";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Text, View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";
import IconShare from "../../../assets/svg/IconShare";
import { logError } from "@/lib/loging";

const { ids, styles } = StyleSheet.create({
  container: {
    maxWidth: 1280,
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
        next: {
          tags:
            process.env.NODE_ENV === "production" ? ["collection"] : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    let item: ItemsPosts = itemResponse.data.data;
    // console.log("post", item);

    return item;
  } catch (error) {
    logError(error);

    notFound();
  }
}

async function getRelatedPosts(slug) {
  try {
    const itemResponse = await Api.readItemsPosts(
      {
        fields: ["*"],
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        filter: JSON.stringify({
          program: {
            _eq: slug,
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
    let item: ItemsPosts[] = itemResponse.data.data;
    // console.log("posts", item);
    return item;
  } catch (error) {
    logError(error);

    notFound();
  }
}

export default async function DynamicPage({ params }) {
  const post = await getPost(params.postslug);
  const program = post.program as ItemsPrograms;
  // const relatedPosts = await getPost(post);

  let authorsLink = "Von";
  post.authors.forEach((item: ItemsPostsDirectusUsers1, index) => {
    let user: Users = item.directus_users_id as Users;
    if (index) {
      authorsLink += " &";
    }
    authorsLink += ` ${user.first_name} ${user.last_name}`;
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
              href={"/" + program.slug}
              style={[styles.sendungsInfo, styles.border]}
              hoverStyle={{
                color: Colors.green,
                borderColor: Colors.green,
              }}
            >
              {program.name}
            </HoverText>
            <View style={{ width: Metrics.doubleBaseMargin }}></View>
            <Text style={{ ...Fonts.style.text }}>
              <Text> {"Von "}</Text>
              {post.authors.map((item: ItemsPostsDirectusUsers1, index) => {
                let user: Users = item.directus_users_id as Users;
                return (
                  <HoverText
                    key={"author" + index}
                    href={"/beiträge"}
                    style={{ ...Fonts.style.textLink, color: Colors.green }}
                    hoverStyle={{ color: Colors.darkGreen }}
                  >{`${index ? " &" : ""} ${user.first_name} ${
                    user.last_name
                  }`}</HoverText>
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
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

          {post.content && <RenderTipTap content={post.content}></RenderTipTap>}
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

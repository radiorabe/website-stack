import IconDownload from "@/assets/svg/IconDownload";
import AudioFilePlayer from "@/components/AudioFilePlayer";
import Button from "@/components/Button";
import HoverText from "@/components/HoverText";
import RenderTipTap from "@/components/RenderTipTap";
import { Api } from "@/lib/api";
import {
  ItemsPost,
  ItemsPostDirectusUsers,
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
import IconShare from "../../../../assets/svg/IconShare";
import { logError } from "@/lib/loging";
import AudioFiles from "./AudioFiles";
import ImageBox from "@/components/ImageBox";

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

async function getPost(params) {
  try {
    console.log("params", params);
    const date = moment(params.slug, "DD-MM-YYYY");
    const slug = params.postslug;
    const nextDayDate = moment(params.slug, "DD-MM-YYYY").add(1, "d");
    console.log("date", date);
    console.log("nextDayDate", nextDayDate);

    const itemResponse = await Api.readItemsPost(
      {
        fields: [
          "*",
          "program.name",
          "program.slug",
          "authors.directus_users_id.first_name",
          "authors.directus_users_id.last_name",
          "audio_files.directus_files_id.*",
          "imagebox.*",
        ],
        filter: JSON.stringify({
          slug: {
            _eq: slug,
          },
          date: { _gte: date, _lte: nextDayDate },
        }),
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
    let items: ItemsPost[] = itemResponse.data.data;
    console.log("post", items);
    // console.log("post.audioFiles", items.audioFiles);
    if (items.length === 0) {
      notFound();
    }
    return items[0];
  } catch (error) {
    logError(error);

    notFound();
  }
}

async function getRelatedPosts(slug) {
  try {
    const itemResponse = await Api.readItemsPost(
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
    let item: ItemsPost[] = itemResponse.data.data;
    // console.log("posts", item);
    return item;
  } catch (error) {
    logError(error);

    notFound();
  }
}

export default async function DynamicPage({ params }) {
  const post = await getPost(params);
  const program = post.program as ItemsPrograms;
  console.log("post.imagebox", post.imagebox);
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
              {post.authors.map((item: ItemsPostDirectusUsers, index) => {
                let user: Users = item.directus_users_id as Users;
                return (
                  <HoverText
                    key={"author" + index}
                    href={"/beitraege"}
                    style={{ ...Fonts.style.textLink, color: Colors.green }}
                    hoverStyle={{ color: Colors.darkGreen }}
                  >{`${index ? "," : ""} ${user.first_name} ${
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
          {post.imagebox && (
            <ImageBox
              imageId={post.imagebox.image}
              width={1440}
              height={960}
              title={post.imagebox.title}
              text={post.imagebox.text}
            ></ImageBox>
          )}

          {post.content && <RenderTipTap content={post.content}></RenderTipTap>}

          {post.audio_files && post.audio_files.length && (
            <View
              style={{
                paddingBottom: Metrics.tripleBaseMargin,
              }}
            >
              <AudioFilePlayer
                src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${post.audio_files[0].directus_files_id.id}/rabe-audio.mp3`}
              ></AudioFilePlayer>
              <View style={{ height: Metrics.doubleBaseMargin }}></View>
              <AudioFiles audioFiles={post.audio_files}></AudioFiles>
            </View>
          )}
          <View style={{ flexDirection: "row" }}>
            {/* {post.audioFiles && (
              <>
                <Button
                  url={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${post.audioFiles[0].directus_files_id.id}/${post.audioFiles[0].directus_files_id.title}.mp3?download`}
                  icon={<IconDownload color={Colors.darkGreen}></IconDownload>}
                  label={"Herunterladen"}
                ></Button>
                <View style={{ width: Metrics.baseMargin }}></View>
              </>
            )} */}
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

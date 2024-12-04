import AudioFilePlayer from "@/components/AudioFilePlayer";
import Button from "@/components/Button";
import HoverText from "@/components/HoverText";
import ImageBox from "@/components/ImageBox";
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
import { logError } from "@/lib/loging";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import moment from "moment";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import StyleSheet from "react-native-media-query";
import IconShare from "../../../../../assets/svg/IconShare";
import AudioFiles from "./AudioFiles";

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
    const date = moment(params.date, "DD-MM-YYYY");
    const slug = params.postslug;
    const nextDayDate = moment(params.date, "DD-MM-YYYY").add(1, "d");
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
          "authors.directus_users_id.id",
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

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPost(params);
  // console.log("constent", post.content.content);
  let paragraph = post.content.content.find(
    (item) => item.type === "paragraph"
  );
  let text = paragraph.content.find((item) => item.type === "text");

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post.title,
    description: text.text,
    openGraph: {
      images: [
        `${process.env.NEXT_PUBLIC_BE_URL}/assets/${post.imagebox.image}?width=${300}&height=${300}&fit=cover&format=webp`,
        ...previousImages,
      ],
    },
  };
}

export default async function BeitragPage({ params }: Props) {
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
                    href={{
                      pathname: "/beitraege",
                      query: { author: user.id },
                    }}
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

          {post.audio_files && post.audio_files.length !== 0 && (
            <View
              style={{
                paddingBottom: Metrics.tripleBaseMargin,
              }}
            >
              <AudioFilePlayer
                src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${post.audio_files[0].directus_files_id.id}/rabe-audio.mp3`}
              ></AudioFilePlayer>
              {post.audio_files.length >= 2 && (
                <View style={{ paddingTop: Metrics.doubleBaseMargin }}>
                  <AudioFiles audioFiles={post.audio_files}></AudioFiles>
                </View>
              )}
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
          </View>
        </View>
      </View>
    </View>
  );
}

"use client";
import AudioFilePlayer from "@/components/AudioFilePlayer";
import Button from "@/components/Button";
import ButtonText from "@/components/ButtonText";
import ImageBox from "@/components/RenderTipTap/ImageBox";
import RenderTipTap from "@/components/RenderTipTap";
import {
  ItemsImageBox,
  ItemsPost,
  ItemsPostDirectusUsers,
  ItemsPrograms,
  Users,
} from "@/lib/api/data-contracts";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import moment from "moment";
import StyleSheet from "react-native-media-query";
import IconShare from "../../../../../assets/svg/IconShare";
import { useState } from "react";
import useResponsive from "@/lib/useResponsisve";
import PostPreviewBox from "@/components/PostPreview/PostPreviewBox";

type Props = {
  post: ItemsPost;
  morePosts: ItemsPost[];
};

export default function BeitragPage({ post, morePosts }: Props) {
  const program = post.program as ItemsPrograms;
  const imagebox = post.imagebox as ItemsImageBox;
  let { isMobile } = useResponsive();

  let [shareButtonTitle, setShareButtonTitle] = useState("Teilen");

  return (
    <View dataSet={{ media: ids.container }} style={styles.container}>
      <View dataSet={{ media: ids.postContainer }} style={styles.postContainer}>
        <View
          dataSet={{ media: ids.postInfoContainer }}
          style={styles.postInfoContainer}
        >
          <Button href={"/" + program.slug} label={program.name}></Button>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              dataSet={{ media: ids.postAuthorText }}
              style={styles.postAuthorText}
            >
              <Text dataSet={{ media: ids.hide }} style={styles.hide}>
                {"Von "}
              </Text>
              {post.authors.map((item: ItemsPostDirectusUsers, index) => {
                let user: Users = item.directus_users_id as Users;
                let userName = `${index ? "," : ""} ${user.first_name || ""}`;

                if (user.last_name && user.last_name !== "") {
                  userName = userName + " " + user.last_name;
                }

                return (
                  <ButtonText
                    key={"author" + index}
                    href={{
                      pathname: "/beitraege",
                      query: { author: user.id },
                    }}
                    // dataSet={{media:ids.}}
                    style={{ ...Fonts.style.textLink, color: Colors.green }}
                    hoverStyle={{ color: Colors.darkGreen }}
                  >
                    {userName}
                  </ButtonText>
                );
              })}

              <Text dataSet={{ media: ids.hide }} style={styles.hide}>
                {" am "}
              </Text>
              <Text dataSet={{ media: ids.hide }} style={styles.hide}>
                {`${moment(post.date).format("D. MMMM YYYY")}`}
              </Text>
            </Text>
          </View>
          <Text dataSet={{ media: ids.mobileDate }} style={styles.mobileDate}>
            {`${moment(post.date).format("D. MMMM YYYY")}`}
          </Text>
        </View>
        <Text
          // dataSet={{media:ids.}}
          style={{
            ...Fonts.style.h1,
            paddingBottom: Metrics.tripleBaseMargin,
          }}
        >
          {post.title}
        </Text>
        {imagebox && (
          <ImageBox
            image={imagebox.image}
            width={1440}
            height={960}
            title={imagebox.title}
            text={imagebox.text}
          ></ImageBox>
        )}

        {post.content && <RenderTipTap content={post.content}></RenderTipTap>}

        {post.audio_files && post.audio_files.length !== 0 && (
          <View
            // dataSet={{media:ids.}}
            style={{
              paddingTop: Metrics.doubleBaseMargin,
              paddingBottom: Metrics.tripleBaseMargin,
            }}
          >
            <AudioFilePlayer audioFiles={post.audio_files}></AudioFilePlayer>
          </View>
        )}
        <View
          // dataSet={{media:ids.}}
          style={{ flexDirection: "row" }}
        >
          <Button
            onPress={() => {
              let shareUrl = `${process.env.NEXT_PUBLIC_FE_URL}/beitrag/${moment(post.date).format("DD-MM-YYYY")}/${post.slug}`;
              if (navigator.share && isMobile) {
                // Web Share API is supported
                navigator
                  .share({
                    title: "RaBe Beitrag: " + post.title,
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

      {morePosts && morePosts.length > 0 && (
        <View
          style={styles.morePostsContainer}
          dataSet={{ media: ids.morePostsContainer }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: Metrics.doubleBaseMargin,
            }}
          >
            <Text style={styles.h2Title} dataSet={{ media: ids.h2Title }}>
              {"Weitere Beiträge von " + program.name}
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
            <PostPreviewBox posts={morePosts}></PostPreviewBox>
          </View>
        </View>
      )}
    </View>
  );
}

const { ids, styles } = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    alignSelf: "center",
  },
  postContainer: {
    width: "75%",
    "@media (max-width: 910px)": {
      width: "90%",
    },
  },
  postInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Metrics.tripleBaseMargin,
    "@media (max-width: 910px)": {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  postAuthorText: {
    ...Fonts.style.text,
    paddingLeft: Metrics.doubleBaseMargin,
    "@media (max-width: 910px)": {
      paddingLeft: 0,
      paddingTop: Metrics.doubleBaseMargin,
    },
  },

  imageContainer: {
    width: "100%",
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
  hide: {
    "@media (max-width: 910px)": {
      display: "none",
    },
  },
  mobileDate: {
    display: "none",
    "@media (max-width: 910px)": {
      display: "flex",
      ...Fonts.style.text,
      paddingTop: Metrics.baseMargin,
    },
  },
  morePostsContainer: {
    width: "90vw",
    paddingTop: Metrics.quadBaseMargin,
    "@media (max-width: 910px)": {
      paddingTop: Metrics.octBaseMargin,
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
});

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

type Props = {
  post: ItemsPost;
};

export default function BeitragPage({ post }: Props) {
  const program = post.program as ItemsPrograms;

  const imagebox = post.imagebox as ItemsImageBox;

  return (
    <View dataSet={{ media: ids.container }} style={styles.container}>
      <View dataSet={{ media: ids.postContainer }} style={styles.postContainer}>
        <View
          dataSet={{ media: ids.postInfoContainer }}
          style={styles.postInfoContainer}
        >
          <Button href={"/" + program.slug} label={program.name}></Button>

          <View
            // dataSet={{media:ids.}}
            style={{ width: Metrics.doubleBaseMargin }}
          ></View>
          <Text
            // dataSet={{media:ids.}}
            style={{ ...Fonts.style.text }}
          >
            <Text dataSet={{ media: ids.hide }} style={styles.hide}>
              {"Von "}
            </Text>
            {post.authors.map((item: ItemsPostDirectusUsers, index) => {
              let user: Users = item.directus_users_id as Users;
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
                >{`${index ? "," : ""} ${user.first_name || ""} ${
                  user.last_name || ""
                }`}</ButtonText>
              );
            })}

            <Text dataSet={{ media: ids.hide }} style={styles.hide}>
              {"am "}
            </Text>
            <Text> {`${moment(post.date).format("DD. MMMM YYYY")}`}</Text>
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
            imageId={imagebox.image}
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
            url={"alksjdfkl"}
            icon={<IconShare color={Colors.darkGreen}></IconShare>}
            label={"Teilen"}
          ></Button>
        </View>

        <View>
          <View
            // dataSet={{media:ids.}}
            style={{
              height: Metrics.tripleBaseMargin,
            }}
          ></View>
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
});

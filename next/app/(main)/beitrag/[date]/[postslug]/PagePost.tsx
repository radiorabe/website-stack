"use client";
import AudioFilePlayer from "@/components/AudioFilePlayer";
import Button from "@/components/Button";
import HoverText from "@/components/HoverText";
import ImageBox from "@/components/ImageBox";
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
                  >{`${index ? "," : ""} ${user.first_name || ""} ${
                    user.last_name || ""
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
              style={{
                paddingBottom: Metrics.tripleBaseMargin,
              }}
            >
              <AudioFilePlayer audioFiles={post.audio_files}></AudioFilePlayer>
            </View>
          )}
          <View style={{ flexDirection: "row" }}>
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

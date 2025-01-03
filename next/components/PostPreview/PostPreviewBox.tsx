"use client";
import { ItemsPost } from "@/lib/api/data-contracts";
import { View } from "@/lib/server-react-native";
import useResponsive from "@/lib/useResponsisve";
import moment from "moment";
import Link from "next/link";
import StyleSheet from "react-native-media-query";
import FullPreview from "./FullPreview";
import HalfPreview from "./HalfPreview";

export interface Props {
  posts: ItemsPost[];
}

const PostPreviewBox = ({ posts }: Props) => {
  if (!posts || posts.length === 0) {
    return null;
  }

  const { isMobile } = useResponsive();

  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {posts.map((item, index) => {
        return (
          // <PostPreview
          //   key={"post" + index}
          //   data={item}
          //   index={index}
          // ></PostPreview>
          <View
            style={[
              styles.outerContainer,
              {
                marginTop:
                  isMobile && index >= 1 ? "8vw" : index >= 3 ? "4vw" : 0,
                // backSgroundColor: "green",
                // aspectRatio: data.preview_full_image ? 0.8 : "initial",
              },
            ]}
            dataSet={{ media: ids.outerContainer }}
          >
            <Link
              href={`/beitrag/${moment(item.date).format("DD-MM-YYYY")}/${item.slug}`}
              style={{
                textDecoration: "none",
                overflow: "hidden",
              }}
            >
              {item.preview_full_image ? (
                <FullPreview data={item}></FullPreview>
              ) : (
                <HalfPreview data={item}></HalfPreview>
              )}
            </Link>
          </View>
        );
      })}
    </View>
  );
};

export default PostPreviewBox;

const { ids, styles } = StyleSheet.create({
  outerContainer: {
    width: "30%",
    maxWidth: "30%",
    // aspectRatio: 0.8,
    "@media (max-width: 910px)": {
      width: "100%",
      maxWidth: "100%",
      aspectRatio: "initial",
    },
  },
});

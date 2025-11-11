"use client";
import { ItemsPost } from "@/lib/api/data-contracts";
import { View } from "@/lib/server-react-native";
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

  return (
    <View pointerEvents="box-none" style={styles.boxContainer} dataSet={{ media: ids.boxContainer }}>
      {posts.map((item, index) => {
        return (
          <View
            key={"post" + index}
            style={[
              styles.outerContainer,
              {
                aspectRatio: item.preview_full_image ? 0.8 : "initial",
              },
            ]}
            dataSet={{ media: ids.outerContainer }}
          >
            <Link
              href={`/beitrag/${moment(item.date_published).format("DD-MM-YYYY")}/${item.slug}`}
              style={{
                textDecoration: "none",
                // overflow: "hidden",
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
  boxContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: "-4vw",
    "@media (max-width: 910px)": {
      marginTop: "-8vw",
    },
  },
  outerContainer: {
    width: "30%",
    maxWidth: "30%",
    marginTop: "4vw",
    "@media (max-width: 910px)": {
      width: "100%",
      maxWidth: "100%",
      marginTop: "8vw",
    },
  },
});

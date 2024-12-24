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
  data: ItemsPost;
  index: number;
}

const PostPreview = ({ data, index }: Props) => {
  const { isMobile } = useResponsive();

  return (
    <View
      style={[
        styles.outerContainer,
        {
          marginTop: isMobile && index >= 1 ? "8vw" : index >= 3 ? "4vw" : 0,
        },
      ]}
      dataSet={{ media: ids.outerContainer }}
    >
      <Link
        href={`/beitrag/${moment(data.date).format("DD-MM-YYYY")}/${data.slug}`}
        style={{
          textDecoration: "none",
          overflow: "hidden",
        }}
      >
        {data.preview_full_image ? (
          <FullPreview data={data}></FullPreview>
        ) : (
          <HalfPreview data={data}></HalfPreview>
        )}
      </Link>
    </View>
  );
};

export default PostPreview;

const { ids, styles } = StyleSheet.create({
  outerContainer: {
    width: "30%",
    maxWidth: "30%",
    aspectRatio: 0.8,
    "@media (max-width: 910px)": {
      width: "100%",
      maxWidth: "100%",
      aspectRatio: "initial",
    },
  },
});

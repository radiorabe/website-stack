"use client";
import Button from "@/components/Button";
import PostPreview from "@/components/PostPreview";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import Fonts from "../../../lib/Fonts";
import { useEffect, useState } from "react";
import { ItemsPost } from "@/lib/api/data-contracts";
import { getPosts } from "./getPosts";
import { useInView } from "react-intersection-observer";
import Colors from "@/lib/Colors";
import Loader from "react-spinners/ClipLoader";
import ButtonFull from "@/components/ButtonFull";

const NUMBER_OF_POSTS_TO_FETCH = 3;

export default function PostList({ initialPosts, filters }) {
  const [offset, setOffset] = useState(NUMBER_OF_POSTS_TO_FETCH);
  const [posts, setPosts] = useState<ItemsPost[]>(initialPosts);
  const [isLoading, setIsloading] = useState(false);
  const [allPostsFetched, setAllPostsFetched] = useState(false);
  const { ref, inView } = useInView();

  const loadMoreUsers = async () => {
    const apiPosts = await getPosts(filters, offset, NUMBER_OF_POSTS_TO_FETCH);
    if (apiPosts.length === 0) {
      setAllPostsFetched(true);
    }
    setPosts((posts) => [...posts, ...apiPosts]);
    setOffset((offset) => offset + NUMBER_OF_POSTS_TO_FETCH);
    setIsloading(false);
  };

  useEffect(() => {
    if (inView) {
      setIsloading(true);
      loadMoreUsers();
    }
  }, [inView]);

  useEffect(() => {
    if (initialPosts !== posts) {
      setOffset(NUMBER_OF_POSTS_TO_FETCH);
      setAllPostsFetched(false);
      setPosts(initialPosts);
    }
  }, [initialPosts]);
  return (
    <>
      {posts.length > 0 ? (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {posts.map((item, index) => {
            return (
              <PostPreview
                key={"post" + index}
                data={item}
                index={index}
              ></PostPreview>
            );
          })}
        </View>
      ) : (
        <View
          style={{
            height: "40vh",
            alignSelf: "center",
            maxWidth: 800,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              ...Fonts.style.h1,
              textAlign: "center",
              paddingBottom: Metrics.doubleBaseMargin,
            }}
          >
            {"Ohje, dazu gibt es noch keinen Beitrag :/"}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                ...Fonts.style.text,
                textAlign: "center",
                paddingRight: Metrics.doubleBaseMargin,
              }}
            >
              {"Schreibe etwas zu diesem Thema."}
            </Text>
            <ButtonFull href={"/mitmachen"} label={"Jetzt mitmachen"} />
          </View>
        </View>
      )}
      {/* <div ref={ref}>{isLoading && <div> Loading...</div>}</div> */}
      <div ref={ref} style={{ display: "flex", justifyContent: "center" }}>
        {isLoading && !allPostsFetched && (
          <View
            style={[
              {
                borderColor: Colors.green,
                borderRadius: 9,
                borderWidth: 1,
                alignSelf: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 3,
                paddingHorizontal: 6,
                marginTop: Metrics.tripleBaseMargin,
                backgroundColor: Colors.lightGreen,
              },
            ]}
          >
            {/* {icon} */}
            <Loader color={Colors.green} size={20} loading={true}></Loader>
            <Text
              style={[
                {
                  ...Fonts.style.h2,
                  flexShrink: 1,
                  color: Colors.green,
                  marginLeft: Metrics.halfHalfBaseMargin,
                },
              ]}
            >
              {"Sendungen werden geladen"}
            </Text>
          </View>
        )}
      </div>
    </>
  );
}

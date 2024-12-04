import Button from "@/components/Button";
import ButtonFull from "@/components/ButtonFull";
import PostPreview from "@/components/PostPreview";
import Metrics from "@/lib/Metrics";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { View, Text } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";
import Fonts from "../../../lib/Fonts";
import { Api } from "../../../lib/api";
import { ItemsPost } from "../../../lib/api/data-contracts";
import { logError } from "@/lib/loging";
import SearchBox from "./SearchBox";

async function getPosts(searchTerm) {
  try {
    const itemResponse = await Api.readItemsPost(
      {
        fields: ["*", "program.name", "imagebox.image"],
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        filter: JSON.stringify({
          _and: [
            {
              status: {
                _eq: "published",
              },
            },
            {
              _or: [
                {
                  tags: {
                    tags_id: {
                      value: {
                        _icontains: searchTerm ? searchTerm : undefined,
                      },
                    },
                  },
                },
                {
                  title: { _icontains: searchTerm ? searchTerm : undefined },
                },
              ],
            },
          ],
        }),
        sort: ["-date"],
        // limit: 3,
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
    console.log("item", item);

    return item;
  } catch (error) {
    logError(error);
    notFound();
  }
}

export const metadata: Metadata = {
  title: "Beiträge",
};

export default async function ImpressumPage({ searchParams }) {
  // Extract filters from searchParams
  const filters = {
    searchTerm: searchParams.searchTerm || "",
    // category: searchParams.category || '',
    // maxPrice: searchParams.maxPrice || '',
  };

  // Construct the API endpoint with query parameters
  const params = new URLSearchParams(filters).toString();
  console.log("params", params);

  const posts = await getPosts(filters.searchTerm);
  // console.log("posts", posts);

  return (
    <View>
      <View
        style={{
          width: "90vw",
          alignSelf: "center",
          paddingVertical: Metrics.tripleBaseMargin,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: Metrics.doubleBaseMargin,
          }}
        >
          <ButtonFull href={"/beitraege"} label={"Alle Beiträge"} />
          {/* <Button url={""} label={"suche"} /> */}
          <SearchBox></SearchBox>
        </View>

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
          <View>
            <Text>{"Nothing found"}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const { styles } = StyleSheet.create({
  container: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  link: {
    color: "blue",
  },
  textContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  text: {
    ...Fonts.style.text,
    alignItems: "center",
    fontSize: 24,
    marginBottom: 24,
  },
});

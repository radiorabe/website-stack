import Button from "@/components/Button";
import ButtonFull from "@/components/ButtonFull";
import PostPreview from "@/components/PostPreview";
import Metrics from "@/lib/Metrics";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { View, Text } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";
import Fonts from "../../../lib/Fonts";
import { Api, UserApi } from "../../../lib/api";
import {
  GetUsersData,
  ItemsPost,
  ItemsPrograms,
  Users,
} from "../../../lib/api/data-contracts";
import { logError } from "@/lib/loging";
import SearchBox from "./SearchBox";
import FilterLabel from "@/components/FilterLabel";

async function getPosts(filters) {
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
            // {
            //   authors: {
            //     directus_users_id: {
            //       id: filters.author ? filters.author : undefined,
            //     },
            //   },
            // },
            {
              program: {
                slug: filters.program ? filters.program : undefined,
              },
            },
            {
              _or: [
                {
                  tags: {
                    tags_id: {
                      value: {
                        _icontains: filters.searchTerm
                          ? filters.searchTerm
                          : undefined,
                      },
                    },
                  },
                },
                {
                  title: {
                    _icontains: filters.searchTerm
                      ? filters.searchTerm
                      : undefined,
                  },
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

async function getProgram(slug) {
  try {
    const itemResponse = await Api.readSingleItemsPrograms(
      {
        id: slug,
        fields: ["name"],
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
    let item: ItemsPrograms = itemResponse.data.data;
    console.log("item", item);

    return item;
  } catch (error) {
    logError(error);
  }
}

async function getAuthor(id) {
  try {
    const itemResponse = await UserApi.getUser(
      {
        id: id,
        fields: ["*"],
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
    let item: Users = itemResponse.data.data;
    console.log("item", item);

    return item;
  } catch (error) {
    logError(error);
  }
}

export const metadata: Metadata = {
  title: "Beiträge",
};

export default async function BeitraegePage({ searchParams }) {
  // Extract filters from searchParams
  const filters = {
    searchTerm: searchParams.searchTerm || "",
    author: searchParams.author || "",
    program: searchParams.program || "",
  };

  // Construct the API endpoint with query parameters
  // const params = new URLSearchParams(filters).toString();
  // console.log("params", params);

  const posts = await getPosts(filters);
  const program = await getProgram(filters.program);
  const author = await getAuthor(filters.author);

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
          <SearchBox
            programName={program.name}
            authorName={`${author.first_name} ${author.last_name}`}
          ></SearchBox>
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
              <Button href={"/mitmachen"} label={"Jetzt mitmachen"} />
            </View>
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

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
import { getPosts } from "./getPosts";
import PostList from "./PostList";

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
    // console.log("item", item);

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
    // console.log("item", item);

    return item;
  } catch (error) {
    logError(error);
  }
}

export const metadata: Metadata = {
  title: "Beiträge",
};
const INITIAL_NUMBER_OF_POSTS = 3;

export default async function BeitraegePage({ searchParams }) {
  // Extract filters from searchParams
  const filters = {
    searchTerm: searchParams.searchTerm || "",
    author: searchParams.author || "",
    program: searchParams.program || "",
  };

  const posts = await getPosts(filters, 0, INITIAL_NUMBER_OF_POSTS);
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
        <PostList filters={filters} initialPosts={posts}></PostList>
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

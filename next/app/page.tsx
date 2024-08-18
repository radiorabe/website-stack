import { StyleSheet, View, Text } from "react-native";
import Fonts from "@/lib/Fonts";
import { Api } from "@/lib/api";
import { ItemsPartyTips, ItemsPosts } from "@/lib/api/data-contracts";
// import Layout from "../components/Layout";
import Button from "@/components/Button";
import ButtonFull from "@/components/ButtonFull";
import PostPreview from "@/components/PostPreview";
import PartyTip from "@/assets/svg/IconPartyTip";
import Metrics from "@/lib/Metrics";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Colors from "@/lib/Colors";
import moment from "moment";
const window = new JSDOM("").window;
const purify = DOMPurify(window);

async function getPosts() {
  try {
    const itemResponse = await Api.readItemsPosts(
      {
        fields: ["*"],
        filter: JSON.stringify({
          status: {
            _eq: "published",
          },
        }),
        sort: "-date",
        // limit: 3,
      },
      {
        // next: { tags: ["collection"] },
        cache: "no-store",
      }
    );
    // console.log("response", itemResponse);
    let item: ItemsPosts = itemResponse.data.data;
    // console.log("posts", item);
    // console.log("team", item.team);
    // console.log("posts", item.posts);

    return item;
  } catch (error) {
    console.error("error", error.error);

    notFound();
  }
}

async function getPartyTips() {
  try {
    const itemResponse = await Api.readItemsPartyTips(
      {
        fields: [
          "title_1",
          "title_2",
          "date",
          "url",
          "address_line_1",
          "address_line_2",
        ],
        filter: JSON.stringify({
          status: {
            _eq: "published",
          },
        }),
        sort: "-date",
        // limit: 3,
      },
      {
        // next: { tags: ["collection"] },
        cache: "no-store",
      }
    );
    // console.log("response", itemResponse);
    let item: ItemsPartyTips = itemResponse.data.data;
    console.log("partyTips", item);
    // console.log("team", item.team);
    // console.log("posts", item.posts);

    return item;
  } catch (error) {
    console.error("error", error.error);

    notFound();
  }
}

export const metadata: Metadata = {
  title: "Impressum",
};

export default async function ImpressumPage(props) {
  const posts = await getPosts();
  const partyTips = await getPartyTips();

  return (
    <View>
      <View
        style={{
          maxWidth: 1280,
          width: "100%",
          alignSelf: "center",
          paddingVertical: Metrics.tripleBaseMargin,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: Metrics.tripleBaseMargin,
            paddingBottom: Metrics.doubleBaseMargin,
          }}
        >
          <View>
            <Text style={{ ...Fonts.style.h2 }}>{"Neuste Beiträge"}</Text>
          </View>
          <ButtonFull href={"/beitraege"} label={"Alle Beiträge"} />
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginHorizontal: Metrics.tripleBaseMargin,
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
        <View
          style={{
            backgroundColor: Colors.darkGreen,
            padding: Metrics.tripleBaseMargin,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ ...Fonts.style.h3, color: Colors.white }}>
              {"Heutiges Programm"}
            </Text>
            <Text style={{ ...Fonts.style.h3, color: Colors.white }}>
              {"Playlist"}
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: Metrics.tripleBaseMargin,
          }}
        >
          <View>
            <Text
              style={{
                ...Fonts.style.h3,
                color: Colors.black,
                marginBottom: Metrics.doubleBaseMargin,
              }}
            >
              {"Ausgehtips"}
            </Text>
            <View
              style={{
                width: "100%",
              }}
            >
              {partyTips.map((item) => {
                return (
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <PartyTip></PartyTip>
                    <View>
                      <Text
                        style={{
                          ...Fonts.style.h3,
                        }}
                      >
                        {item.title_1}
                      </Text>
                      <Text
                        style={{
                          ...Fonts.style.h3,
                        }}
                      >
                        {item.title_2}
                      </Text>
                    </View>

                    <View>
                      <Text
                        style={{
                          ...Fonts.style.text,
                        }}
                      >
                        {item.address_line_1}
                      </Text>
                      <Text
                        style={{
                          ...Fonts.style.text,
                        }}
                      >
                        {item.address_line_2}
                      </Text>
                      <Text
                        style={{
                          ...Fonts.style.text,
                        }}
                      >
                        {moment(item.date).format("dd DD.MM") +
                          ", ab " +
                          moment(item.date).format("hh:mm") +
                          " Uhr"}
                      </Text>
                    </View>
                    <View>
                      <Button url={item.url} label={"Website"}></Button>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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

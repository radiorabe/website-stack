import { Api } from "@/lib/api";
import { ItemsPrograms, ItemsSendungen } from "@/lib/api/data-contracts";
import { notFound } from "next/navigation";
import Image from "next/image";
import StyleSheet from "react-native-media-query";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { View, Text } from "react-native";
import Colors from "@/lib/Colors";
import HoverUrl from "@/components/HoverUrl";
import IconShare from "./IconShare";

const { ids, styles } = StyleSheet.create({
  container: {
    maxWidth: 1920,
    alignItems: "center",
    alignSelf: "center",
  },
  imageContainer: {
    width: "100%",
  },
  imageOverlayContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  title: {
    ...Fonts.style.h1,
    color: "white",
    textAlign: "center",
    paddingBottom: Metrics.doubleBaseMargin,
  },
  sendungsInfo: { ...Fonts.style.text, color: "white", textAlign: "center" },
  image: { width: "100%" },
  avatar: { borderRadius: 9 },
});

async function getSendung(slug) {
  try {
    const itemResponse = await Api.readSingleItemsPrograms(
      // { id: slug, fields: ["*", "team.*", "team.*.directus_users_id.*"] },
      { id: slug, fields: ["*", "team.directus_users_id.*"] },
      // { id: slug, fields: ["*,team.directus_users_id.*"] },
      {
        // next: { tags: ["collection"] },
        cache: "no-store",
      }
    );
    // console.log("response", itemResponse);
    let item: ItemsPrograms = itemResponse.data.data;
    console.log("item", item);
    console.log("team", item.team);

    return item;
  } catch (error) {
    notFound();
  }
}

export default async function DynamicPage({ params }) {
  const sendung = await getSendung(params.slug);
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${sendung.image}?width=1920&height=600&fit=cover`}
            width={1920}
            height={600}
            style={styles.image}
            layout="responsive"
            alt={sendung.name}
          />

          <View style={styles.imageOverlayContainer}>
            <View style={{}}>
              <Text style={[styles.title]}>{sendung.name}</Text>
              <View style={{ paddingBottom: Metrics.doubleBaseMargin }}>
                <Text style={styles.sendungsInfo}>{"Sendung supporten"}</Text>
              </View>
              <View style={{ paddingBottom: Metrics.tripleBaseMargin }}>
                <Text style={styles.sendungsInfo}>{"Nächste Sendung"}</Text>
                <Text style={styles.sendungsInfo}>{"Heute um 20:00"}</Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{ width: "75%", paddingVertical: Metrics.tripleBaseMargin }}
        >
          <Text style={{ ...Fonts.style.text }}>{sendung.description}</Text>
          <View style={{ height: Metrics.tripleBaseMargin }}></View>
          <Text style={{ ...Fonts.style.h2 }}>
            {`Das ${sendung.name} Team`}
          </Text>
          <View style={{ paddingTop: Metrics.doubleBaseMargin }}>
            {sendung.team.map((item, index) => {
              let user = item.directus_users_id;
              return (
                <View
                  key={"team-" + index}
                  style={{
                    paddingBottom: Metrics.baseMargin,
                    width: "50%",
                    flexDirection: "row",
                  }}
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${user.avatar}?width=90&height=90&fit=cover`}
                    width={90}
                    height={90}
                    style={styles.avatar}
                    // layout="responsive"
                    alt={sendung.name}
                  />
                  <View
                    style={{
                      justifyContent: "center",
                      paddingLeft: Metrics.doubleBaseMargin,
                    }}
                  >
                    <Text style={{ ...Fonts.style.text }}>
                      {`${user.first_name} ${user.last_name}`}
                    </Text>

                    <HoverUrl
                      url={"mailto:" + user.email}
                      style={{ ...Fonts.style.textLink, color: Colors.green }}
                      hoverStyle={{ color: Colors.darkGreen }}
                    >
                      {user.email}
                    </HoverUrl>
                    {/* <Text style={{}}>{user.email}</Text> */}
                  </View>
                </View>
              );
            })}
          </View>
          <View style={{ height: Metrics.tripleBaseMargin }}></View>
          <Text
            style={{
              ...Fonts.style.h2,
              paddingBottom: Metrics.doubleBaseMargin,
            }}
          >
            {"Nächste Sendung"}
          </Text>
          <Text style={{ ...Fonts.style.text }}>
            {"Sonntag, 31. März 2024, 20:00"}
          </Text>
          <Text style={{ ...Fonts.style.text }}>
            {"Montag, 01. April 2024, 19:00"}
          </Text>
          <Text style={{ ...Fonts.style.text }}>
            {"Montag, 22. April 2024, 20:00"}
          </Text>
          <View
            style={{
              height: Metrics.tripleBaseMargin,
            }}
          ></View>
          <View
            style={{
              borderBlockColor: Colors.black,
              borderRadius: 9,
              borderWidth: 1,
              alignSelf: "flex-start",
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 3,
              paddingHorizontal: 6,
            }}
          >
            <IconShare color={Colors.darkGreen}></IconShare>
            <Text
              style={{
                ...Fonts.style.textLink,
                flexShrink: 1,
                paddingLeft: 6,
              }}
            >
              {"Teilen"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

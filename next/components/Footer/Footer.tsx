import { Text, View } from "react-native";
import StyleSheet from "react-native-media-query";

import Colors from "../../lib/Colors";
import Fonts from "../../lib/Fonts";
import HoverUrl from "../HoverUrl";
import BarIcons from "./BarIcons";
import BarLinks from "./BarLinks";
import FooterRabe from "./FooterRabe";
import { Api } from "@/lib/api";
import { ItemsPageContact } from "@/lib/api/data-contracts";
import { notFound } from "next/navigation";

const { ids, styles } = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.darkGreen,
    width: "100%",
  },
  innerContainer: {
    width: "100%",
    maxWidth: 1280,
    minHeight: 250,
    justifyContent: "space-around",
  },

  hoverText: {
    color: Colors.lightGreen,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ":hover": {
      color: Colors.green,
    },
  },
});

async function getContactData() {
  try {
    const itemResponse = await Api.readItemsPageContact(
      {
        fields: ["*"],
        // limit: 3,
      },
      {
        // next: { tags: ["collection"] },
        cache: "no-store",
      }
    );
    // console.log("response", itemResponse);
    let item: ItemsPageContact = itemResponse.data.data as ItemsPageContact;
    // console.log("PageContact", item);
    // console.log("team", item.team);
    // console.log("posts", item.posts);

    return item;
  } catch (error) {
    console.error("error", error.error);

    notFound();
  }
}
async function Footer(props) {
  const contactData = await getContactData();
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View
          style={{
            position: "absolute",
            right: 75,
            bottom: 0,
          }}
        >
          <FooterRabe color={Colors.black} scale={1}></FooterRabe>
        </View>
        <View>
          <Text
            style={{
              flexDirection: "row",
              color: Colors.lightGreen,
              ...Fonts.style.navigation,
              textAlign: "center",
            }}
          >
            <Text>{`Radio Bern: RaBe ${contactData.street} ${contactData.street_number}, ${contactData.plz} ${contactData.city}, `}</Text>
            <HoverUrl
              url={`mailto:${contactData.email}`}
              style={{ color: Colors.lightGreen }}
              hoverStyle={{ color: Colors.green }}
            >
              {contactData.email}
            </HoverUrl>
          </Text>
        </View>

        <View>
          <Text
            style={{
              flexDirection: "row",
              color: Colors.lightGreen,
              ...Fonts.style.navigation,
              textAlign: "center",
            }}
          >
            <Text>{"Studio: "}</Text>
            <HoverUrl
              url={`tel:${contactData.studio_phone_number}`}
              style={{ color: Colors.lightGreen }}
              hoverStyle={{ color: Colors.green }}
            >
              {contactData.studio_phone_number}
            </HoverUrl>
            <Text>{", "}</Text>

            <HoverUrl
              url={`mailto:${contactData.studio_email}`}
              style={{ color: Colors.lightGreen }}
              hoverStyle={{ color: Colors.green }}
            >
              {contactData.studio_email}
            </HoverUrl>
          </Text>
        </View>

        {/* <View style={{ height: Metrics.quadBaseMargin }}></View> */}

        <BarIcons></BarIcons>

        {/* <View style={{ height: Metrics.quadBaseMargin }}></View> */}
        <BarLinks></BarLinks>

        {/* <View style={{ height: Metrics.quadBaseMargin }}></View> */}
      </View>
    </View>
  );
}

export default Footer;

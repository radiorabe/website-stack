import { Text, View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";
import Fonts from "../../lib/Fonts";
import { Metadata } from "next";
import RenderTipTap from "@/components/RenderTipTap";
import { logError } from "@/lib/loging";
import { notFound } from "next/navigation";
import Metrics from "@/lib/Metrics";
import { ItemsPageContact, ItemsPageReceive } from "@/lib/api/data-contracts";
import { Api } from "@/lib/api";
import Colors from "@/lib/Colors";
import HoverUrl from "@/components/HoverUrl";
import Image from "next/image";
import Map from "./Map";

export const metadata: Metadata = {
  title: "Kontakt",
};

async function getPageData() {
  try {
    const itemResponse = await Api.readItemsPageContact(
      {
        fields: [
          "*",
          "contact_addresses.contact_address_id.*",
          "partner_logos.*",
        ],
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
    let item: ItemsPageContact = itemResponse.data.data as ItemsPageContact;
    console.log("ItemsPageContact", item);
    // console.log("team", item.team);
    // console.log("posts", item.posts);

    return item;
  } catch (error) {
    logError(error);

    notFound();
  }
}

export default async function KontaktPage(props) {
  const data = await getPageData();

  return (
    <View>
      <View
        style={{
          maxWidth: 1280,
          width: "100%",
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "75%",
            padding: Metrics.tripleBaseMargin,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              // backgroundColor: "green",
            }}
          >
            <Text style={{ ...Fonts.style.text }}>{"Über Rabe"}</Text>
            <Text
              style={[
                { ...Fonts.style.h4 },
                { color: Colors.green, paddingHorizontal: Metrics.baseMargin },
              ]}
            >
              {"\u2192"}
            </Text>
            <Text style={{ ...Fonts.style.text }}>{"Kontakt"}</Text>
          </View>
          {/* {data.content && <RenderTipTap content={data.content}></RenderTipTap>} */}
          <View>
            <Text
              style={{
                ...Fonts.style.h2,
                paddingTop: Metrics.tripleBaseMargin,
              }}
            >
              {"Kontaktadresse"}
            </Text>
            <View
              style={{
                paddingTop: Metrics.doubleBaseMargin,
                paddingBottom: Metrics.tripleBaseMargin,
              }}
            >
              <Text style={{ ...Fonts.style.text }}>{data.name}</Text>
              <Text style={{ ...Fonts.style.text }}>
                {data.street + " " + data.street_number}
              </Text>
              <Text style={{ ...Fonts.style.text }}>
                {data.plz + " " + data.city}
              </Text>

              <HoverUrl
                url={`tel:${data.phone_number}`}
                style={{ ...Fonts.style.text }}
                hoverStyle={{ color: Colors.green }}
              >
                {data.phone_number}
              </HoverUrl>

              <HoverUrl
                url={`mailto:${data.email}`}
                style={{ ...Fonts.style.text }}
                hoverStyle={{ color: Colors.green }}
              >
                {data.email}
              </HoverUrl>
            </View>
          </View>
          <View>
            <Map
              lat={
                data.location &&
                data.location.coordinates &&
                data.location.coordinates[1]
                  ? data.location.coordinates[1]
                  : 46.9
              }
              lng={
                data.location &&
                data.location.coordinates &&
                data.location.coordinates[0]
                  ? data.location.coordinates[0]
                  : 7.4
              }
              // lat={data.lat ? data.lat : 46.9}
              // lng={data.lng ? data.lng : 7.4}
            ></Map>
          </View>
          <View>
            <Text
              style={{
                ...Fonts.style.h2,
                paddingTop: Metrics.tripleBaseMargin,
              }}
            >
              {"Direkter Draht ins Studio"}
            </Text>
            <View
              style={{
                paddingTop: Metrics.doubleBaseMargin,
                paddingBottom: Metrics.tripleBaseMargin,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <HoverUrl
                  url={`tel:${data.studio_phone_number}`}
                  style={{ ...Fonts.style.text }}
                  hoverStyle={{ color: Colors.green }}
                >
                  {data.studio_phone_number}
                </HoverUrl>
                <Text style={{ ...Fonts.style.text }}>
                  {" (nur während Livesendungen)"}
                </Text>
              </View>

              <HoverUrl
                url={`mailto:${data.studio_email}`}
                style={{ ...Fonts.style.text }}
                hoverStyle={{ color: Colors.green }}
              >
                {data.studio_email}
              </HoverUrl>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
                // backgroundColor: "yellow",
                paddingBottom:
                  Metrics.tripleBaseMargin - Metrics.doubleBaseMargin,
              }}
            >
              {data.contact_addresses.map((item, index) => {
                return (
                  <View
                    key={"contact" + index}
                    style={{
                      width: "50%",
                      paddingLeft: index % 2 ? Metrics.doubleBaseMargin : 0,
                      paddingBottom: Metrics.doubleBaseMargin,
                    }}
                  >
                    <View
                      style={{
                        width: "100%",
                        backgroundColor: Colors.darkGreen,
                        borderRadius: 9,
                        padding: Metrics.doubleBaseMargin,
                      }}
                    >
                      <Text
                        style={{
                          ...Fonts.style.h4,
                          color: Colors.lightGreen,
                          paddingBottom: Metrics.baseMargin,
                        }}
                        numberOfLines={1}
                      >
                        {item.contact_address_id.name}
                      </Text>

                      <HoverUrl
                        url={`tel:${item.contact_address_id.phone_number}`}
                        style={{
                          ...Fonts.style.text,
                          color: Colors.lightGreen,
                        }}
                        hoverStyle={{ color: Colors.green }}
                      >
                        {item.contact_address_id.phone_number}
                      </HoverUrl>

                      <HoverUrl
                        url={`mailto:${item.contact_address_id.email}`}
                        style={{
                          ...Fonts.style.text,
                          color: Colors.lightGreen,
                        }}
                        hoverStyle={{ color: Colors.green }}
                      >
                        {item.contact_address_id.email}
                      </HoverUrl>

                      {/* <Text
                      style={{ ...Fonts.style.text, color: Colors.lightGreen }}
                    >
                      {item.contact_address_id.phone_number}
                    </Text>
                    <Text
                      style={{ ...Fonts.style.text, color: Colors.lightGreen }}
                    >
                      {item.contact_address_id.email}
                    </Text> */}
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
          <View>
            <Text
              style={{
                ...Fonts.style.h2,
              }}
            >
              {"Zuständige Ombudsstelle:"}
            </Text>
            <View
              style={{
                paddingTop: Metrics.doubleBaseMargin,
                paddingBottom: Metrics.tripleBaseMargin,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ width: "50%" }}>
                <Text style={{ ...Fonts.style.text }}>{data.ombuds_name}</Text>
                <Text style={{ ...Fonts.style.text }}>
                  {data.ombuds_street + " " + data.ombuds_street_number}
                </Text>
                {data.ombuds_postfach && (
                  <Text style={{ ...Fonts.style.text }}>
                    {data.ombuds_postfach}
                  </Text>
                )}
                <Text style={{ ...Fonts.style.text }}>
                  {data.ombuds_plz + " " + data.ombuds_city}
                </Text>
              </View>
              <View style={{ width: "50%" }}>
                <Text style={{ ...Fonts.style.text }}>{"Stellvertreter:"}</Text>
                <Text style={{ ...Fonts.style.text }}>
                  {data.ombuds_name_2}
                </Text>
                <Text style={{ ...Fonts.style.text }}>
                  {data.ombuds_street_2 + " " + data.ombuds_street_number_2}
                </Text>
                {data.ombuds_postfach_2 && (
                  <Text style={{ ...Fonts.style.text }}>
                    {data.ombuds_postfach_2}
                  </Text>
                )}
                <Text style={{ ...Fonts.style.text }}>
                  {data.ombuds_plz_2 + " " + data.ombuds_city_2}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: Colors.darkGreen,
            width: "100%",
            padding: Metrics.doubleBaseMargin,
            marginBottom: Metrics.tripleBaseMargin,
            borderRadius: 9,
          }}
        >
          <Text
            style={{
              ...Fonts.style.h2,
              color: Colors.lightGreen,
              paddingBottom: Metrics.doubleBaseMargin,
            }}
          >
            {"Partnerorganisationen:"}
          </Text>
          {data.partner_logos && (
            <View style={{ flexDirection: "row" }}>
              {data.partner_logos.map((item, index) => {
                return (
                  <View
                    key={"partner" + index}
                    style={{
                      flexGrow: 1,
                      borderLeftColor: Colors.white,
                      borderLeftWidth: index && 2,
                    }}
                  >
                    <View
                      style={{
                        marginHorizontal: Metrics.baseMargin,
                      }}
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${item.directus_files_id}?width=240&height=160&fit=cover`}
                        width={240}
                        height={160}
                        layout="responsive"
                        alt={"partner" + index}
                      ></Image>
                    </View>
                  </View>
                );
              })}
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const { styles } = StyleSheet.create({});

"use client";
import HoverUrl from "@/components/HoverUrl";
import Colors from "@/lib/Colors";
import Metrics from "@/lib/Metrics";
import { Linking, Pressable, Text, View } from "@/lib/server-react-native";
import { Metadata } from "next";
import Image from "next/image";
import StyleSheet from "react-native-media-query";
import Fonts from "../../../lib/Fonts";
import Map from "./Map";
import BreadCrump from "@/components/BreadCrumb";
import {
  ItemsContactAddress,
  ItemsImageLink,
  ItemsPageContact,
  ItemsPageContactContactAddress,
  ItemsPageContactImageLink,
} from "@/lib/api/data-contracts";

export interface Props {
  pageData: ItemsPageContact;
}

export default function PageContact({ pageData }: Props) {
  const data = pageData;

  return (
    <View style={styles.outerContainer} dataSet={{ media: ids.outerContainer }}>
      <View style={styles.container} dataSet={{ media: ids.container }}>
        <BreadCrump label1={"Über Rabe"} label2={"Kontakt"}></BreadCrump>
        <View>
          <Text
            style={{
              ...Fonts.style.h2,
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
            <Text style={styles.text} dataSet={{ media: ids.text }}>
              {data.name}
            </Text>
            <Text style={styles.text} dataSet={{ media: ids.text }}>
              {data.street + " " + data.street_number}
            </Text>
            <Text style={styles.text} dataSet={{ media: ids.text }}>
              {data.plz + " " + data.city}
            </Text>

            <HoverUrl
              url={`tel:${data.phone_number}`}
              style={styles.text}
              dataSet={{ media: ids.text }}
              hoverStyle={{ color: Colors.green }}
            >
              {data.phone_number}
            </HoverUrl>

            <HoverUrl
              url={`mailto:${data.email}`}
              style={styles.text}
              dataSet={{ media: ids.text }}
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
                style={styles.text}
                dataSet={{ media: ids.text }}
                hoverStyle={{ color: Colors.green }}
              >
                {data.studio_phone_number}
              </HoverUrl>
              <Text style={styles.text} dataSet={{ media: ids.text }}>
                {" (nur während Livesendungen)"}
              </Text>
            </View>

            <HoverUrl
              url={`mailto:${data.studio_email}`}
              style={styles.text}
              dataSet={{ media: ids.text }}
              hoverStyle={{ color: Colors.green }}
            >
              {data.studio_email}
            </HoverUrl>
          </View>
        </View>
        <View>
          {data && data.contact_addresses && (
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
                paddingBottom: Metrics.baseMargin,
              }}
            >
              {data.contact_addresses.map((item, index) => {
                let addressRelation = item as ItemsPageContactContactAddress;
                let address =
                  addressRelation.contact_address_id as ItemsContactAddress;
                return (
                  <View
                    key={"contact" + index}
                    style={styles.contactBox}
                    dataSet={{ media: ids.contactBox }}
                  >
                    <View
                      style={styles.contactBoxGreen}
                      dataSet={{ media: ids.contactBoxGreen }}
                    >
                      <Text
                        style={{
                          ...Fonts.style.h4,
                          color: Colors.lightGreen,
                          paddingBottom: Metrics.baseMargin,
                        }}
                        numberOfLines={1}
                      >
                        {address.name}
                      </Text>

                      <HoverUrl
                        url={`tel:${address.phone_number}`}
                        style={{
                          ...Fonts.style.text,
                          color: Colors.lightGreen,
                        }}
                        hoverStyle={{ color: Colors.green }}
                      >
                        {address.phone_number}
                      </HoverUrl>

                      <HoverUrl
                        url={`mailto:${address.email}`}
                        style={{
                          ...Fonts.style.text,
                          color: Colors.lightGreen,
                        }}
                        hoverStyle={{ color: Colors.green }}
                      >
                        {address.email}
                      </HoverUrl>

                      {/* <Text
                      style={{ ...Fonts.style.text, color: Colors.lightGreen }}
                    >
                      {address.phone_number}
                    </Text>
                    <Text
                      style={{ ...Fonts.style.text, color: Colors.lightGreen }}
                    >
                      {address.email}
                    </Text> */}
                    </View>
                  </View>
                );
              })}
            </View>
          )}
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
              <Text style={styles.text} dataSet={{ media: ids.text }}>
                {data.ombuds_name}
              </Text>
              <Text style={styles.text} dataSet={{ media: ids.text }}>
                {data.ombuds_street + " " + data.ombuds_street_number}
              </Text>
              {data.ombuds_postfach && (
                <Text style={styles.text} dataSet={{ media: ids.text }}>
                  {data.ombuds_postfach}
                </Text>
              )}
              <Text style={styles.text} dataSet={{ media: ids.text }}>
                {data.ombuds_plz + " " + data.ombuds_city}
              </Text>
            </View>
            <View style={{ width: "50%" }}>
              <Text style={styles.text} dataSet={{ media: ids.text }}>
                {"Stellvertreter:"}
              </Text>
              <Text style={styles.text} dataSet={{ media: ids.text }}>
                {data.ombuds_name_2}
              </Text>
              <Text style={styles.text} dataSet={{ media: ids.text }}>
                {data.ombuds_street_2 + " " + data.ombuds_street_number_2}
              </Text>
              {data.ombuds_postfach_2 && (
                <Text style={styles.text} dataSet={{ media: ids.text }}>
                  {data.ombuds_postfach_2}
                </Text>
              )}
              <Text style={styles.text} dataSet={{ media: ids.text }}>
                {data.ombuds_plz_2 + " " + data.ombuds_city_2}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={styles.patnerContainer}
        dataSet={{ media: ids.patnerContainer }}
      >
        <Text style={styles.partnerTitle} dataSet={{ media: ids.partnerTitle }}>
          {"Partnerorganisationen"}
        </Text>
        {data && data.partner_logos && (
          <View style={{ flexDirection: "row", overflow: "scroll" }}>
            {data.partner_logos.map((item, index) => {
              let logoRelation = item as ItemsPageContactImageLink;
              let imageLink = logoRelation.image_link_id as ItemsImageLink;
              return (
                <Pressable
                  key={"partner" + index}
                  style={[
                    styles.partnerLogoContainer,
                    { borderLeftWidth: index && 2 },
                  ]}
                  dataSet={{ media: ids.partnerLogoContainer }}
                  onPress={() => Linking.openURL(imageLink.url)}
                >
                  <View
                    style={{
                      marginHorizontal: Metrics.baseMargin,
                      maxWidth: 200,
                      width: "80%",
                    }}
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${imageLink.image}?width=240&height=160&fit=cover`}
                      width={240}
                      height={160}
                      layout="responsive"
                      alt={"partner" + index}
                      // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    ></Image>
                  </View>
                </Pressable>
              );
            })}
          </View>
        )}
      </View>
    </View>
  );
}

const { styles, ids } = StyleSheet.create({
  outerContainer: {
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
  },
  container: {
    width: "74vw",
    alignSelf: "center",
    paddingTop: Metrics.tripleBaseMargin,
    "@media (max-width: 910px)": {
      width: "90vw",
    },
  },
  text: {
    ...Fonts.style.text,
  },
  contactBox: {
    width: "48%",
    paddingBottom: Metrics.doubleBaseMargin,
    "@media (max-width: 910px)": {
      width: "100%",
      paddingBottom: Metrics.tripleBaseMargin,
    },
  },
  contactBoxGreen: {
    width: "100%",
    backgroundColor: Colors.darkGreen,
    borderRadius: 9,
    padding: Metrics.doubleBaseMargin,
    "@media (max-width: 910px)": {
      padding: Metrics.tripleBaseMargin,
    },
  },
  patnerContainer: {
    backgroundColor: Colors.darkGreen,
    width: "90vw",
    padding: Metrics.doubleBaseMargin,
    marginBottom: Metrics.tripleBaseMargin,
    borderRadius: 9,
    "@media (max-width: 910px)": {
      padding: Metrics.tripleBaseMargin,
    },
  },
  partnerTitle: {
    ...Fonts.style.h2,
    color: Colors.lightGreen,
    paddingBottom: Metrics.doubleBaseMargin,
    "@media (max-width: 910px)": {
      textAlign: "center",
    },
  },
  partnerLogoContainer: {
    flexGrow: 1,
    borderLeftColor: Colors.white,
    alignItems: "center",
    ":hover": {
      opacity: 0.75,
    },
  },
});

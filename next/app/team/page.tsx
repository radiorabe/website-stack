import { StyleSheet, Text, View } from "react-native";
import Fonts, { FontBold, FontRegular } from "../../lib/Fonts";
import { Api } from "../../lib/api";
import {
  ItemsPageImpressum,
  ItemsPageTeam,
} from "../../lib/api/data-contracts";
// import Layout from "../components/Layout";
import { Metadata } from "next";
import Metrics from "@/lib/Metrics";
import Colors from "@/lib/Colors";
import MemberInfo from "@/components/MemberInfo";

const styles = StyleSheet.create({
  container: {
    maxWidth: 1280,
    width: "100%",
    alignItems: "center",
    alignSelf: "center",
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

export const metadata: Metadata = {
  title: "Team",
};

async function getTeamData() {
  try {
    const itemResponse = await Api.readItemsPageTeam(
      {
        fields: [
          "*",
          "members_staff.directus_users_id.first_name",
          "members_staff.directus_users_id.last_name",
          "members_staff.directus_users_id.email",
          "members_staff.directus_users_id.avatar",
        ],
      },
      {
        // next: { tags: ["collection"] },
        cache: "no-store",
      }
    );
    let item: ItemsPageTeam = itemResponse.data.data;
    // console.log("ItemsPageTeam", item);

    return item;
  } catch (error) {
    console.error("error", error.error);

    notFound();
  }
}

export default async function TeaamPage(props) {
  const data = await getTeamData();
  return (
    <View>
      <View style={styles.container}>
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
            <Text style={{ ...Fonts.style.text }}>{"Team"}</Text>
          </View>

          <View style={{ paddingTop: Metrics.tripleBaseMargin }}>
            <Text style={{ ...Fonts.style.text }}>{data.text}</Text>
          </View>

          <View style={{ paddingTop: Metrics.tripleBaseMargin }}>
            <Text style={{ ...Fonts.style.h3 }}>{"RaBe Staff"}</Text>
            <View style={{ paddingTop: Metrics.doubleBaseMargin }}>
              {data.members_staff.map((item, index) => {
                let user = item.directus_users_id;
                return <MemberInfo user={user}></MemberInfo>;
              })}
            </View>
          </View>

          <View style={{ paddingTop: Metrics.tripleBaseMargin }}>
            <Text style={{ ...Fonts.style.h3 }}>{"Vorstandsmitglieder"}</Text>
            <View style={{ paddingTop: Metrics.doubleBaseMargin }}>
              {data.members_management.map((item, index) => {
                let user = item.directus_users_id;
                return <MemberInfo user={user}></MemberInfo>;
              })}
            </View>
          </View>

          <View style={{ paddingTop: Metrics.tripleBaseMargin }}>
            <Text style={{ ...Fonts.style.h3 }}>
              {"Programmkommissionsmitglieder"}
            </Text>
            {data.members_program.map((item, index) => {
              let user = item.directus_users_id;
              return <MemberInfo user={user}></MemberInfo>;
            })}
          </View>
        </View>
      </View>
    </View>
  );
}

import { Text, View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";

import Fonts from "@/lib/Fonts";
import { Api } from "@/lib/api";
import {
  ItemsPageTeam,
  ItemsPageTeamDirectusUsers,
  Users,
} from "@/lib/api/data-contracts";
import MemberInfo from "@/components/MemberInfo";
import Colors from "@/lib/Colors";
import Metrics from "@/lib/Metrics";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const { styles } = StyleSheet.create({
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
          "members_staff.directus_users_id.*",
          "members_management.directus_users_id.*",
          "members_program.directus_users_id.*",
        ],
      },
      {
        next: { tags: process.env.NODE_ENV ? ["collection"] : undefined },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    let item: ItemsPageTeam = itemResponse.data.data as ItemsPageTeam;
    console.log("ItemsPageTeam", item);

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
            {data.members_staff && (
              <View style={{ paddingTop: Metrics.doubleBaseMargin }}>
                {data.members_staff.map(
                  (item: ItemsPageTeamDirectusUsers, index) => {
                    let user: Users = item.directus_users_id as Users;
                    return <MemberInfo user={user}></MemberInfo>;
                  }
                )}
              </View>
            )}
          </View>

          <View style={{ paddingTop: Metrics.tripleBaseMargin }}>
            <Text style={{ ...Fonts.style.h3 }}>{"Vorstandsmitglieder"}</Text>
            {data.members_management && (
              <View style={{ paddingTop: Metrics.doubleBaseMargin }}>
                {data.members_management.map(
                  (item: ItemsPageTeamDirectusUsers, index) => {
                    let user: Users = item.directus_users_id as Users;
                    return <MemberInfo user={user}></MemberInfo>;
                  }
                )}
              </View>
            )}
          </View>

          <View style={{ paddingTop: Metrics.tripleBaseMargin }}>
            <Text style={{ ...Fonts.style.h3 }}>
              {"Programmkommissionsmitglieder"}
            </Text>
            {data.members_program && (
              <View style={{ paddingTop: Metrics.doubleBaseMargin }}>
                {data.members_program.map(
                  (item: ItemsPageTeamDirectusUsers, index) => {
                    let user: Users = item.directus_users_id as Users;
                    return <MemberInfo user={user}></MemberInfo>;
                  }
                )}
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}

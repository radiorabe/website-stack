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
import { logError } from "@/lib/loging";

const { styles } = StyleSheet.create({
  container: {
    width: "74vw",
    alignSelf: "center",
    paddingVertical: Metrics.tripleBaseMargin,
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
        next: {
          tags:
            process.env.NODE_ENV === "production" ? ["collection"] : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    let item: ItemsPageTeam = itemResponse.data.data as ItemsPageTeam;
    console.log("ItemsPageTeam", item);

    return item;
  } catch (error) {
    logError(error);

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

        <View>
          <Text
            style={{
              ...Fonts.style.h3,
              paddingTop: Metrics.tripleBaseMargin,
            }}
          >
            {"RaBe Staff"}
          </Text>
          {data.members_staff && (
            <View
              style={{
                paddingTop: Metrics.baseMargin,
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {data.members_staff.map(
                (item: ItemsPageTeamDirectusUsers, index) => {
                  let user: Users = item.directus_users_id as Users;
                  return (
                    <MemberInfo
                      key={"memberstaff" + index}
                      user={user}
                    ></MemberInfo>
                  );
                }
              )}
            </View>
          )}
        </View>

        <View>
          <Text
            style={{
              ...Fonts.style.h3,
              paddingTop: Metrics.tripleBaseMargin,
            }}
          >
            {"Vorstandsmitglieder"}
          </Text>
          {data.members_management && (
            <View
              style={{
                paddingTop: Metrics.baseMargin,
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {data.members_management.map(
                (item: ItemsPageTeamDirectusUsers, index) => {
                  let user: Users = item.directus_users_id as Users;
                  return (
                    <MemberInfo
                      key={"membermanagement" + index}
                      user={user}
                    ></MemberInfo>
                  );
                }
              )}
            </View>
          )}
        </View>

        <View
          style={{
            paddingTop: Metrics.tripleBaseMargin,
          }}
        >
          <Text style={{ ...Fonts.style.h3 }}>
            {"Programmkommissionsmitglieder"}
          </Text>
          {data.members_program && (
            <View
              style={{
                paddingTop: Metrics.baseMargin,
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {data.members_program.map(
                (item: ItemsPageTeamDirectusUsers, index) => {
                  let user: Users = item.directus_users_id as Users;
                  return (
                    <MemberInfo
                      key={"memberprogram" + index}
                      user={user}
                    ></MemberInfo>
                  );
                }
              )}
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

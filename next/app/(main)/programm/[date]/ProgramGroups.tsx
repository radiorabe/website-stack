"use client";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";
import {
  ItemsPageProgramPrograms1,
  ItemsPrograms,
  ItemsPageProgramPrograms2,
  ItemsPageProgramPrograms3,
  ItemsPageProgram,
} from "@/lib/api/data-contracts";
import Button from "@/components/Button";
import Colors from "@/lib/Colors";

type Props = {
  pageData: ItemsPageProgram;
};

export default function ProgramGroups({ pageData }: Props) {
  const grouping = function (title, programs) {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={styles.groupTitle} dataSet={{ media: ids.groupTitle }}>
          {title}
        </Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            paddingTop: Metrics.halfBaseMargin,
            paddingBottom: Metrics.doubleBaseMargin,
          }}
        >
          {programs.map((programNode: ItemsPageProgramPrograms1, index) => {
            let program = programNode.programs_slug as ItemsPrograms;
            return (
              <Button
                key={title + index}
                style={{ padding: Metrics.halfBaseMargin }}
                href={"/" + program.slug}
                label={program.name}
                large
                full
                labelAlign="center"
                textColor={Colors.white}
              ></Button>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        width: "74vw",
        alignSelf: "center",
        alignItems: "center",
        paddingTop: Metrics.quadBaseMargin,
        paddingBottom: Metrics.tripleBaseMargin,
      }}
    >
      {grouping(pageData.programs_group_1_title, pageData.programs_group_1)}
      {grouping(pageData.programs_group_2_title, pageData.programs_group_2)}
      {grouping(pageData.programs_group_3_title, pageData.programs_group_3)}
    </View>
  );
}

const { ids, styles } = StyleSheet.create({
  groupTitle: {
    ...Fonts.style.h4,
    textAlign: "center",
    "@media (max-width: 910px)": {
      ...Fonts.style.h2,
    },
  },
});

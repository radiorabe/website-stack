"use client";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";

function RadioButton(props) {
  const { selected, labelBold, label, onPress, id } = props;
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: selected && Colors.hoverGreen },
      ]}
      dataSet={{ media: ids.container }}
      onClick={() => {
        if (onPress) {
          onPress(id);
        }
      }}
    >
      <View
        style={{
          width: 13,
          height: 13,
          borderWidth: 1,
          borderColor: Colors.white,
          borderStyle: "solid",
          borderRadius: 7,
          backgroundColor: selected ? Colors.white : undefined,
          marginRight: Metrics.baseMargin,
        }}
      ></View>
      <Text style={{ color: Colors.white, ...Fonts.style.text }}>
        <Text style={{ ...Fonts.style.h4 }}>{labelBold}</Text>
        <Text>{label}</Text>
      </Text>
    </View>
  );
}

export default RadioButton;

const { styles, ids } = StyleSheet.create({
  container: {
    flexDirection: "row",
    cursor: "pointer",
    borderRadius: 8,
    alignItems: "center",
    paddingVertical: Metrics.halfBaseMargin,
    paddingHorizontal: Metrics.baseMargin,

    ":hover": {
      backgroundColor: Colors.hoverGreen,
    },
  },
});

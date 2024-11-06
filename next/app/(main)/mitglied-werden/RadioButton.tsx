"use client";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text } from "@/lib/server-react-native";
import { useState } from "react";

function RadioButton(props) {
  const { selected, labelBold, label, onPress, id } = props;
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        cursor: "pointer",
        backgroundColor:
          hover || selected ? Colors.hoverGreen : Colors.darkGreen,
        borderRadius: 8,
        alignItems: "center",
        padding: Metrics.halfBaseMargin,
      }}
      onClick={() => {
        if (onPress) {
          onPress(id);
        }
      }}
    >
      <div
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
      ></div>
      <Text style={{ color: Colors.white, ...Fonts.style.text }}>
        <Text style={{ ...Fonts.style.h4 }}>{labelBold}</Text>
        <Text>{label}</Text>
      </Text>
    </div>
  );
}

export default RadioButton;

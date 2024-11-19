"use client";
import { ItemsInfoBox, ItemsQuote } from "@/lib/api/data-contracts";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import RenderTipTap from "./RenderTipTap";
import { useState } from "react";

export interface LinkProps {
  label: any;
  color: any;
  hoverColor: any;
  href: string;
}

const Link = ({ label, color, hoverColor, href }: LinkProps) => {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      textDecoration="none"
      style={{
        ...Fonts.style.TTtextLink,
        color: hover && hoverColor ? hoverColor : color,
        textDecoration: "none",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {label}
    </a>
  );
};

export default Link;

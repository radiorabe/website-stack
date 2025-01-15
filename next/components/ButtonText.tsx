"use client";
import { Linking, Pressable, Text, View } from "@/lib/server-react-native";
import Link from "next/link";
import StyleSheet from "react-native-media-query";

export interface Props {
  url?: string;
  disabled?: boolean;
  onPress?(): void;
  style?: any;
  hoverStyle?: any;
  mobileStyle?: any;
  href?: string;
  children?: any;
  numberOfLines?: number;
}

const ButtonText = ({
  url,
  disabled,
  onPress,
  style,
  hoverStyle,
  mobileStyle,
  href,
  children,
  numberOfLines,
}: Props) => {
  const { styles, ids } = getStyles(style, hoverStyle, mobileStyle);

  const buttonElement = (
    <Text
      style={styles.buttonText}
      dataSet={{ media: ids.buttonText }}
      numberOfLines={numberOfLines}
      ellipsizeMode="tail"
    >
      {children}
    </Text>
  );

  if (href) {
    return (
      <Link
        href={href}
        style={{ textDecoration: "none", display: "flex" }}
        onClick={onPress}
        passHref={true}
      >
        {buttonElement}
      </Link>
    );
  } else {
    return (
      <Pressable
        onPress={() => {
          if (!disabled) {
            if (onPress) {
              onPress();
            }
            if (url) {
              Linking.openURL(url);
            }
          }
        }}
      >
        {buttonElement}
      </Pressable>
    );
  }
};

export default ButtonText;

const getStyles = (style: any, hoverStyle: any, mobileStyle: any) =>
  StyleSheet.create({
    buttonText: {
      textDecoration: "none",
      ...style,
      ":hover": { transition: "0.2s", ...hoverStyle },
      "@media (max-width: 910px)": mobileStyle,
    },
  });

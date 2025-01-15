"use client";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import { Linking, Pressable, Text, View } from "@/lib/server-react-native";
import Link from "next/link";
import StyleSheet from "react-native-media-query";

export interface Props {
  url?: string;
  href?: string;
  label: string;
  labelAlign?: string;
  icon?: any;
  disabled?: boolean;
  onPress?(): void;
  style?: any;
  large?: boolean;
  backgroundColor?: any;
  backgroundHoverColor?: any;
  textColor?: any;
  hoverTextColor?: any;
  full?: boolean;
  multiLine?: boolean;
}

const Button = ({
  url,
  label,
  labelAlign,
  icon,
  disabled,
  onPress,
  href,
  style,
  large,
  backgroundColor,
  backgroundHoverColor,
  textColor,
  hoverTextColor,
  full,
  multiLine,
}: Props) => {
  let containerStyle = {
    borderColor: textColor ? textColor : Colors.black,
    borderRadius: 9,
    borderWidth: full ? 0 : 1,
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "100%",
    paddingVertical: large ? 13 : 8,
    paddingHorizontal: large ? 15 : 11,
    backgroundColor: backgroundColor
      ? backgroundColor
      : full
        ? Colors.darkGreen
        : undefined,
  };
  let containerHoverStyle = disabled
    ? {}
    : {
        borderColor: hoverTextColor ? hoverTextColor : Colors.green,
        backgroundColor: backgroundHoverColor
          ? backgroundHoverColor
          : full
            ? Colors.green
            : undefined,
      };

  let fontText = large ? Fonts.style.h2 : Fonts.style.textLink;

  let textStyle = {
    ...fontText,
    flexShrink: 1,
    userSelect: "none",
    MozUserSelect: "none",
    WebkitUserSelect: "none",
    msUserSelect: "none",
    color: textColor ? textColor : Colors.black,
    textAlign: labelAlign ? labelAlign : undefined,
    maxWidth: "100%",
    paddingLeft: icon ? 6 : 0,
  };

  let textHoverStyle = disabled
    ? {}
    : {
        color: hoverTextColor
          ? hoverTextColor
          : full
            ? Colors.white
            : Colors.green,
      };

  const { styles, ids } = getStyles(
    containerStyle,
    containerHoverStyle,
    textStyle,
    textHoverStyle
  );

  const buttonElement = (
    <View style={style}>
      <View style={styles.container} dataSet={{ media: ids.container }}>
        {icon && (
          <View style={{ width: large ? 32 : 18, height: large ? 32 : 18 }}>
            {icon}
          </View>
        )}
        <Text
          numberOfLines={multiLine ? undefined : 1}
          style={styles.text}
          dataSet={{ media: ids.text }}
        >
          {label}
        </Text>
      </View>
    </View>
  );

  if (href) {
    return (
      <Link
        href={href}
        style={{ textDecoration: "none" }}
        onClick={onPress}
        passHref={true}
      >
        {buttonElement}
      </Link>
    );
  } else {
    return (
      <Pressable
        style={[{ maxWidth: "100%" }, style]}
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

export default Button;

const getStyles = (
  containerStyle: any,
  containerHoverStyle: any,
  textStyle: any,
  textHoverStyle: any
) =>
  StyleSheet.create({
    container: {
      textDecoration: "none",
      ...containerStyle,
      ":hover": { transition: "0.2s", ...containerHoverStyle },
      ":hover div": { transition: "0.2s", ...textHoverStyle }, // also change the text on hover
    },
    text: {
      textDecoration: "none",
      ...textStyle,
      // ":hover": { ...textHoverStyle },
    },
  });

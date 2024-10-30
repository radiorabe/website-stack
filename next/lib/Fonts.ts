import { TextStyle } from "@/lib/server-react-native";

const widthFactor = 1;

import localFont from "next/font/local";

// import { GTUltraBold } from "../assets/Fonts/GTUltra-Bold";
export const FontBold = localFont({
  src: "../assets/Fonts/GTUltra-Bold.otf",
  variable: "--font-bold",
});
export const FontRegular = localFont({
  src: "../assets/Fonts/GTUltraFine-Regular.otf",
  variable: "--font-regular",
});

const type = {
  regular: FontRegular.style.fontFamily,
  bold: FontBold.style.fontFamily,
};

const size: Record<string, number> = {
  h1: Math.floor(47 * widthFactor),
  h2: Math.floor(29 * widthFactor),
  h3: Math.floor(22 * widthFactor),
  h4: Math.floor(18 * widthFactor),
  text: Math.floor(18 * widthFactor),
  textSmall: Math.floor(12 * widthFactor),
  textTiny: Math.floor(9 * widthFactor),
  letterSpacing: Math.floor(1 * widthFactor),
};

export const style: Record<string, TextStyle> = {
  h1: {
    fontFamily: type.bold,
    fontSize: size.h1,
    // lineHeight: 1.2,
    // letterSpacing: 0,
  },
  h2: {
    fontFamily: type.bold,
    fontSize: size.h2,
    // lineHeight: 1.4,
    // letterSpacing: 0,
  },
  h3: {
    fontFamily: type.bold,
    fontSize: size.h3,
    // lineHeight: 1.4,
    // letterSpacing: 0,
  },
  h4: {
    fontFamily: type.bold,
    fontSize: size.h4,
    // lineHeight: 1.4,
    // letterSpacing: 0,
  },
  quote: {
    fontFamily: type.bold,
    fontSize: size.h2,
    lineHeight: 35,
  },

  text: {
    fontFamily: type.regular,
    fontSize: size.medium,
    lineHeight: 20,
    letterSpacing: 0,
  },
  TTtext: {
    fontFamily: type.regular,
    fontSize: size.medium,
    lineHeight: 1.4,
    // letterSpacing: 0,
  },

  textLink: {
    fontFamily: type.bold,
    fontSize: size.medium,
    lineHeight: 20,
    letterSpacing: 0,
  },

  TTtextLink: {
    fontFamily: type.bold,
    fontSize: size.medium,
    lineHeight: 20,
    letterSpacing: 0,
  },

  textSmall: {
    fontFamily: type.regular,
    fontSize: size.small,
    lineHeight: 14,
    letterSpacing: size.letterSpacing,
  },

  TTtextSmall: {
    fontFamily: type.regular,
    fontSize: size.small,
    lineHeight: 1.4,
    letterSpacing: size.letterSpacing,
  },

  button: {
    fontFamily: type.regular,
    fontSize: size.small,
    lineHeight: 18,
    letterSpacing: 0,
  },
  navigation: {
    fontFamily: type.bold,
    fontSize: size.text,
    fontWeight: "100",
  },
  navigationText: {
    fontFamily: type.regular,
    fontSize: size.text,
    fontWeight: "100",
  },

  footer: {
    fontFamily: type.bold,
    fontSize: size.textSmall,
    fontWeight: "100",
  },
};

export default {
  type,
  size,
  style,
};

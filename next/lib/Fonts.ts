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
    lineHeight: 56.4,
    // letterSpacing: 0,
    fontFeatureSettings: '"tnum" on',
    "@media (max-width: 910px)": {
      fontSize: 42,
      lineHeight: 50.4,
    },
  },
  TTh1: {
    fontFamily: type.bold,
    fontSize: size.h1,
    // lineHeight: 1.2,
    // letterSpacing: 0,
    fontFeatureSettings: '"tnum" on',
    "@media (max-width: 910px)": {
      fontSize: 42,
      // lineHeight: 50.4,
    },
  },
  h2: {
    fontFamily: type.bold,
    fontSize: size.h2,
    lineHeight: 34.8,
    fontFeatureSettings: '"tnum" on',
    "@media (max-width: 910px)": {
      fontSize: 26,
      lineHeight: 31.2,
    },
  },
  TTh2: {
    fontFamily: type.bold,
    fontSize: size.h2,
    lineHeight: 1.4,
    fontFeatureSettings: '"tnum" on',
    "@media (max-width: 910px)": {
      fontSize: 26,
      lineHeight: 1.2,
    },
  },
  h3: {
    fontFamily: type.bold,
    fontSize: size.h3,
    // lineHeight: 1.4,
    // letterSpacing: 0,
    fontFeatureSettings: '"tnum" on',
  },
  TTh3: {
    fontFamily: type.bold,
    fontSize: size.h3,
    // lineHeight: 1.4,
    // letterSpacing: 0,
    fontFeatureSettings: '"tnum" on',
  },
  h4: {
    fontFamily: type.bold,
    fontSize: size.h4,
    // lineHeight: 1.4,
    // letterSpacing: 0,
    fontFeatureSettings: '"tnum" on',
    "@media (max-width: 910px)": {
      fontSize: 16,
      lineHeight: 22.4,
    },
  },
  TTh4: {
    fontFamily: type.bold,
    fontSize: size.h4,
    lineHeight: 1.4,
    // letterSpacing: 0,
    fontFeatureSettings: '"tnum" on',
    "@media (max-width: 910px)": {
      fontSize: 16,
      lineHeight: 1.2,
    },
  },
  quote: {
    fontFamily: type.bold,
    fontSize: size.h2,
    lineHeight: 35,
    fontFeatureSettings: '"tnum" on',
  },

  text: {
    fontFamily: type.regular,
    fontSize: size.text,
    lineHeight: 20,
    letterSpacing: 0,
    fontFeatureSettings: '"tnum" on',
    "@media (max-width: 910px)": {
      fontSize: 16,
      lineHeight: 22.4,
    },
  },
  TTtext: {
    fontFamily: type.regular,
    fontSize: size.text,
    lineHeight: 1.4,
    // letterSpacing: 0,
    fontFeatureSettings: '"tnum" on',
    "@media (max-width: 910px)": {
      fontSize: 16,
      lineHeight: 1.2,
    },
  },

  textLink: {
    fontFamily: type.bold,
    fontSize: size.text,
    lineHeight: 20,
    letterSpacing: 0,
    fontFeatureSettings: '"tnum" on',
    "@media (max-width: 910px)": {
      fontSize: 16,
      lineHeight: 22.4,
    },
  },

  TTtextLink: {
    fontFamily: type.bold,
    fontSize: size.text,
    lineHeight: 1.4,
    letterSpacing: 0,
    fontFeatureSettings: '"tnum" on',
    "@media (max-width: 910px)": {
      fontSize: 16,
      lineHeight: 1.2,
    },
  },

  textSmall: {
    fontFamily: type.regular,
    fontSize: size.small,
    lineHeight: 14,
    letterSpacing: size.letterSpacing,
    fontFeatureSettings: '"tnum" on',
    "@media (max-width: 910px)": {
      fontSize: 10.5,
      lineHeight: 14.7,
    },
  },

  TTtextSmall: {
    fontFamily: type.regular,
    fontSize: size.small,
    lineHeight: 1.4,
    letterSpacing: size.letterSpacing,
    fontFeatureSettings: '"tnum" on',
    "@media (max-width: 910px)": {
      fontSize: 10.5,
      lineHeight: 1.2,
    },
  },

  button: {
    fontFamily: type.regular,
    fontSize: size.small,
    lineHeight: 18,
    letterSpacing: 0,
    fontFeatureSettings: '"tnum" on',
  },
  navigation: {
    fontFamily: type.bold,
    fontSize: size.text,
    fontWeight: "100",
    fontFeatureSettings: '"tnum" on',
  },
  navigationText: {
    fontFamily: type.regular,
    fontSize: size.text,
    fontWeight: "100",
    fontFeatureSettings: '"tnum" on',
  },

  footer: {
    fontFamily: type.bold,
    fontSize: size.textSmall,
    fontWeight: "100",
    fontFeatureSettings: '"tnum" on',
  },
};

export default {
  type,
  size,
  style,
};

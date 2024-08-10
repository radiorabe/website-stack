import { Dimensions } from "react-native-web";

const { width, height } = Dimensions.get("window");

const widthFactor = Math.min(width / 375, 1);

const x = Math.floor(10 * widthFactor);
const gridSpacing = 24;
// const baseMargin = Math.floor(10 * widthFactor);
const baseMargin = 12;

// Used via Metrics.baseMargin
const metrics = {
  navBarHeight: 65,
  halfBaseMargin: baseMargin / 2,
  baseMargin,
  doubleBaseMargin: baseMargin * 2,
  tripleBaseMargin: baseMargin * 3,
  quadBaseMargin: baseMargin * 4,
  gridSpacing,
  screenWidth: width,
  screenHeight: height,
};

export default metrics;

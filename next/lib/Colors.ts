export default {
  darkGreen: "#00635F",
  green: "#00C9BF",
  lightGreen: "#E3F9F8",
  hoverGreen: "#408a87",
  red: "#FF686B",
  black: "#000",
  white: "#fff",
  whiteTransparent: "#ffffffaa",
  gray: "#aaa",
};

function shadeColor(color, percent) {
  var R = parseInt(color.substring(1, 3), 16);
  var G = parseInt(color.substring(3, 5), 16);
  var B = parseInt(color.substring(5, 7), 16);

  R = parseInt((R * (100 + percent)) / 100);
  G = parseInt((G * (100 + percent)) / 100);
  B = parseInt((B * (100 + percent)) / 100);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  R = Math.round(R);
  G = Math.round(G);
  B = Math.round(B);

  var RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
  var GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
  var BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);

  return "#" + RR + GG + BB;
}

function translucentColor(color, percent) {
  var A = parseInt((255 * percent) / 100);

  A = A < 255 ? A : 255;

  A = Math.round(A);

  var AA = A.toString(16).length == 1 ? "0" + A.toString(16) : A.toString(16);

  return color + AA;
}

export { shadeColor, translucentColor };

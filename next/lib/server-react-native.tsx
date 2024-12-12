"use client";

import {
  Text,
  Pressable,
  View,
  TextStyle,
  Linking,
  StyleSheet,
} from "react-native";

// function View({ style, children, ...otherProps }) {
//   let newStyle = Object.assign(
//     {},
//     { display: "flex", flexDirection: "column" },
//     style
//   );

//   if (newStyle.paddingVertical) {
//     newStyle.paddingTop = newStyle.paddingTop
//       ? newStyle.paddingTop
//       : newStyle.paddingVertical;
//     newStyle.paddingBottom = newStyle.paddingBottom
//       ? newStyle.paddingBottom
//       : newStyle.paddingVertical;
//   }

//   if (newStyle.paddingHorizontal) {
//     newStyle.paddingLeft = newStyle.paddingLeft
//       ? newStyle.paddingLeft
//       : newStyle.paddingHorizontal;
//     newStyle.paddingRight = newStyle.paddingRight
//       ? newStyle.paddingRight
//       : newStyle.paddingHorizontal;
//   }

//   return (
//     <div
//       {...otherProps}
//       style={newStyle}
//       onClick={otherProps.onPress ? otherProps.onPress : undefined}
//     >
//       {children}
//     </div>
//   );
// }

// const View = ({ style, children, ...otherProps }) =>
//   <div style={Object.assign({ marginRight: "1.5em" }, style)} {...otherProps}>
//       {children}
//   </div>;

export { Text, Pressable, View, TextStyle, Linking, StyleSheet };

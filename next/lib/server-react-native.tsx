"use client";

import { Text, Pressable, View, TextStyle, Linking } from "react-native";

// function View(props) {
//   let style = Object.assign(
//     { display: "flex", flexDirection: "column" },
//     props.style
//   );

//   if (style.paddingVertical) {
//     style.paddingTop = style.paddingTop
//       ? style.paddingTop
//       : style.paddingVertical;
//     style.paddingBottom = style.paddingBottom
//       ? style.paddingBottom
//       : style.paddingVertical;
//   }

//   if (style.paddingHorizontal) {
//     style.paddingLeft = style.paddingLeft
//       ? style.paddingLeft
//       : style.paddingHorizontal;
//     style.paddingRight = style.paddingRight
//       ? style.paddingRight
//       : style.paddingHorizontal;
//   }

//   return (
//     <div
//       {...props}
//       style={style}
//       onClick={props.onPress ? props.onPress : undefined}
//     ></div>
//   );
// }

export { Text, Pressable, View, TextStyle, Linking };

"use client";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import Form from "./Form";
import StyleSheet from "react-native-media-query";
import Button from "@/components/Button";
import BreadCrump from "@/components/BreadCrumb";

export default function BestellungPage({
  product,
  selectOptions,
  defaultValue,
  searchParams,
}) {
  return (
    <View style={styles.outerContainer} dataSet={{ media: ids.outerContainer }}>
      <View style={styles.container} dataSet={{ media: ids.container }}>
        <BreadCrump
          // style={{ marginBottom: Metrics.doubleBaseMargin }}
          label1={"Mitglied werden"}
          label2={"Check-out"}
        ></BreadCrump>

        {/* {product && (
          <View
            style={{
              paddingBottom: Metrics.doubleBaseMargin,
            }}
          >
            <Text
              style={{
                ...Fonts.style.text,
                textAlign: "center",
              }}
            >
              <div>{"Bestellung: " + product.name}</div>
            </Text>
          </View>
        )} */}
        <Form
          type={searchParams.type}
          id={searchParams.id}
          options={selectOptions}
          defaultValue={defaultValue}
        ></Form>
      </View>
    </View>
  );
}

const { styles, ids } = StyleSheet.create({
  outerContainer: {
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
  },
  container: {
    width: "74vw",
    alignSelf: "center",
    paddingTop: Metrics.tripleBaseMargin,
    paddingBottom: Metrics.tripleBaseMargin,
    "@media (max-width: 910px)": {
      width: "90vw",
    },
  },
});

//   return (
//     <View dataSet={{ media: ids.container }} style={styles.container}>
//       {/* <View dataSet={{ media: ids.postContainer }} style={styles.postContainer}> */}
//       <View
//         dataSet={{ media: ids.postInfoContainer }}
//         style={styles.postInfoContainer}
//       >
//         <View style={{ maxWidth: "100%" }}>
//           <Button href={"/mitglied-werden"} label={"Mitglied werden"}></Button>
//         </View>
//         <View style={{ width: Metrics.doubleBaseMargin }}></View>
//       </View>
//       {/* </View> */}
//       {product && (
//         <View
//           style={{
//             alignItems: "center",
//             paddingBottom: Metrics.doubleBaseMargin,
//           }}
//         >
//           <Text
//             style={{
//               ...Fonts.style.text,
//               textAlign: "center",
//             }}
//           >
//             <div>{"Bestellung:"}</div>
//             <div>{product.name}</div>
//           </Text>
//         </View>
//       )}
//       <Form
//         type={searchParams.type}
//         id={searchParams.id}
//         options={selectOptions}
//         defaultValue={defaultValue}
//       ></Form>
//     </View>
//   );
// }

// const { styles, ids } = StyleSheet.create({
//   // container: {
//   //   width: "100%",
//   //   paddingTop: Metrics.tripleBaseMargin,
//   //   paddingBottom: Metrics.tripleBaseMargin,
//   //   "@media (max-width: 910px)": {
//   //     paddingTop: Metrics.quadBaseMargin,
//   //     paddingBottom: Metrics.quadBaseMargin,
//   //   },
//   // },
//   container: {
//     width: "100%",
//     alignItems: "center",
//     alignSelf: "center",
//   },
//   postContainer: {
//     width: "75%",
//     "@media (max-width: 910px)": {
//       width: "90%",
//     },
//   },
// });

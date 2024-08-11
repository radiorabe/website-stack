// LinkComponent.js

import React from "react";
import { View, Platform, TouchableOpacity } from "react-native";
let Link = null;
if (Platform.OS === "web") {
  Link = require("next/link").default;
}

const LinkComponent = (props) => {
  if (Platform.OS === "web") {
    // it will be used for web
    return (
      <Link href={props.href} style={{ textDecoration: "none" }}>
        <View style={props.style} dataSet={props.dataSet}>
          {props.children}
        </View>
      </Link>
    );
  } else {
    // it will be used for iOS, Android
    return (
      <TouchableOpacity style={props.style} onPress={props.onPress}>
        {props.children}
      </TouchableOpacity>
    );
  }
};

export default LinkComponent;

// use LinkComponent like below

// const id = 265;
// const openJobDetails = () => navigation.navigate("JobDetails", params);
// <LinkComponent
//      href={`/jobs/${id}`}
//      onPress={openJobDetails}
//      style={styles.container}
//    >
//  <Text>Open a job</Text>
// </LinkComponent>

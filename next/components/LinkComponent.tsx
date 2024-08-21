// LinkComponent.js

import { View } from "@/lib/server-react-native";
import Link from "next/link";

const LinkComponent = (props) => {
  return (
    <Link
      href={props.href}
      style={{ textDecoration: "none" }}
      onClick={props.onPress}
    >
      <View style={props.style} dataSet={props.dataSet}>
        {props.children}
      </View>
    </Link>
  );
};

export default LinkComponent;

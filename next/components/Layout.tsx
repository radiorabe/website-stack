import React, { useState } from "react";
import { View, Dimensions, TextInput } from "react-native";
import Navigation from "./Navigation";
// import Footer from './Footer';
// import "../../Lib/main.css";
import { withMedia, IMedia } from "../hocs/withMedia";
// import "babel-polyfill"; // This is necessarey for async await syntax
import { hasWindow } from "../lib/hasWindow";
import Metrics from "../lib/Metrics";

export interface Props extends IMedia {
  showDownladPDF?: boolean;
  hideBuyButton?: boolean;
  t(key: any): string;
  language: string;
  location: any;
}

export interface State {
  fixedDownloadButton: boolean;
  sidebarOpen: boolean;
  windowHeight: number;
}

const Layout: React.FC<Props> = (props) => {
  const { media } = props;
  // const { sidebarOpen } = this.state;
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <View style={{ width: "100%" }}>
      {/* <Menu
        right
        width={250}
        styles={burgerStyles}
        isOpen={showSidebar}
        onStateChange={(state) => setShowSidebar(state.isOpen)}
        customBurgerIcon={<Burger />}
      >
        <CustomSideBar
          activePath={path}
          onPressClose={() => {
            setShowSidebar(false);
          }}
        />
      </Menu> */}
      <View
        style={{ position: "absolute", left: 0, right: 0, top: 0, zIndex: 1 }}
      >
        <Navigation />
      </View>

      <View
        style={{
          width: "100%",
          alignItems: "center",
          marginTop: Metrics.navBarHeight,
        }}
      >
        {props.children}
      </View>

      {/* <Footer></Footer> */}
    </View>
  );
};

export default withMedia(Layout);

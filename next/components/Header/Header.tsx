"use client";
import { Pressable, Text, View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";

import IconArrowDown from "@/assets/svg/IconArrowDown";
import NavRabe from "@/assets/svg/NavRabe";
import NavRabeLargeText from "@/assets/svg/NavRabeLargeText";
import NavRabeMediumText from "@/assets/svg/NavRabeMediumText";
import NavRabeSmallText from "@/assets/svg/NavRabeSmallText";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { PressableState } from "@/lib/Types";
import { useClickOutside } from "@/lib/useClickOutside";
import useResponsive from "@/lib/useResponsisve";
import { usePathname, useRouter } from "next/navigation";
import { ReactElement, useRef, useState } from "react";
import AspectRatio from "react-aspect-ratio";
import LinkComponent from "../LinkComponent";
import AudioRabePlayer from "./AudioRabePlayer";
import BurgerIcon from "./BurgerIcon";

function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { isDesktop, isMobile, isClient } = useResponsive();

  let [showDropdown, setShowDropdown] = useState(false);
  const dropDownRef = useRef("dropdown");
  const menuRef = useRef("menu");
  useClickOutside([dropDownRef, menuRef], () => {
    setShowDropdown(false);
  });

  return (
    <View style={styles.container} dataSet={{ media: ids.container }}>
      <View style={styles.innerContainer}>
        <Pressable
          style={styles.navBarRabeLogoContainer}
          dataSet={{ media: ids.navBarRabeLogoContainer }}
          onPress={() => {
            router.push("/");
          }}
        >
          {({ pressed, hovered }: PressableState): ReactElement => {
            return (
              <>
                <View
                  style={{
                    height: "100%",
                    aspectRatio: 1.6,
                    justifyContent: "flex-end",
                    // backgroundColor: "green",
                  }}
                >
                  <NavRabe
                    style={{
                      width: "80%",
                      height: "80%",
                    }}
                    color={hovered ? Colors.green : Colors.darkGreen}
                  ></NavRabe>
                </View>

                <View
                  style={{
                    height: "100%",
                    // flexGrow: 1,
                    alignItems: "center",
                    flexDirection: "row",
                    // backgroundColor: "blue",
                  }}
                >
                  <View
                    style={styles.navBarSmallContainer}
                    dataSet={{ media: ids.navBarSmallContainer }}
                  >
                    <NavRabeSmallText
                      color={hovered ? Colors.green : Colors.darkGreen}
                    ></NavRabeSmallText>
                  </View>

                  <View
                    style={styles.navBarMediumContainer}
                    dataSet={{ media: ids.navBarMediumContainer }}
                  >
                    <NavRabeMediumText
                      color={hovered ? Colors.green : Colors.darkGreen}
                    ></NavRabeMediumText>
                  </View>

                  <View
                    style={styles.navBarLargeContainer}
                    dataSet={{ media: ids.navBarLargeContainer }}
                  >
                    <NavRabeLargeText
                      color={hovered ? Colors.green : Colors.darkGreen}
                    ></NavRabeLargeText>
                  </View>
                </View>
              </>
            );
          }}
        </Pressable>
        {/* </View> */}
        {!isMobile && (
          <View style={styles.navItemsContainer}>
            <View style={styles.navItem}>
              <LinkComponent href={`/sendungen`}>
                <Text
                  style={[styles.rabeLogo]}
                  dataSet={{ media: ids.rabeLogo }}
                >
                  Sendungen
                </Text>
              </LinkComponent>
            </View>
            <View>
              <Pressable
                ref={menuRef}
                style={{ height: "100%" }}
                onPress={() => setShowDropdown(!showDropdown)}
              >
                {({
                  pressed,
                  hovered,
                  focused,
                }: PressableState): ReactElement => {
                  return (
                    <View style={[styles.navItem]}>
                      <View
                        style={{
                          flexDirection: "row",
                          height: "100%",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={[
                            styles.rabeLogo,
                            { paddingRight: 4 },
                            hovered && { color: Colors.green },
                          ]}
                          dataSet={{ media: ids.rabeLogo }}
                        >
                          Über RaBe
                        </Text>
                        <View
                          style={[
                            showDropdown && { transform: "rotate(180deg)" },
                          ]}
                        >
                          <IconArrowDown
                            color={hovered ? Colors.green : Colors.darkGreen}
                          ></IconArrowDown>
                        </View>
                      </View>
                    </View>
                  );
                }}
              </Pressable>
              {showDropdown && (
                <View
                  ref={dropDownRef}
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: "6.8vw",
                    backgroundColor: Colors.lightGreen,
                    paddingHorizontal: Metrics.baseMargin,
                    paddingVertical: Metrics.halfBaseMargin,
                    borderRadius: 9,
                  }}
                >
                  <LinkComponent
                    href={`/programm`}
                    onPress={() => setShowDropdown(!showDropdown)}
                  >
                    <Text
                      style={styles.dropDownItem}
                      dataSet={{ media: ids.rabeLogo }}
                    >
                      Programm
                    </Text>
                  </LinkComponent>
                  <LinkComponent
                    href={`/mitmachen`}
                    onPress={() => setShowDropdown(!showDropdown)}
                  >
                    <Text
                      style={styles.dropDownItem}
                      dataSet={{ media: ids.rabeLogo }}
                    >
                      Mitmachen
                    </Text>
                  </LinkComponent>
                  <LinkComponent
                    href={`/kontakt`}
                    onPress={() => setShowDropdown(!showDropdown)}
                  >
                    <Text
                      style={styles.dropDownItem}
                      dataSet={{ media: ids.rabeLogo }}
                    >
                      Kontakt
                    </Text>
                  </LinkComponent>
                  <LinkComponent
                    href={`/geschichte`}
                    onPress={() => setShowDropdown(!showDropdown)}
                  >
                    <Text
                      style={styles.dropDownItem}
                      dataSet={{ media: ids.rabeLogo }}
                    >
                      Geschichte
                    </Text>
                  </LinkComponent>
                  <LinkComponent
                    href={`/team`}
                    onPress={() => setShowDropdown(!showDropdown)}
                  >
                    <Text
                      style={styles.dropDownItem}
                      dataSet={{ media: ids.rabeLogo }}
                    >
                      Team
                    </Text>
                  </LinkComponent>
                  <LinkComponent
                    href={`/praktikum`}
                    onPress={() => setShowDropdown(!showDropdown)}
                  >
                    <Text
                      style={styles.dropDownItem}
                      dataSet={{ media: ids.rabeLogo }}
                    >
                      Praktikum
                    </Text>
                  </LinkComponent>
                  <LinkComponent
                    href={`/kurse`}
                    onPress={() => setShowDropdown(!showDropdown)}
                  >
                    <Text
                      style={styles.dropDownItem}
                      dataSet={{ media: ids.rabeLogo }}
                    >
                      Kurse
                    </Text>
                  </LinkComponent>
                  <LinkComponent
                    href={`/empfangen`}
                    onPress={() => setShowDropdown(!showDropdown)}
                  >
                    <Text
                      style={styles.dropDownItem}
                      dataSet={{ media: ids.rabeLogo }}
                    >
                      Empfangen
                    </Text>
                  </LinkComponent>
                </View>
              )}
            </View>

            <View style={styles.navItem}>
              <LinkComponent href={`/mitglied-werden`}>
                <Text
                  style={styles.rabeLogoBorder}
                  dataSet={{ media: ids.rabeLogoBorder }}
                >
                  Mitglied werden
                </Text>
              </LinkComponent>
            </View>
          </View>
        )}
        <View
          style={styles.audioPlayerContainer}
          dataSet={{ media: ids.audioPlayerContainer }}
        >
          <AudioRabePlayer></AudioRabePlayer>
        </View>
        {isClient && isMobile && (
          <View
            style={{
              height: "100%",
              backgroundColor: Colors.darkGreen,
              // backgroundColor: Colors.black,
              justifyContent: "center",
              paddingRight: Metrics.tripleBaseMargin,
            }}
          >
            <AspectRatio
              ratio="1/1"
              style={{
                width: "5vw",
                // backgroundColor: "white",
              }}
            >
              <Pressable
                style={{
                  overflow: "hidden",
                  height: "100%",
                }}
                onPress={() => {
                  // Linking.openURL(url + "?download");
                }}
              >
                {({
                  pressed,
                  hovered,
                  focused,
                }: PressableState): ReactElement => {
                  // return <Burger></Burger>;
                  return (
                    <BurgerIcon
                      color={hovered ? Colors.green : Colors.lightGreen}
                      height="100%"
                      width="100%"
                    ></BurgerIcon>
                  );
                }}
              </Pressable>
            </AspectRatio>
          </View>
        )}
      </View>
    </View>
  );
}

export default Header;

const { ids, styles } = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.lightGreen,
    width: "100%",
    height: "5vw",
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    position: "fixed",
    zIndex: 999,
    borderBottomWidth: 1,
    borderColor: Colors.lightGreen,
    "@media (max-width: 910px)": {
      height: "13vw",
    },
  },
  innerContainer: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    // aspectRatio: 100 / 5,
    alignItems: "center",
    justifyContent: "space-between",
    // paddingHorizontal: Metrics.baseMargin,
  },
  navItemsContainer: {
    flexDirection: "row",
    height: "100%",
  },
  link: {
    color: "blue",
  },

  textContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  rabeLogo: {
    ...Fonts.style.navigation,
    fontSize: 18,
    color: Colors.darkGreen,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ":hover": {
      color: Colors.green,
      borderColor: Colors.green,
    },
  },
  dropDownItem: {
    ...Fonts.style.navigation,
    fontSize: 18,
    color: Colors.darkGreen,
    paddingVertical: Metrics.halfHalfBaseMargin,
  },
  rabeLogoBorder: {
    ...Fonts.style.navigation,
    fontSize: 18,
    color: Colors.darkGreen,
    borderWidth: 1,
    borderColor: Colors.darkGreen,
    padding: 7,
    borderRadius: 10,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ":hover": {
      color: Colors.green,
      borderColor: Colors.green,
    },
  },
  navItem: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    paddingHorizontal: Metrics.baseMargin,
    color: Colors.darkGreen,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ":hover": {
      color: Colors.green,
    },
  },
  navBarRabeLogoContainer: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    minWidth: "25%",
    flexGrow: 1,
    marginLeft: Metrics.tripleBaseMargin,
  },
  navBarSmallContainer: {
    display: "none",
    "@media (max-width: 910px)": {
      display: "flex",
    },
  },
  navBarMediumContainer: {
    display: "none",
    "@media (min-width: 911px) and (max-width:1799px)": {
      display: "flex",
    },
  },
  navBarLargeContainer: {
    display: "none",
    "@media (min-width: 1800px)": {
      display: "flex",
      paddingRight: 12,
    },
  },
  audioPlayerContainer: {
    minWidth: "9vw",
    maxWidth: "25vw",
    flexGrow: 1,
    height: "100%",
    backgroundColor: Colors.darkGreen,
    justifyContent: "center",
    paddingHorizontal: Metrics.doubleBaseMargin,
    marginLeft: Metrics.baseMargin,
    "@media (max-width: 910px)": {
      flexGrow: 0,
      paddingHorizontal: Metrics.tripleBaseMargin,
    },
  },
});

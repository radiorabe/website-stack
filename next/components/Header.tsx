"use client";
import { Pressable, Text, View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";

import { useClickOutside } from "@/lib/useClickOutside";
import { usePathname, useRouter } from "next/navigation";
import { ReactElement, useEffect, useRef, useState } from "react";
import IconArrowDown from "@/assets/svg/IconArrowDown";
import IconArrowUp from "@/assets/svg/IconArrowUp";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import AudioRabePlayer from "./AudioRabePlayer";
import LinkComponent from "./LinkComponent";
import NavRabe from "@/assets/svg/NavRabe";
import Link from "next/link";
import NavRabeLargeText from "@/assets/svg/NavRabeLargeText";
import NavRabeMediumText from "@/assets/svg/NavRabeMediumText";
import NavRabeSmallText from "@/assets/svg/NavRabeSmallText";
export type PressableState = Readonly<{
  pressed?: boolean;
  hovered?: boolean;
  focused?: boolean;
}>;

const { ids, styles } = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.lightGreen,
    width: "100%",
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    position: "fixed",
    zIndex: 999,
  },
  innerContainer: {
    flexDirection: "row",
    width: "100%",
    aspectRatio: 100 / 5,
    alignItems: "center",
    justifyContent: "space-between",
    // paddingHorizontal: Metrics.baseMargin,
  },
  navItemsContainer: {
    flexDirection: "row",
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
    paddingVertical: Metrics.halfBaseMargin,
  },
  rabeLogoBorder: {
    ...Fonts.style.navigation,
    fontSize: 18,
    color: Colors.darkGreen,
    borderWidth: 1,
    borderColor: Colors.darkGreen,
    padding: Metrics.halfBaseMargin,
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
    height: Metrics.navBarHeight,
    paddingHorizontal: Metrics.baseMargin,
    color: Colors.darkGreen,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ":hover": {
      color: Colors.green,
    },
  },
  // navItemBorder: {
  //   borderWidth: 1,
  //   borderColor: Colors.darkGreen,
  //   padding: Metrics.halfBaseMargin,
  //   borderRadius: 10,
  //   ":hover": {
  //     borderColor: Colors.green,
  //   },
  // },
});

function Header() {
  const pathname = usePathname();
  const router = useRouter();

  let [showDropdown, setShowDropdown] = useState(false);
  const dropDownRef = useRef("dropdown");
  const menuRef = useRef("menu");
  useClickOutside([dropDownRef, menuRef], () => {
    setShowDropdown(false);
  });

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {/* <View> */}
        <Link
          href={`/`}
          style={{
            height: "100%",
            textDecoration: "none",
            minWidth: "25%",
            flexGrow: 1,
          }}
        >
          <Pressable
            style={{
              height: "100%",
              flexDirection: "row",
              alignItems: "center",
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
                      flexGrow: 1,
                      justifyContent: "center",
                      // backgroundColor: "blue",
                    }}
                  >
                    {/* <NavRabeSmallText
                      style={{
                        width: "100%",
                        height: 12,
                      }}
                      color={hovered ? Colors.green : Colors.darkGreen}
                    ></NavRabeSmallText> */}
                    <NavRabeMediumText
                      style={{
                        width: "100%",
                        height: 14,
                      }}
                      color={hovered ? Colors.green : Colors.darkGreen}
                    ></NavRabeMediumText>
                  </View>
                </>
              );
            }}
          </Pressable>
        </Link>

        {/* </View> */}

        <View style={styles.navItemsContainer}>
          <View style={styles.navItem}>
            <LinkComponent href={`/sendungen`}>
              <Text style={[styles.rabeLogo]} dataSet={{ media: ids.rabeLogo }}>
                Sendungen
              </Text>
            </LinkComponent>
          </View>
          <View>
            <Pressable
              ref={menuRef}
              // style={{ backgroundColor: "yellow" }}
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
                      style={{ flexDirection: "row", alignItems: "center" }}
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
                  top: Metrics.navBarHeight + Metrics.baseMargin,
                  backgroundColor: Colors.lightGreen,
                  padding: Metrics.baseMargin,
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

          {/* </View> */}
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
          <View
            style={{
              width: 200,
              height: Metrics.navBarHeight,
              backgroundColor: Colors.darkGreen,
              justifyContent: "center",
              paddingHorizontal: Metrics.doubleBaseMargin,
              marginLeft: Metrics.baseMargin,
            }}
          >
            <AudioRabePlayer></AudioRabePlayer>
            {/* </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </View>
  );
}

export default Header;

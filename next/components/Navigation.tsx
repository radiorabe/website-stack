"use client";
import { StyleSheet, Text, View } from "react-native-web";
import Fonts from "../themes/Fonts";
import Metrics from "../themes/Metrics";
import Colors from "../themes/Colors";
import NavRabe from "../assets/SVGIcons/Nav Rabe.svg";
import Image from "next/image";
import { withMedia } from "../hocs/withMedia";
import Hoverable from "./Hoverable";
import { usePathname } from "next/navigation";
import LinkComponent from "./LinkComponent";
import { useRouter } from "next/navigation";
import Playbutton from "./Playbutton";
import Pausebutton from "./Pausebutton";

const styles = StyleSheet.create({
  container: {
    height: Metrics.navBarHeight,
    alignItems: "center",
    backgroundColor: Colors.lightGreen,
    width: "100%",
  },
  innerContainer: {
    flexDirection: "row",
    width: "100%",
    maxWidth: 1920,
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
  },
  navItem: {
    flexDirection: "row",
    alignItems: "center",
    height: Metrics.navBarHeight,
    paddingHorizontal: Metrics.baseMargin,
  },
});

function Navigation(props) {
  const pathname = usePathname();
  const router = useRouter();

  console.log("pathname:", pathname);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Hoverable>
          {(hover) => (
            <View>
              <LinkComponent
                href={`/`}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: Metrics.navBarHeight,
                }}
              >
                <Image
                  src="/svgs/Nav Rabe.svg"
                  width={80}
                  height={80}
                  style={{
                    transform: "translateX(0) translateY(-10px)",
                    paddingRight: Metrics.doubleBaseMargin,
                    paddingLeft: Metrics.baseMargin,
                  }}
                  alt="Picture of the author"
                />
                <Text
                  style={[styles.rabeLogo, hover && { color: Colors.green }]}
                >
                  RADIO BERN
                </Text>
              </LinkComponent>
            </View>
          )}
        </Hoverable>
        <View style={styles.navItemsContainer}>
          <Hoverable>
            {(hover) => (
              <View style={styles.navItem}>
                <LinkComponent href={`/sendungen`}>
                  <Text
                    style={[styles.rabeLogo, hover && { color: Colors.green }]}
                  >
                    Sendungen
                  </Text>
                </LinkComponent>
              </View>
            )}
          </Hoverable>

          <Hoverable>
            {(hover) => (
              <View style={styles.navItem}>
                <LinkComponent href={`/ueber-rabe`}>
                  <Text
                    style={[styles.rabeLogo, hover && { color: Colors.green }]}
                  >
                    Über RaBe
                  </Text>
                </LinkComponent>
              </View>
            )}
          </Hoverable>

          <Hoverable>
            {(hover) => (
              <View style={styles.navItem}>
                <LinkComponent
                  href={`/mitglied-werden`}
                  style={{
                    borderWidth: 1,
                    borderColor: hover ? Colors.green : Colors.darkGreen,
                    padding: Metrics.halfBaseMargin,
                    borderRadius: 10,
                  }}
                >
                  <Text
                    style={[styles.rabeLogo, hover && { color: Colors.green }]}
                  >
                    Mitglied werden
                  </Text>
                </LinkComponent>
              </View>
            )}
          </Hoverable>
          <View
            style={{
              width: 200,
              height: Metrics.navBarHeight,
              backgroundColor: Colors.darkGreen,
              justifyContent: "center",
              paddingHorizontal: Metrics.baseMargin,
              marginLeft: Metrics.baseMargin,
            }}
          >
            <Playbutton color={Colors.lightGreen} scale={0.6}></Playbutton>
          </View>
        </View>
      </View>
    </View>
  );
}

export default withMedia(Navigation);

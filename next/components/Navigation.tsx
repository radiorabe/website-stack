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
  },
  link: {
    color: "blue",
  },
  textContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  rabeLogo: {
    ...Fonts.style.logo,
    fontSize: 18,
    letterSpacing: 8,
    textDecoration: "none",
  },
});

function Navigation(props) {
  const pathname = usePathname();

  console.log("pathname:", pathname);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Hoverable>
          {(hover) => (
            <View
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
              <Text style={[styles.rabeLogo, hover && { color: Colors.green }]}>
                RADIO BERN
              </Text>
            </View>
          )}
        </Hoverable>
        <Hoverable>
          {(hover) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                height: Metrics.navBarHeight,
              }}
            >
              {/* <Link
                style={{
                  ...Fonts.style.logo,
                  fontSize: 18,
                  letterSpacing: 8,
                  textDecoration: "none",
                  color: hover ? Colors.green : Colors.darkGreen,
                }}
                href="/sendungen"
              >
                Sendungen
              </Link> */}
              <LinkComponent
                href={`/sendungen`}
                // onPress={openJobDetails}
                // style={styles.rabeLogo}
              >
                <Text
                  style={[styles.rabeLogo, hover && { color: Colors.green }]}
                >
                  Sendungen
                </Text>
              </LinkComponent>
            </View>
          )}
        </Hoverable>
        {/* <NavRabe></NavRabe> */}

        {/* <Text style={styles.rabeLogo}>RADIO BERN</Text>
      <Text style={styles.rabeLogo}>RADIO BERN</Text>
      <Text style={styles.rabeLogo}>RADIO BERN</Text> */}
      </View>
    </View>
  );
}

export default withMedia(Navigation);

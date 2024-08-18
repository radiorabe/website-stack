import type { Metadata } from "next";
import "./globals.css";
// import "normalize.css/normalize.css";
import Header from "../components/Header";
import { FontBold, FontRegular } from "../lib/Fonts";
import { AudioPlayerProvider } from "../context/audio-player-context";
import Footer from "../components/Footer";
import Metrics from "@/lib/Metrics";
require("moment/locale/de.js");

export const metadata: Metadata = {
  title: "Radio Bern - Das Berner Kulturradio",
  description: "Best Radio Ever!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AudioPlayerProvider>
        <body className={`${FontRegular.variable} ${FontBold.variable}`}>
          <div>
            <Header />
          </div>
          <div style={{ paddingTop: Metrics.navBarHeight }}>{children}</div>
          <div>
            <Footer />
          </div>
        </body>
      </AudioPlayerProvider>
    </html>
  );
}

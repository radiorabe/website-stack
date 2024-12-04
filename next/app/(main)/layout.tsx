import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { FontBold, FontRegular } from "@/lib/Fonts";
import { AudioPlayerProvider } from "@/context/audio-player-context";
import Footer from "@/components/Footer";
import Metrics from "@/lib/Metrics";
require("moment/locale/de.js");
import { draftMode } from "next/headers";

export const metadata: Metadata = {
  title: "Radio Bern - Das Berner Kulturradio",
  description: "Best Radio Ever!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled } = draftMode();

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <AudioPlayerProvider>
        <body className={`${FontRegular.variable} ${FontBold.variable}`}>
          {isEnabled && (
            <div
              style={{
                display: "flex",
                width: "100%",
                backgroundColor: "#ff7777",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                position: "fixed",
                height: 30,
                zIndex: 998,
              }}
            >
              <div style={{ paddingRight: Metrics.halfBaseMargin }}>
                Draft mode
              </div>
              <form method="POST" action="/api/draft">
                <button>End preview</button>
              </form>
            </div>
          )}
          {isEnabled && (
            <div
              style={{
                height: 30,
              }}
            ></div>
          )}
          <div>
            <Header />
          </div>

          <div style={{ width: "100%", aspectRatio: 100 / 5 }}></div>

          <div>{children}</div>
          <div>
            <Footer />
          </div>
        </body>
      </AudioPlayerProvider>
    </html>
  );
}

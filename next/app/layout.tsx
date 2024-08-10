import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import { regular } from "../lib/Fonts";
import { AudioPlayerProvider } from "../context/audio-player-context";
import Footer from "../components/Footer";
import RootHead from "../components/RootHead";

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
      <RootHead />
      <AudioPlayerProvider>
        <body className={regular.className}>
          <div>
            <Header />
          </div>
          {children}
          <div>
            <Footer />
          </div>
        </body>
      </AudioPlayerProvider>
    </html>
  );
}

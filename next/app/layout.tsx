import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import { regular } from "../lib/Fonts";
import { AudioPlayerProvider } from "../context/audio-player-context";
import Footer from "../components/Footer";

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
        <body className={regular.className}>
          <div>
            <Navigation />
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

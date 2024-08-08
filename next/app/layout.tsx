import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import { regular } from "../themes/Fonts";
import { AudioPlayerProvider } from "../context/audio-player-context";

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
        </body>
      </AudioPlayerProvider>
    </html>
  );
}

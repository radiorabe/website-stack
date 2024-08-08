import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import { regular } from "../themes/Fonts";

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
      <body className={regular.className}>
        <div>
          <Navigation />
        </div>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { FontBold, FontRegular } from "@/lib/Fonts";
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
      <body className={`${FontRegular.variable} ${FontBold.variable}`}>
        <div>{children}</div>
      </body>
    </html>
  );
}

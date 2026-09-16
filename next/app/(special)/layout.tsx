import type { Metadata } from "next";
import "./globals.css";
import { FontBold, FontRegular } from "@/lib/Fonts";
require("moment/locale/de.js");

// Safety net: no page may stay cached indefinitely.
//
// Content updates arrive instantly via revalidateTag() from the Directus
// "Rerender NextJS Collections" flow, so this is not the update mechanism - it is
// the upper bound on how long a page can stay wrong if that webhook is missed or
// a render went bad. Without it, a prerendered page is held with
// s-maxage=31536000 and nothing but a Directus edit ever evicts it.
//
// Finer-grained fetch-level revalidate values (300s on the homepage, 900s on the
// programme pages) are lower and still win - a route resolves to the smallest
// revalidate among its segments and fetches.
export const revalidate = 3600; // 1h

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

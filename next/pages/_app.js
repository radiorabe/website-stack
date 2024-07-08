import * as React from "react";
import Head from "next/head";
import localFont from "next/font/local";
import { bold, regular } from "../Themes/Fonts";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={regular.className}>
        <Component {...pageProps} />
      </main>{" "}
    </>
  );
}

export default MyApp;

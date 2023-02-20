import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { LiveChatWidget } from "@livechat/widget-react";
import { globalStyles } from "../styles/global";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Exclusive Removals</title>
      </Head>
      <LiveChatWidget license="15067299" group="0" />
      <Component {...pageProps} />
    </>
  );
}

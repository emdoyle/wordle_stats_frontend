import "../styles/globals.css";
import type { AppProps } from "next/app";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { Links } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wordle Stats</title>
        <meta name="description" content="Wordle Stats Info Site" />
        <Links />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

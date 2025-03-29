import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";
import { Comfortaa } from "next/font/google";
import App from "./App.js";
const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300"],
});
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amna</title>
        <link rel="icon" href="/bow.svg" />
      </Head>

      <main className={comfortaa.className}>
        <App />
      </main>
    </div>
  );
}

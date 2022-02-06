import Head from "next/head";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Special from "../components/Special";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&family=Montserrat:wght@400;500&family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Hero />
      <Special />
      <Menu />
    </div>
  );
}

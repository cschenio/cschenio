import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Center, Container, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>陳家陞 CHEN, CHIA-SHENG</title>
        <meta name="description" content="陳家陞 CHEN, CHIA-SHENG" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className={styles.nav}>
        <h1 className={styles.title}>
          陳 家 陞 CHEN, CHIA SHENG
        </h1>
        <div className={styles.nav_links}>
          <Link href="/"><a>INTRO</a></Link>
          <Link href="/"><a>BLOG</a></Link>
          <Link href="/"><a>CV</a></Link>
          <Link href="/"><a>SHOWCASES</a></Link>
        </div>
        </nav>
        <Container maxW="container.xl">
          <Center>
              <p>
                He writes code.
              </p>
          </Center>
          <Center>
              <p>
                As a professional, and as a hobbyist.
              </p>
          </Center>
          <Center className={styles.sms_links}>
            <Link href="https://github.com/cschenio" passHref><a target="_blank" rel="noopener noreferrer">GitHub</a></Link>
            <Link href="https://www.linkedin.com/in/chia-sheng-chen/" passHref><a target="_blank" rel="noopener noreferrer">LinkedIn</a></Link>
            <Link href="https://www.facebook.com/chen.chia.sheng.0817" passHref><a target="_blank" rel="noopener noreferrer">Facebook</a></Link>
            <Link href="mailto:mail@cschen.io"><a>Email</a></Link>
          </Center>
        </Container>
      </main>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Center, Container } from "@chakra-ui/react";

export default function Home(props) {
  return (
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
      <Center className={styles.sms}>
        <Link href="https://github.com/cschenio" passHref><a target="_blank" rel="noopener noreferrer">GITHUB</a></Link>
        <Link href="https://www.linkedin.com/in/chia-sheng-chen/" passHref><a target="_blank" rel="noopener noreferrer">LINKEDIN</a></Link>
        <Link href="https://www.facebook.com/chen.chia.sheng.0817" passHref><a target="_blank" rel="noopener noreferrer">FACEBOOK</a></Link>
        <Link href="mailto:mail@cschen.io"><a>EMAIL</a></Link>
      </Center>
    </Container>
  );
}

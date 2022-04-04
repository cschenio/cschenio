import React from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

const Nav = (props) => {
  const { darkMode, setDarkMode } = props;
  return <nav className={styles.nav}>
    <h1 className={styles.title}>
      陳 家 陞 CHEN, CHIA SHENG
    </h1>
    <div className={styles.links}>
      <Link href="/"><a>INTRO</a></Link>
      <Link href="/blog"><a>BLOG</a></Link>
      <Link href="/cschen-cv-2021.pdf" passHref><a target="_blank" rel="noopener noreferrer">CV</a></Link>
      <Link href="#"><a onClick={(e => setDarkMode(!darkMode))}>⛒</a></Link>
    </div>
  </nav>;
};
// <Link href="/showcases"><a>SHOWCASES</a></Link>
export default Nav;

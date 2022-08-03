import React, { useState } from "react";
import Head from "next/head";
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import Nav from "../components/Nav";
import "@fontsource/advent-pro/300.css";
import "@fontsource/dm-sans/400.css";
import "../styles/globals.css";
import styles from "../styles/Layout.module.css";

const colors = {
  // Maya blue: #59BFFF (close to 300)
  primary: {
    brand: "#59bfff",
    50: "#dbf7ff",
    100: "#aee3ff",
    200: "#7eceff",
    300: "#4dbaff",
    400: "#22a7fe",
    500: "#0e8de5",
    600: "#006eb3",
    700: "#004e81",
    800: "#002f50",
    900: "#001120",
  },
  // Carrot orange: #EE9315 (close to 400)
  secondary: {
    brand: "#ee9315",
    50: "#fff3dc",
    100: "#fddeb3",
    200: "#f7c885",
    300: "#f3b258",
    400: "#ef9c29",
    500: "#d68310",
    600: "#a66609",
    700: "#784905",
    800: "#492b00",
    900: "#1d0e00",
  },
  // Mauve: #FFBFFF (close to 100)
  third: {
    brand: "#ffbfff",
    50: "#ffe4ff",
    100: "#ffb3ff",
    200: "#fe81fe",
    300: "#fd50fd",
    400: "#fd26fc",
    500: "#e415e2",
    600: "#b10db0",
    700: "#7f057e",
    800: "#4d004c",
    900: "#1c001b",
  },
};

const themeConfig = {
  colors,
  fonts: {
    heading: "DM Sans, Microsoft JhengHei, sans-serif",
    body: "DM Sans, Microsoft JhengHei, sans-serif",
  },
  styles: {
    global: {
      h1: {
        color: "primary.brand",
        fontFamily: "Advent Pro, Microsoft JhengHei, sans-serif",
      },
      nav: {
        fontFamily: "Advent Pro, Microsoft JhengHei, sans-serif",
      },
    },
  },
};

const darkThemeConfig = {
  ...themeConfig,
  styles: {
    global: {
      ...themeConfig.styles.global,
      "html, body": {
        background:
          `linear-gradient(90deg, #181818 1px, transparent 1px) 1px 0,
          linear-gradient(0deg, #181818 1px, transparent 1px) 1px 0,
          #111;`,
        backgroundSize: "20px 20px;",
        color: "white",
        lineHeight: "tall",
      },
      a: {
        color: "white",
      },
      "a:hover": {
        color: "third.brand",
      },
    },
  },
};

const lightThemeConfig = {
  ...themeConfig,
  styles: {
    global: {
      ...themeConfig.styles.global,
      "html, body": {
        background:
          `linear-gradient(90deg, #f9f9f9 1px, transparent 1px) 1px 0,
          linear-gradient(0deg, #f9f9f9 1px, transparent 1px) 1px 0,
          #fff;`,
        backgroundSize: "20px 20px;",
        color: "black",
        lineHeight: "tall",
      },
      a: {
        color: "black",
      },
      "a:hover": {
        color: "third.brand",
      },
    },
  },
};

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  const theme =  darkMode ? extendTheme(darkThemeConfig) : extendTheme(lightThemeConfig);
  return <ChakraProvider theme={theme}>
    <div className={styles.container}>
      <Head>
        <title>陳家陞 CHEN, CHIA-SHENG</title>
        <meta name="description" content="陳家陞 CHEN, CHIA-SHENG" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
        <Component {...pageProps} />
      </main>
    </div>
  </ChakraProvider>;
}

export default MyApp;

import { createGlobalStyle } from "styled-components";
import {Antonio} from "next/font/google"

const antonio = Antonio({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
})

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    overflow-wrap: break-word;
    -webkit-tap-highlight-color: transparent;
  }

:root {
    --yellow: #FFD700;
    --black: #000;
    --white: #fff;
    --grey: #f0f0f0;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${antonio.style.fontFamily}, system-ui;
  }
`;

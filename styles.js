import { createGlobalStyle } from "styled-components";
import {Antonio} from "next/font/google"
import {Roboto} from "next/font/google"

const antonio = Antonio({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

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
    --black-transparent: rgba(0, 0, 0, 0.8);
    --white: #fff;
    --grey: #f0f0f0;
    --grey-transparent: rgba(43, 43, 43, 0.8);

    --bodytext: 500 0.75rem ${roboto.style.fontFamily}, system-ui;
    --subheadline: 700 0.9rem ${antonio.style.fontFamily}, system-ui;
    --button: 700 0.4rem ${antonio.style.fontFamily}, system-ui;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${antonio.style.fontFamily}, ${roboto.style.fontFamily}, system-ui;
    background-color: var(--black);
  }

  input, select, button {
  font-family: inherit;
}

html {
  scroll-behavior: smooth;
  overflow-y: scroll;
}

/* Globaler Scrollbar-Style (Chrome, Edge, Safari) */
::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--black);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--yellow);
    border-radius: 4px;
    border: 4px solid var(--black);
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #ffd600;
  }

  /* Firefox Support */
  * {
    scrollbar-color: var(--yellow) var(--black);
    scrollbar-width: thin;
  }
`;

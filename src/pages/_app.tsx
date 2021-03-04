import "../styles/global.css";

import { ChallengesProvider } from "../context/ChallengesContext";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

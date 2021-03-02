import "../styles/global.css";

import { ChallengesProvider } from "../context/ChallengesContext";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    navigator.serviceWorker.register("/sw.js");
  });
  return <Component {...pageProps} />;
}

export default MyApp;

import "../styles/global.css";

import { ChallengesProvider } from "../context/ChallengesContext";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      /*
       *
       * Register the Service Worker
       *
       * */
      navigator.serviceWorker.register("sw.js").then(function (registration) {
        console.log("Service Worker Registered");
      });
    } else console.log("Your browser does not support the Service-Worker!");
  });
  return <Component {...pageProps} />;
}

export default MyApp;

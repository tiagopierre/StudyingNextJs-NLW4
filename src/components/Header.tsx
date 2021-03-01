import { useState } from "react";
import styles from "../styles/components/Header.module.css";

const home = "/icons/home.svg";
const homeActive = "/icons/homeActive.svg";

const awards = "/icons/award.svg";
const awardsActive = "/icons/awardActive.svg";

export function Header() {
  const [pageActive, setPageActive] = useState("Home");

  function navigationHome() {
    setPageActive("Home");
  }

  function navigationLeaderboard() {
    setPageActive("Leaderboard");
  }

  return (
    <header className={styles.headerContainer}>
      <img src="/Logo.svg" alt="Logo" />

      <menu>
        <button
          className={
            pageActive === "Home" ? styles.isActive : styles.isNotActive
          }
          type="button"
          onClick={navigationHome}
        >
          <img
            src={pageActive === "Home" ? homeActive : home}
            alt="Home enable"
          />
        </button>
        <button
          className={
            pageActive === "Leaderboard" ? styles.isActive : styles.isNotActive
          }
          type="button"
          onClick={navigationLeaderboard}
        >
          <img
            src={pageActive === "Leaderboard" ? awardsActive : awards}
            alt="Award enabled"
          />
        </button>
      </menu>

      <div />
    </header>
  );
}

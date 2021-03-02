import { useContext } from "react";
import { HeaderContext } from "../context/HeaderContext";
import styles from "../styles/components/Header.module.css";

const home = "/icons/home.svg";
const homeActive = "/icons/homeActive.svg";

const awards = "/icons/award.svg";
const awardsActive = "/icons/awardActive.svg";

export function Header() {
  const { pageActive, navigationLeaderboard, navigationHome } = useContext(
    HeaderContext
  );

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

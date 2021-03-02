import Link from "next/link";

import styles from "../styles/components/Header.module.css";

const home = "/icons/home.svg";
const homeActive = "/icons/homeActive.svg";

const awards = "/icons/award.svg";
const awardsActive = "/icons/awardActive.svg";

interface HeaderProps {
  pageActive: string;
}

export function Header(props: HeaderProps) {
  return (
    <header className={styles.headerContainer}>
      <img src="/Logo.svg" alt="Logo" />

      <menu>
        <Link href="/">
          <button
            className={
              props.pageActive === "Home" ? styles.isActive : styles.isNotActive
            }
            type="button"
          >
            <img
              src={props.pageActive === "Home" ? homeActive : home}
              alt="Home enable"
            />
          </button>
        </Link>
        <Link href="/ranking">
          <button
            className={
              props.pageActive === "Ranking"
                ? styles.isActive
                : styles.isNotActive
            }
            type="button"
          >
            <img
              src={props.pageActive === "Ranking" ? awardsActive : awards}
              alt="Award enabled"
            />
          </button>
        </Link>
      </menu>

      <div>
        <button className={styles.logout} type="button">
          <img src="/icons/logout.svg" alt="Award enabled" />
        </button>
      </div>
    </header>
  );
}

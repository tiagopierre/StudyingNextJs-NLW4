import Link from "next/link";

import styles from "../styles/components/Header.module.css";

import { BsHouseFill, BsAward, BsPower } from "react-icons/bs";

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
            <BsHouseFill
              size={30}
              color={props.pageActive === "Home" ? "#5965E0" : "#666666"}
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
            <BsAward
              size={30}
              color={props.pageActive === "Home" ? "#666666" : "#5965E0"}
            />
          </button>
        </Link>
      </menu>

      <div>
        <button className={styles.logout} type="button">
          <BsPower size={30} color="#E83F5B" />
        </button>
      </div>
    </header>
  );
}

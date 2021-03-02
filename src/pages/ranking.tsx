import Head from "next/head";
import { Header } from "../components/Header";
import { ListRanking } from "../components/ListRanking";
import styles from "../styles/pages/Ranking.module.css";

export default function Ranking() {
  return (
    <header className={styles.rankingCotainer}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <Header pageActive="Ranking" />

      <ListRanking />

      <div />
    </header>
  );
}

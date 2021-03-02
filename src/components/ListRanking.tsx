import styles from "../styles/components/ListRanking.module.css";
import { CardUserRanking } from "./CardUserRanking";

export function ListRanking() {
  return (
    <div className={styles.RankingContainer}>
      <h1>Ranking</h1>

      <div>
        <CardUserRanking />
        <CardUserRanking />
        <CardUserRanking />
        <CardUserRanking />
        <CardUserRanking />
        <CardUserRanking />
        <CardUserRanking />
        <CardUserRanking />
      </div>
    </div>
  );
}

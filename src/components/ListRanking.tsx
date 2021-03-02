import styles from "../styles/components/ListRanking.module.css";
import { CardUserRanking } from "./CardUserRanking";

export function ListRanking() {
  return (
    <div className={styles.RankingContainer}>
      <h1>Ranking</h1>
      <br />
      <p>
        Complete os desafios e chegue no topo <span>💪</span> .{" "}
      </p>

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

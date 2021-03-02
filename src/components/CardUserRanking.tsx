import styles from "../styles/components/CardUserRanking.module.css";

export function CardUserRanking() {
  return (
    <div className={styles.containerCardUserRanking}>
      <div>
        <div className={styles.position}>
          <p>1</p>
        </div>
        <div className={styles.details}>
          <div>
            <img src="https://github.com/tiagopierre.png" alt="Tiago Pierre" />
            <div className={styles.profile}>
              <strong>Tiago Pierre</strong>
              <p>
                <img src="icons/level.svg" alt="Level up" /> Level 20
              </p>
            </div>
          </div>
          <div className={styles.experience}>
            <p>
              {" "}
              <span>127</span> completados
            </p>
            <p>
              {" "}
              <span>154000</span> xp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

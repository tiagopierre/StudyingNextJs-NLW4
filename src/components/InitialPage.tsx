import { useEffect, useState } from "react";
import styles from "../styles/pages/Home.module.css";

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { ModalChallenges } from "../components/ModalChallenges";

export function InitialPage() {
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    setScreenWidth(screen.width);
  }, []);
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div className={styles.challengeBox}>
          <ChallengeBox />
        </div>
        {screenWidth < 960 ? <ModalChallenges /> : null}
      </section>
    </div>
  );
}

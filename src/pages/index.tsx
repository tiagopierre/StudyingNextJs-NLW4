import { CompletedChallenges } from "../components/CompletedChallenges";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import Head from "next/head";

import { GetServerSideProps } from "next";

import styles from "../styles/pages/Home.module.css";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../context/CountdownContext";
import { Countdown } from "../components/Countdown";
import { ChallengesProvider } from "../context/ChallengesContext";
import { useEffect, useState } from "react";

import { ModalChallenges } from "../components/ModalChallenges";
import { Header } from "../components/Header";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    setScreenWidth(screen.width);
  }, []);

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.homeCotainer}>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <Header />

        <div className={styles.container}>
          <ExperienceBar />
          <CountdownProvider>
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
          </CountdownProvider>
        </div>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  };
};

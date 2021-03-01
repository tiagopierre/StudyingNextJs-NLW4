import { CompletedChallenges } from "../components/CompletedChallenges";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import Head from "next/head";

import { GetServerSideProps } from "next";

import styles from "../styles/pages/Home.module.css";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../context/CountdownContext";
import { Countdown } from "../components/Countdown";
import {
  ChallengesContext,
  ChallengesProvider,
} from "../context/ChallengesContext";
import { useContext, useEffect, useState } from "react";
import { Modal } from "../components/Modal";
import { ModalChallenges } from "../components/ModalChallenges";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  const { isModalChallenge } = useContext(ChallengesContext);

  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    setScreenWidth(screen.width);
  });

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>
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
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};

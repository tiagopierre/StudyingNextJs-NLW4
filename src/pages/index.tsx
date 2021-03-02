import Head from "next/head";

import { GetServerSideProps } from "next";

import styles from "../styles/pages/Home.module.css";

import { CountdownProvider } from "../context/CountdownContext";
import { HeaderProvider } from "../context/HeaderContext";

import { ChallengesProvider } from "../context/ChallengesContext";

import { Header } from "../components/Header";
import { InitialPage } from "../components/InitialPage";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <HeaderProvider>
      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
      >
        <CountdownProvider>
          <div className={styles.homeCotainer}>
            <Head>
              <title>Início | move.it</title>
            </Head>

            <Header />

            <InitialPage />
          </div>
        </CountdownProvider>
      </ChallengesProvider>
    </HeaderProvider>
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

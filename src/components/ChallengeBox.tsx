import { useContext, useState } from "react";
import { ChallengesContext } from "../context/ChallengesContext";
import { CountdownContext } from "../context/CountdownContext";
import styles from "../styles/components/ChallengeBox.module.css";
import { Modal } from "./Modal";

import thumbDown from "../../public/3983-thumbs-down.json";

import thumbUp from "../../public/3982-thumbs-up.json";

import Lottie from "react-lottie";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );

  const [isActiveModalThumbs, setIsActiveModalThumbs] = useState(null);

  const { resetCountDown } = useContext(CountdownContext);

  const { closeModalChallenge } = useContext(ChallengesContext);

  function openModalThumbsUp() {
    setIsActiveModalThumbs(true);
  }
  function openModalThumbsDown() {
    setIsActiveModalThumbs(false);
  }
  function closeModalThumbs() {
    setIsActiveModalThumbs(null);
  }

  function handleChallengeSucceeded() {
    openModalThumbsUp();
    completeChallenge();
    resetCountDown();
    new Audio("./success.mp3").play();
    setTimeout(() => {
      closeModalChallenge();
      closeModalThumbs();
    }, 1000);
  }

  function handlechallengeFailed() {
    openModalThumbsDown();
    resetChallenge();
    resetCountDown();
    new Audio("./failed.mp3").play();
    setTimeout(() => {
      closeModalChallenge();
      closeModalThumbs();
    }, 1000);
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>{activeChallenge.amount}xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handlechallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSuceededButton}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeBoxNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>

          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}

      {isActiveModalThumbs ? (
        <Modal>
          <Lottie options={{ autoplay: true, animationData: thumbUp }} />
        </Modal>
      ) : isActiveModalThumbs === false ? (
        <Modal>
          <Lottie options={{ autoplay: true, animationData: thumbDown }} />
        </Modal>
      ) : null}
    </div>
  );
}

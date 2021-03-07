import { clear } from "console";
import { useState, useEffect, useContext } from "react";
import { CountdownContext } from "../context/CountdownContext";
import styles from "../styles/components/Countdown.module.css";

import { BsCaretRightFill, BsXCircleFill, BsCheckAll } from "react-icons/bs";

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountDown
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styles.countDownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={`${styles.countdownButton}`}>
          Ciclo encerrado
          <span>
            <BsCheckAll size={20} color="#4cd62b" />
          </span>
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountDown}
            >
              Abandonar ciclo
              <span>
                <BsXCircleFill size={20} color="#E83F5B" />
              </span>
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
              <span>
                <BsCaretRightFill size={20} />
              </span>
            </button>
          )}
        </>
      )}
    </div>
  );
}

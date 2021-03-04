import { createContext, useState, ReactNode, useEffect } from "react";
import Cookies from "js-cookie";
import challenges from "../../challenges.json";
import { LevelUpModal } from "../components/LevelUpModal";
import { Modal } from "../components/Modal";
import { ChallengeBox } from "../components/ChallengeBox";

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  isModalChallenge: boolean;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeLevelModal: () => void;
  closeModalChallenge: () => void;
  openModalChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({
  children,
  ...rest
}: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0
  );
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted ?? 0
  );

  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);

  const [isModalChallenge, setIsModalChallenge] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    if (Notification.permission === "granted") {
      return;
    } else {
      Notification.requestPermission();
    }
  }, []);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelModalOpen(true);
  }

  function closeLevelModal() {
    setIsLevelModalOpen(false);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio("/notification.mp3").play();

    if (Notification.permission === "granted") {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification("Novo desafio 🔥🔥🔥", {
          body: `Valendo ${challenge.amount}xp!`,
          icon: "/favicon.png",
          vibrate: [200, 100, 200, 100, 200, 100, 400]
        });
      });

      /*let notification = new Notification("Novo desafio 🔥🔥🔥", {
        body: `Valendo ${challenge.amount}xp!`,
        icon: "/favicon.png",
        vibrate: [200, 100, 200, 100, 200, 100, 400]
      });
      notification.onclick = (event) => {
        event.preventDefault();
        window.open("http://localhost:3000", "_blank");
      };*/
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function closeModalChallenge() {
    setIsModalChallenge(false);
  }

  function openModalChallenge() {
    setIsModalChallenge(true);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;
    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }
    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  useEffect(() => {
    Cookies.set("level", String(level));
    Cookies.set("currentExperience", String(currentExperience));
    Cookies.set("challengesCompleted", String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge,
        closeLevelModal,
        closeModalChallenge,
        openModalChallenge,
        isModalChallenge
      }}
    >
      {children}
      {isLevelModalOpen && (
        <Modal>
          <LevelUpModal />
        </Modal>
      )}
    </ChallengesContext.Provider>
  );
}

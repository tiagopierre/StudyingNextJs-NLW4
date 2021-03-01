import { useContext } from "react";
import { ChallengesContext } from "../context/ChallengesContext";
import { ChallengeBox } from "./ChallengeBox";
import { Modal } from "./Modal";

export function ModalChallenges() {
  const { isModalChallenge } = useContext(ChallengesContext);
  return (
    <>
      {isModalChallenge ? (
        <Modal>
          <ChallengeBox />
        </Modal>
      ) : null}
    </>
  );
}

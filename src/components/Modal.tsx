import styles from "../styles/components/Modal.module.css";

export function Modal({ children }) {
  return <div className={styles.overlay}>{children}</div>;
}

import styles from "../styles/pages/Login.module.css";

import { FaFacebook, FaGoogle } from "react-icons/fa";

export default function Login() {
  return (
    <header className={styles.loginContainer}>
      <section>
        <div>
          <img src="/icons/loginLogo.svg" alt="Logo " />

          <div>
            <h1>Bem-vindo</h1>
            <p>
              O Movimente é uma aplicação com base na técnica de Pomodoro,
              destinada a pessoas que ficam horas sentadas na frente do
              computador, auxiliando no cuidado da sua saúde e postura.
              Conecte-se para começar seus desafios.
            </p>
          </div>
          <div>
            <button className={styles.buttonGoogle}>
              <span>
                <FaGoogle
                  size={22}
                  color="#ffffff"
                  style={{ marginLeft: 7, marginRight: 7 }}
                />
                Acessar com Google
              </span>
            </button>
            <button className={styles.buttonFacebook}>
              <span>
                <FaFacebook
                  size={22}
                  color="#ffffff"
                  style={{ marginLeft: 7, marginRight: 7 }}
                />
                Acessar com Facebook
              </span>
            </button>
          </div>
        </div>
      </section>
    </header>
  );
}

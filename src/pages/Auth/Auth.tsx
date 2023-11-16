import React from "react";
import AuthBackground from "../../assets/images/auth_background.jpg";
import styles from "./Auth.module.scss";
import { AuthForm } from "../../components/AuthForm";

type Props = {};

const Auth: React.FC = (props: Props) => {
  return (
    <div className={styles.authWrapper}>
      <div className={styles.authBackground}>
        <img
          src={AuthBackground}
          alt="Nature Background"
          className={styles.authBackgroundImg}
        />
        <div className={styles.darkenBackground}></div>
      </div>
      <div className={styles.formWrapper}>
        <AuthForm />
      </div>
    </div>
  );
};

export default Auth;

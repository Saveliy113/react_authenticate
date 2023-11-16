import React from "react";
import AuthBackground from "../../assets/images/auth_background.jpg";
import styles from "./Home.module.scss";

type Props = {};

const Home: React.FC = (props: Props) => {
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
        <h1>Вы успешно авторизовались!</h1>
      </div>
    </div>
  );
};

export default Home;

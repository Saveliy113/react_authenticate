import React from "react";
import styles from "./Loader.module.scss";

type Props = {};

const Loader = (props: Props) => {
  return <span className={styles.loader}></span>;
};

export default Loader;

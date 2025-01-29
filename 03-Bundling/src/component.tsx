import React from "react";
import * as styles from "./styles.scss";

export const HelloComponent: React.FC = () => {
  return <h1 className={styles.content}>Hello World</h1>;
};
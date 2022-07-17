import { useRef } from "react";
import { Image } from "../../shared/image";

import styles from "./index.module.scss";

export default function Main() {
  return (
    <div className={styles.background}>
      <Image path="aurora-background.png" />
      <div className={styles.info}>
        <h1 className={styles.title}>Maximise your market</h1>
        <button className={styles.button}>Contact us</button>
      </div>
    </div>
  );
}

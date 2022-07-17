import { Image } from "../../shared/image";
import styles from "./index.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div>
          <a href="#">
            <Image width={150} height={32} path="velo-logo.png" />
          </a>
        </div>
        <div className={styles.services}>
          <ul>
            <li>© 2022 Nordic Velo. All rights reserved</li>
          </ul>
        </div>
        <div className={styles.buttons}>
          <a href="#">
            <Image width={17} height={14} path="twitter.svg" />
          </a>
          <a href="#">
            <Image width={17} height={14} path="telegram.svg" />
          </a>
        </div>
      </div>
    </div>
  );
}

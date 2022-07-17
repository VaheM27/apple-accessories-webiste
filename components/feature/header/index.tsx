import { Image } from "../../shared/image";

import styles from "./index.module.scss";

export default function Header() {
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
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <div className={styles.buttons}>
          <a href="#">
            <Image width={17} height={14} path="twitter.svg" />
          </a>
          <a href="#">
            <Image width={17} height={14} path="telegram.svg" />
          </a>
          <button>
            <a href="#">Contact us</a>
          </button>
        </div>
      </div>
    </div>
  );
}

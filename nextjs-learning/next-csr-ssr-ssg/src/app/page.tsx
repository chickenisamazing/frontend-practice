// import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.title}>
      <div className={styles.board}>정적 라우팅 테스트</div>
    </div>
  );
}

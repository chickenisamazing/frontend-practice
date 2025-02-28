import Loader from "@/component/Loader";
import styles from "./page.module.scss";

export default function Page() {
  return (
    <div className={styles.container}>
      <Loader />
    </div>
  );
}

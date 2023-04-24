import styles from "./banner.module.css";
import Icons from "../../icons";

export function Banner({ title }) {
  return (
    <>
      <div className={styles.banner}>
        <img src={Icons.logo.default} />
        <h2>{title}</h2>
      </div>
    </>
  );
}

import styles from "./underlinedButton.module.css";
export function UnderlinedButton({ title }) {
  return <button className={styles.UnderlinedButton}>{title}</button>;
}

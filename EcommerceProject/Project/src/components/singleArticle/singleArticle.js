import styles from "./singleArticle.module.css";
import Images from "../../images/index";
export function SingleArticle({ picture }) {
  return (
    <>
      <div className={styles.articleContainer}>
        {picture}
        <p>article name</p>
        <h4>Rs. 25,000</h4>
      </div>
    </>
  );
}

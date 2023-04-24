import styles from "./infoStripe.module.css";
export function InfoStripe() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>free delivery</h2>
          <p>For all orders over $50, and some latin text</p>
        </div>
        <div className={styles.middle}>
          <h2>90 days return</h2>
          <p>If goods have problems, and some latin text</p>
        </div>
        <div className={styles.right}>
          <h2>Secure payment</h2>
          <p>100% Secure payment, and some latin text</p>
        </div>
      </div>
    </>
  );
}

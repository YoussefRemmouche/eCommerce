import styles from "./ourInsta.module.css";
export function OurInsta() {
  return (
    <>
      <div className={styles.container}>
        <h2>Our Instagram</h2>
        <p>Follow our store on Instagram</p>
        <div className={styles.instaButton}>
          <button>Follow Us</button>
        </div>
      </div>
    </>
  );
}

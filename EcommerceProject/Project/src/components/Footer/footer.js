import styles from "./footer.module.css";

function PagesFooter() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_c1}>
        400 University Drive Suite 200 Coral <br /> Gables,
        <br /> FL 33134 USA
      </div>
      <div className={styles.footer_c2}>
        <p>Links</p>
        <ul>
          <li>home</li>
          <br />
          <li>shop</li>
          <br />
          <li>about</li>
          <br />
          <li>contact</li>
        </ul>
      </div>
      <div className={styles.footer_c3}>
        <p>Help</p>
        <ul>
          <li>Payment Options</li>
          <br />
          <li>Returns</li>
          <br />
          <li>Privacy Policies</li>
        </ul>
      </div>
      <div className={styles.footer_c4}>
        <p>Newsletter</p>
        <form id="email-form">
          <input
            className={styles.footerInput}
            type="email"
            id="email-input"
            name="email"
            placeholder="Enter your email address:"
          />
          <button className={styles.ftrButton} type="submit" id="subscribe-btn">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
}

export default PagesFooter;

import styles from "./ourblogs.module.css";
import Images from "../../../images";
import { UnderlinedButton } from "../../../components/underlinedButton/underlinedButton";
export function OurBlogs() {
  return (
    <>
      <div className={styles.heading}>
        <h3>Our blogs</h3>
        <p>Find a bright ideal to suit your taste with our great selection</p>
      </div>
      <div className={styles.blogs}>
        <div className={styles.blog1}>
          <img src={Images.h} />
          <p>going all-in with millenial design</p>
          <div className={styles.obButton}>
            <UnderlinedButton title="Read More"></UnderlinedButton>
          </div>
          <div className={styles.spans}>
            <small>5 mins</small>
            <small>12 october 2022</small>
          </div>
        </div>
        <div className={styles.blog2}>
          <img src={Images.j} />
          <p>going all-in with millenial design</p>
          <div className={styles.obButton}>
            <UnderlinedButton title="Read More"></UnderlinedButton>
          </div>
          <div className={styles.spans}>
            <small>5 mins</small>
            <small>12 october 2022</small>
          </div>
        </div>
        <div className={styles.blog3}>
          <img src={Images.k} />
          <p>going all-in with millenial design</p>
          <div className={styles.obButton}>
            <UnderlinedButton title="Read More"></UnderlinedButton>
          </div>
          <div className={styles.spans}>
            <small>5 mins</small>
            <small>12 october 2022</small>
          </div>
        </div>
      </div>
    </>
  );
}

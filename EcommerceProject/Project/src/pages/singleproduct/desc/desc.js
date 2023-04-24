import styles from "./desc.module.css";
import pic from "../../../images/product1.png";
export function Description() {
  return (
    <>
      <div className={styles.nav}>
        <ul className={styles.navul}>
          <button>Description</button>
          <button>Additional info</button>
          <button>Reviews</button>
        </ul>
      </div>
      <div className={styles.desc}>
        <p>
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <br></br>
        <p>
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
      </div>
      <div className={styles.pics}>
        <img src={pic} />
        <img src={pic} />
      </div>
    </>
  );
}

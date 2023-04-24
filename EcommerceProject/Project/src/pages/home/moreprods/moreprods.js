import styles from "./moreprods.module.css";
import { UnderlinedButton } from "../../../components/underlinedButton/underlinedButton";
import Shop from "../../shop/shop";
import { Link } from "react-router-dom";
import Images from "../../../images";
export function MoreProds() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <img className={styles.pics} src={Images.a} />
          <h3>side table</h3>
          <Link to="/shop" element={<Shop></Shop>}>
            <UnderlinedButton title="View More"></UnderlinedButton>
          </Link>
        </div>
        <div className={styles.right}>
          <img className={styles.pics} src={Images.b} />
          <h3>side table</h3>
          <Link to="/shop" element={<Shop></Shop>}>
            <UnderlinedButton title="View More"></UnderlinedButton>
          </Link>
        </div>
      </div>
    </>
  );
}

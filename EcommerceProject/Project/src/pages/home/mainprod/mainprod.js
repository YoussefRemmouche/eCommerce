import styles from "./mainprod.module.css";
import Menu from "../../../components/Menu/menu.js";
import pic from "../../../images/product1.png";
import { UnderlinedButton } from "../../../components/underlinedButton/underlinedButton";
import Shop from "../../shop/shop";
import { Link } from "react-router-dom";
export function MainProd() {
  return (
    <>
      <div className={styles.container1}>
        <Menu></Menu>
        <div className={styles.container2}>
          <div className={styles.leftside}>
            <h1>Rocket single seater</h1>
            <div className={styles.button}>
              <Link to="/shop" element={<Shop></Shop>}>
                <UnderlinedButton title="Shop Now"></UnderlinedButton>
              </Link>
            </div>
          </div>
          <div className={styles.rightside}>
            <img src={pic} />
          </div>
        </div>
      </div>
      ;
    </>
  );
}

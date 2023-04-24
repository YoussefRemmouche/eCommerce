import styles from "./newarrivals.module.css";
import Images from "../../../images";
import { SingleProduct } from "../../singleproduct/sp";
import { Link } from "react-router-dom";
export function NewArrivals() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={Images.g} />
        </div>
        <div className={styles.right}>
          <h5>new arrivals</h5>
          <h2>asgaard sofa</h2>
          <div className={styles.orderButton}>
            <Link to="/singleProduct" element={<SingleProduct></SingleProduct>}>
              <button className={styles.orderBtn}>order now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

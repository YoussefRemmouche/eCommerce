import styles from "./prod.module.css";
import pic from "../../../images/product1.png";
import { Link } from "react-router-dom";
import ShoppingCart from "../../cartsidebar/ShoppingCart";
export function Product() {
  return (
    <>
      <div className={styles.nav}></div>
      <div className={styles.container}>
        <div className={styles.pics}>
          <img src={pic} />
        </div>
        <div className={styles.desc}>
          <h1>Asgaard sofa</h1>
          <h2>Rs 250,000</h2>
          <small>5 customer review</small>
          <p>
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          <small>Size</small>
          <div className={styles.sizeBtns}>
            <button className={styles.size1}>L</button>
            <button className={styles.size2}>XL</button>
            <button className={styles.size3}>XS</button>
          </div>
          <small>color</small>
          <div className={styles.colorBtns}>
            <button className={styles.color1}></button>
            <button className={styles.color2}></button>
            <button className={styles.color3}></button>
          </div>
          <div className={styles.addCart}>
            <Link to="/ShoppingCart" element={<ShoppingCart />}>
              <button className={styles.addCartButton}>Add to Cart</button>
            </Link>
          </div>
          <small>SKU : SS001</small>
          <small>Category : sofas</small>
          <small>Tags: sofa, chair, home, shop</small>
          <small>Share: </small>
        </div>
      </div>
    </>
  );
}

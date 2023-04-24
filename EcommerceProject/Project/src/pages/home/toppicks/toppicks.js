import styles from "./toppicks.module.css";
import { SingleProduct } from "../../singleproduct/sp";
import { SingleArticle } from "../../../components/singleArticle/singleArticle";
import { UnderlinedButton } from "../../../components/underlinedButton/underlinedButton";
import Shop from "../../shop/shop";
import Images from "../../../images";
import { Link } from "react-router-dom";
export function TopPicks() {
  return (
    <>
      <div className={styles.heading}>
        <h2>Top Picks for you</h2>
        <p>
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor and table lights.
        </p>
      </div>
      <div className={styles.prods}>
        <Link to="/SingleProduct" element={<SingleProduct></SingleProduct>}>
          <SingleArticle
            picture={<img src={Images.c}></img>}
            className={styles.article1}
          ></SingleArticle>
        </Link>
        <Link to="/SingleProduct" element={<SingleProduct></SingleProduct>}>
          <SingleArticle
            picture={<img src={Images.d}></img>}
            className={styles.article1}
          ></SingleArticle>
        </Link>
        <Link to="/SingleProduct" element={<SingleProduct></SingleProduct>}>
          <SingleArticle
            picture={<img src={Images.e}></img>}
            className={styles.article1}
          ></SingleArticle>
        </Link>
        <Link to="/SingleProduct" element={<SingleProduct></SingleProduct>}>
          <SingleArticle
            picture={<img src={Images.l}></img>}
            className={styles.article1}
          ></SingleArticle>
        </Link>
      </div>
      <div className={styles.tpButton}>
        <Link to="/shop" element={<Shop></Shop>}>
          <UnderlinedButton title="View More"></UnderlinedButton>
        </Link>
      </div>
    </>
  );
}

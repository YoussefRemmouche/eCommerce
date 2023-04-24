import styles from "./related.module.css";
import { SingleArticle } from "../../../components/singleArticle/singleArticle";
import { UnderlinedButton } from "../../../components/underlinedButton/underlinedButton";
import Shop from "../../shop/shop";
import { SingleProduct } from "../sp";
import Images from "../../../images";
import { Link } from "react-router-dom";
export function RelatedProducts() {
  return (
    <>
      <h2 className={styles.rpheading}>Related products</h2>
      <div className={styles.relArticles}>
        <Link to="/SingleProduct" element={<SingleProduct />}>
          <SingleArticle picture={<img src={Images.c}></img>}></SingleArticle>
        </Link>
        <Link to="/SingleProduct" element={<SingleProduct />}>
          <SingleArticle picture={<img src={Images.d}></img>}></SingleArticle>
        </Link>
        <Link to="/SingleProduct" element={<SingleProduct />}>
          <SingleArticle picture={<img src={Images.e}></img>}></SingleArticle>
        </Link>
        <Link to="/SingleProduct" element={<SingleProduct />}>
          <SingleArticle picture={<img src={Images.l}></img>}></SingleArticle>
        </Link>
      </div>
      <div className={styles.relButton}>
        <Link to="/Shop" element={<Shop></Shop>}>
          <UnderlinedButton title="View More"></UnderlinedButton>
        </Link>
      </div>
    </>
  );
}

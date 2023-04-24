import styles from "./articles.module.css";
import { SingleArticle } from "../../../components/singleArticle/singleArticle";
import { SingleProduct } from "../../singleproduct/sp";
import Images from "../../../images";
import { Link } from "react-router-dom";
export function Articles() {
  return (
    <>
      <div className={styles.container}>
        <Link to="/SingleProduct" element={<SingleProduct></SingleProduct>}>
          <SingleArticle
            picture={<img src={Images.c}></img>}
            className={styles.article}
          ></SingleArticle>
        </Link>
        <Link to="/SingleProduct" element={<SingleProduct></SingleProduct>}>
          <SingleArticle
            picture={<img src={Images.d}></img>}
            className={styles.article}
          ></SingleArticle>
        </Link>
        <Link to="/SingleProduct" element={<SingleProduct></SingleProduct>}>
          <SingleArticle
            picture={<img src={Images.e}></img>}
            className={styles.article}
          ></SingleArticle>
        </Link>
        <Link to="/SingleProduct" element={<SingleProduct></SingleProduct>}>
          <SingleArticle
            picture={<img src={Images.l}></img>}
            className={styles.article}
          ></SingleArticle>
        </Link>
        <Link to="/SingleProduct" element={<SingleProduct></SingleProduct>}>
          <SingleArticle
            picture={<img src={Images.d}></img>}
            className={styles.article}
          ></SingleArticle>
        </Link>
        <Link to="/SingleProduct" element={<SingleProduct></SingleProduct>}>
          <SingleArticle
            picture={<img src={Images.e}></img>}
            className={styles.article}
          ></SingleArticle>
        </Link>
        <Link to="/SingleProduct" element={<SingleProduct></SingleProduct>}>
          <SingleArticle
            picture={<img src={Images.l}></img>}
            className={styles.article}
          ></SingleArticle>
        </Link>
        <Link to="/SingleProduct" element={<SingleProduct></SingleProduct>}>
          <SingleArticle
            picture={<img src={Images.c}></img>}
            className={styles.article}
          ></SingleArticle>
        </Link>
        <Link to="/SingleProduct" element={<SingleProduct></SingleProduct>}>
          <SingleArticle
            picture={<img src={Images.e}></img>}
            className={styles.article}
          ></SingleArticle>
        </Link>
        <Link to="/SingleProduct" element={<SingleProduct></SingleProduct>}>
          <SingleArticle
            picture={<img src={Images.c}></img>}
            className={styles.article}
          ></SingleArticle>
        </Link>
        <Link to="/SingleProduct" element={<SingleProduct></SingleProduct>}>
          <SingleArticle
            picture={<img src={Images.d}></img>}
            className={styles.article}
          ></SingleArticle>
        </Link>
        <Link to="/SingleProduct" element={<SingleProduct></SingleProduct>}>
          <SingleArticle
            picture={<img src={Images.e}></img>}
            className={styles.article}
          ></SingleArticle>
        </Link>
        <Link to="/SingleProduct" element={<SingleProduct></SingleProduct>}>
          <SingleArticle
            picture={<img src={Images.c}></img>}
            className={styles.article}
          ></SingleArticle>
        </Link>
        <Link to="/SingleProduct" element={<SingleProduct></SingleProduct>}>
          <SingleArticle
            picture={<img src={Images.l}></img>}
            className={styles.article}
          ></SingleArticle>
        </Link>
        <Link to="/SingleProduct" element={<SingleProduct></SingleProduct>}>
          <SingleArticle
            picture={<img src={Images.e}></img>}
            className={styles.article}
          ></SingleArticle>
        </Link>
        <Link to="/SingleProduct" element={<SingleProduct></SingleProduct>}>
          <SingleArticle
            picture={<img src={Images.c}></img>}
            className={styles.article}
          ></SingleArticle>
        </Link>
      </div>
    </>
  );
}

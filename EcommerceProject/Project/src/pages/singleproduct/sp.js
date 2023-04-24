import styles from "./sp.module.css";
import Menu from "../../components/Menu/menu";
import PagesFooter from "../../components/Footer/footer";
import { Product } from "./prod/prod";
import { Description } from "./desc/desc";
import { RelatedProducts } from "./related/related";
export function SingleProduct() {
  return (
    <>
      <Menu></Menu>
      <Product></Product>
      <Description></Description>
      <RelatedProducts></RelatedProducts>
      <PagesFooter></PagesFooter>
    </>
  );
}

import styles from "./shop.module.css";
import Menu from "../../components/Menu/menu";
import { Banner } from "../../components/Banner/banner";
import PagesFooter from "../../components/Footer/footer";
import { InfoStripe } from "../../components/infoStripe/infoStripe";
import { Articles } from "./articles/articles";
import { FilterMenu } from "./filterMenu/filter";
function Shop() {
  return (
    <>
      <Menu></Menu>
      <Banner title="Shop"></Banner>
      <FilterMenu></FilterMenu>
      <Articles></Articles>
      <InfoStripe></InfoStripe>
      <PagesFooter></PagesFooter>
    </>
  );
}
export default Shop;

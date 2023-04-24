import styles from "./menu.module.css";
import Icons from "../../icons";
import Home from "../../pages/home/home";
import Shop from "../../pages/shop/shop";
import Myaccount from "../../pages/myaccount/myaccount";
import { Link } from "react-router-dom";
function Menu() {
  console.log(Icons.cart.default);
  return (
    <>
      <div className={styles.menu}>
        <ul className={styles.menu_1}>
          <li>
            <Link to="/" element={<Home></Home>}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" element={<Shop></Shop>}>
              Shop
            </Link>
          </li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul className={styles.menu_2}>
          <li>
            <Link to="/Myaccount" element={<Myaccount />}>
              <img src={Icons.person.default} alt="" />{" "}
            </Link>
          </li>
          <li>
            <img src={Icons.search.default} alt="" />
          </li>
          <li>
            <img src={Icons.heart.default} alt="" />
          </li>
          <li>
            <img src={Icons.cart.default} alt="" />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menu;

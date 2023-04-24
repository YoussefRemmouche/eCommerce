import "./App.css";
import Home from "./pages/home/home";
import Shop from "./pages/shop/shop";
import { SingleProduct } from "./pages/singleproduct/sp";
import ShoppingCart from "./pages/cartsidebar/ShoppingCart";
import BillingDetail from "./pages/checkout/checkout";
import Myaccount from "./pages/myaccount/myaccount";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/SingleProduct" element={<SingleProduct />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/BillingDetail" element={<BillingDetail />} />
        <Route path="/Myaccount" element={<Myaccount />} />
      </Routes>
    </BrowserRouter>
    // cart, contact and blog pages are missing due to unfortunate bad group management.
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AllProducts from "../pages/AllProducts";
import OrderHistory from "../pages/OrderHistory";
import AddCart from "../pages/AddCart";
import ByBrand from "../pages/ByBrand";
import ByType from "../pages/ByType";
import SpecialDeals from "../pages/SpecialDeals";
import Collections from "../pages/ByTypeCollections/Collections";
import BrandCollections from "../pages/ByBrandCollections/BrandCollections";
import Bevereges from "../pages/Bevereges";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/orderHistory" element={<OrderHistory />} />
      <Route path="/cart" element={<AddCart />} />
      <Route path="/bybrand" element={<ByBrand/>} />
      <Route path="/bytype" element={<ByType/>} />
      <Route path="/specialdeals" element={<SpecialDeals/>} />
      <Route path="/collections" element={<Collections/>} />
      <Route path="/brandcollections" element={<BrandCollections/>} />
      <Route path="/bevereges" element={<Bevereges/>}/>
    </Routes>
  );
}

export default Router;

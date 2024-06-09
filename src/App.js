import React, { useState } from "react";
import Nav from "./components/home/Nav";
import Footer from "./components/home/Footer";
import Router from "./router/Router";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import AddCart from "./pages/AddCart";

function App() {
  const [SideNav, setSideNav] = useState(false);
  const HandleSide = () => {
    setSideNav(false);
  };
  return (
    <section>
      <Nav setSideNav={setSideNav} SideNav={SideNav} />
      <div
        className={`${
          SideNav ? "" : "hidden"
        }  bg-white flex flex-col justify-between fixed z-10  h-[49rem] md:h-[55rem] md:w-[50%] w-full`}
      >
        {" "}
        <ul
          className={`flex gap-[30px] px-10 flex-col text-xl text-blue-900 font-medium  mt-[20px] py-4 `}
        >
          <NavLink to="/" onClick={HandleSide}>
            Home
          </NavLink>
          <li>Featured & New</li>
          <li>By Type</li>
          <li>By Brand</li>
          <li>By Country</li>
          <NavLink
            to="products"
            className={({ isActive }) => (isActive ? "underline" : "")}
            onClick={HandleSide}
          >
            All Products
          </NavLink>
          <li>Bevereges</li>
          <li>Special Deals</li>
        </ul>
        <NavLink
          to="/login"
          className="py-5 flex gap-2 items-center text-blue-900 px-10 font-semibold bg-[#eaeaea] text-xl"
          onClick={HandleSide}
        >
          <CgProfile />
          <p>Login</p>
        </NavLink>
      </div>
      <Router />
      <Footer />
    </section>
  );
}

export default App;

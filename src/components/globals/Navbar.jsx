import React from "react";
import ShopCart from "../containers/ShopCart";
import Categories from "../CategoriesNavList";
import { Link } from "react-router-dom";

export default function Nabvar() {
  
  return (
    <div className="navcont App-header">
      <p></p>
      <Link className="text-link shadow" to={"/"}>
        <h1 className="logo">Me gusta el Arte!!!</h1>
      </Link>
      <ShopCart />
      <Categories />
    </div>
  );
}

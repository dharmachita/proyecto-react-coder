import React from "react";
import { Link } from "react-router-dom";

import ShopCart from "../../globals/Cart/ShopCart";
import Categories from "../../globals/Cart/CategoriesNavList";


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

import React from "react";
import ShopCart from "../components/containers/ShopCart";
import Categories from "../components/CategoriesNavList";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function Nabvar() {
  const cartContext = useContext(CartContext);
  const totQty = cartContext.itemsCart.totalQty;

  return (
    <div className="navcont App-header">
      <p></p>
      <Link className="text-link shadow" to={"/"}>
        <h1 className="logo">Me gusta el Arte!!!</h1>
      </Link>
      <ShopCart />
      {totQty > 0 && <span className="span-cart">{totQty}</span>}
      <Categories />
    </div>
  );
}

import React, { useState,useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import CartWidget from "../../containers/CartWidget";
import { CartContext } from "../../../contexts/CartContext";

import "./Cart.css";

export default function ShopCart() {
  const cartContext = useContext(CartContext);
  const totQty = cartContext.itemsCart.totalQty;

  const [show, setShow] = useState(false);
  const action = () => {
    setShow(!show);
  };

  return (
    <div className="cart">
      <FontAwesomeIcon
        onClick={action}
        icon={faShoppingCart}
        size="sm"
        className="cart-icon"
      />{totQty > 0 && <span className="span-cart">{totQty} </span>}
      <CartWidget show={show} action={action} />
    </div>
  );
}

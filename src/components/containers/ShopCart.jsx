import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import CartWidget from "./CartWidget";
import "../../assets/WidgetCart.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

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

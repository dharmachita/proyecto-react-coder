import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { CartContext } from "../../../contexts/CartContext";

export default function ButtonAddCart({ item }) {
  const [click, setClick] = useState(false);
  const { addToCart } = useContext(CartContext);
  let history = useHistory();

  const handleClickGoCart = (e) => {
    if (click) {
      history.push("/cart");
    }else{
      e.target.innerText = "Finalizar Compra";
      e.target.className = "add-button color-clicked";
      addToCart(item);
      setClick(true);
    }
  };

  return (
    <button
      disabled={item.stock === 0}
      className={`add-button ${item.stock < 1 && "dis"}`}
      onClick={handleClickGoCart}
    >
      {item.stock < 1 ? "Producto Agotado" : "Agregar al carrito"}
    </button>
  );
}

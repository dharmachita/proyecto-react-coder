import React,{ useContext } from "react";
import { useHistory } from "react-router-dom";

import CartWidgetCard from "../globals/Cart/CartWidgetCard";
import { CartContext } from "../../contexts/CartContext";

//Estilos
import "./Containers.css";

export default function CartWidget({ show, action }) {
  const cartContext = useContext(CartContext);
  let history = useHistory();
  const handleClickGoCart = (e) => {
    history.push("/cart");
    action();
  };
  return (
    <div className={`widgetCart ${show ? "open" : "close"}`}>
      <p>Productos en el Carrito</p>
      <div className="button-container">
        <button
          onClick={handleClickGoCart}
          className="btn btn--primary btn--medium"
        >
          Ir al carrito
        </button>
        <button onClick={action} className="btn btn--outline btn--medium">
          Cerrar
        </button>
      </div>
      <div>
        {cartContext.itemsCart.items.length === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          cartContext.itemsCart.items.map((prod) => (
            <CartWidgetCard
              key={prod.producto.id}
              item={prod.producto.titulo}
              cantidad={prod.cantidad}
            />
          ))
        )}
      </div>
    </div>
  );
}

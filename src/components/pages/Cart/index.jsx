import React, { useContext,useLayoutEffect } from "react";
import {useHistory,Link} from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCreditCard } from "@fortawesome/free-solid-svg-icons";

import { CartContext } from "../../../contexts/CartContext";
import ItemCart from "../../globals/Items/ItemCart";

//Styles
import "./Cart.css";

export default function Cart() {
  const { itemsCart, vaciarCarrito } = useContext(CartContext);
  let history = useHistory();
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  const checkoutHandler = ()=>{
    history.push('/checkout');
  }

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {itemsCart.items.length === 0 ? (
        <>
        <p>No hay productos en el carrito</p>
        <p>Volver al <Link to={'/'}>Home</Link></p>
        </>
      ) : (
        <div className='item-cart-container'>
          <div>El total de su carrito es ${itemsCart.precioTotal}</div>
          <div>
            <button className='cart-btns empty' onClick={vaciarCarrito}>
              Vaciar Carrito <FontAwesomeIcon 
                size="lg"
                icon={faTrash} />  
              </button>
          </div>
          {itemsCart.items.map((item) => (
            <ItemCart
              key={item.producto.id}
              item={item.producto}
              cantidad={item.cantidad}
            />
          ))}
            <div>
              <button className='cart-btns finalize' onClick={checkoutHandler}>
                Finalizar Compra <FontAwesomeIcon 
                size="lg"
                icon={faCreditCard} />  
              </button>
            </div>
        </div>
      )}
    </div>
  );
}

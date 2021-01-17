import React from "react";
import { createContext, useState } from "react";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [itemsCart, setItemsCart] = useState({
    items: [],
    cantidadAgregar: 0,
    totalQty: 0
  });

  const eliminarProducto = (itm, qty) => {
    const index = itemsCart.items.findIndex(
      (find) => find.producto.id === itm.id
    );
    const arr = itemsCart.items;
    arr.splice(index, 1);
    setItemsCart({
      items: arr,
      totalQty: itemsCart.totalQty - qty,
      cantidadAgergar: 0
    });
  };

  const vaciarCarrito = () => {
    setItemsCart({
      items: [],
      cantidadAgregar: 0,
      totalQty: 0
    });
  };

  const addToCart = (item) => {
    itemsCart.items.filter((prod) => prod.producto.id === item.id).length === 0
      ? setItemsCart({
          ...itemsCart,
          items: [
            ...itemsCart.items,
            { producto: item, cantidad: itemsCart.cantidadAgregar }
          ],
          totalQty: itemsCart.totalQty + itemsCart.cantidadAgregar
        })
      : isInCart(item);
  };

  const isInCart = (item) => {
    const index = itemsCart.items.findIndex(
      (find) => find.producto.id === item.id
    );
    const arr = itemsCart.items;
    arr[index] = {
      ...arr[index],
      cantidad: arr[index].cantidad + itemsCart.cantidadAgregar
    };
    setItemsCart({
      ...itemsCart,
      items: arr,
      totalQty: itemsCart.totalQty + itemsCart.cantidadAgregar
    });
  };

  return (
    <CartContext.Provider
      value={{
        itemsCart,
        setItemsCart,
        eliminarProducto,
        vaciarCarrito,
        addToCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

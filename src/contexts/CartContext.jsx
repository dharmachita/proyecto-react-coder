import React from "react";
import { createContext, useState,useEffect } from "react";
export const CartContext = createContext();



const CartContextProvider = ({ children }) => {

  const wss=window.sessionStorage;

  const [itemsCart, setItemsCart] = useState({
    items: JSON.parse(wss.getItem('items'))||[],
    cantidadAgregar: 0,
    totalQty: parseInt(wss.getItem('totalQty'))||0,
    precioTotal: parseInt(wss.getItem('precioTotal'))||0
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
      cantidadAgergar: 0,
      precioTotal:itemsCart.precioTotal-(itm.precio*qty)
    });
  };

  const vaciarCarrito = () => {
    setItemsCart({
      items: [],
      cantidadAgregar: 0,
      totalQty: 0,
      precioTotal:0
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

  const actualizaTotal = (precio)=>{
    setItemsCart({
      ...itemsCart,
      precioTotal:itemsCart.precioTotal+precio
    })
  }

  useEffect(()=>{
    window.sessionStorage.setItem('totalQty',itemsCart.totalQty);
    window.sessionStorage.setItem('items',JSON.stringify(itemsCart.items));
    window.sessionStorage.setItem('precioTotal',JSON.stringify(itemsCart.precioTotal));

    // eslint-disable-next-line
  },[itemsCart])

  return (
    <CartContext.Provider
      value={{
        itemsCart,
        setItemsCart,
        eliminarProducto,
        vaciarCarrito,
        addToCart,
        actualizaTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

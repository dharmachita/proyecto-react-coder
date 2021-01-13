import {createContext,useState} from 'react';
export const CartContext = createContext();

const CartContextProvider = ({children})=>{

    const [itemsCart,setItemsCart] = useState({
        items:[],
        cantidadAgregar:0,
        totalQty:0
    });

    const eliminarProducto = (itm,qty)=>{
        const index=itemsCart.items.findIndex(find=>find.producto.id===itm.id);
        const arr = itemsCart.items;
        arr.splice(index,1)
        setItemsCart({
            items:arr,
            totalQty:itemsCart.totalQty-qty,
            cantidadAgergar:0
        })
    }

    return(
        <CartContext.Provider
            value={{
                itemsCart,
                setItemsCart,
                eliminarProducto
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
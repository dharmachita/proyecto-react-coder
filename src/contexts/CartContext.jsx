import {createContext,useState} from 'react';
export const CartContext = createContext();

const CartContextProvider = ({children})=>{

    const [itemsCart,setItemsCart] = useState({
        items:[],
        cantidadAgregar:0,
        totalQty:0
    });

    return(
        <CartContext.Provider
            value={{
                itemsCart,
                setItemsCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
import {useState,useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {CartContext} from '../contexts/CartContext';

export default function ButtonAddCart({item}){
    const [click,setClick] = useState(false);
    const {itemsCart,setItemsCart}=useContext(CartContext);
    let history = useHistory();

    const addToCart = () => {
        itemsCart.items.filter(prod=>prod.producto.id===item.id).length===0?
        setItemsCart({
            ...itemsCart,
            items:[...itemsCart.items,{producto:item,cantidad:itemsCart.cantidadAgregar}],
            totalQty: itemsCart.totalQty+itemsCart.cantidadAgregar
        }):
        isInCart()
    }

    const isInCart = ()=>{
        const index=itemsCart.items.findIndex(find=>find.producto.id===item.id);
        const arr = itemsCart.items;
        arr[index] = {...arr[index], cantidad: arr[index].cantidad+itemsCart.cantidadAgregar}
        setItemsCart({
            ...itemsCart,
            items:arr,
            totalQty: itemsCart.totalQty+itemsCart.cantidadAgregar
        })
    }

    const handleClickGoCart =(e)=>{ 
        if(click){
            history.push("/cart");
        }
        e.target.innerText="Finalizar Compra";
        e.target.className="add-button color-clicked";
        addToCart(item,);
        setClick(true);
    }

    return(
        <button 
            disabled={item.stock===0} 
            className={`add-button ${item.stock<1&&"dis"}`}
            onClick={handleClickGoCart}
        >
            {item.stock<1?"Producto Agotado":"Agregar al carrito"}
        </button>
    )
}
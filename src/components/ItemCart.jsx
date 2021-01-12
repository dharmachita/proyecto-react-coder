import {useContext} from 'react';
import {CartContext} from '../contexts/CartContext';

export default function ItemCart({item,cantidad}){
    const {itemsCart,setItemsCart}=useContext(CartContext);
    const eliminarProducto = ()=>{
        const index=itemsCart.items.findIndex(find=>find.producto.id===item.id);
        const arr = itemsCart.items;
        arr.splice(index,1)
        setItemsCart({
            items:arr,
            totalQty:itemsCart.totalQty-cantidad,
            cantidadAgergar:0
        })
    }
   
    return(
        <div className='item-cart'>
            <h2>{item.titulo}</h2>
            <p>Cantidad: {cantidad} unidades</p>
            <button onClick={eliminarProducto}>Eliminar Producto</button>
        </div>
    )
}
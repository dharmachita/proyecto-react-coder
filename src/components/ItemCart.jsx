import {useContext} from 'react';
import {CartContext} from '../contexts/CartContext';

export default function ItemCart({item,cantidad}){
    const {eliminarProducto}=useContext(CartContext);
        
    return(
        <div className='item-cart'>
            <h2>{item.titulo}</h2>
            <p>Cantidad: {cantidad} unidades</p>
            <button onClick={()=>eliminarProducto(item,cantidad)}>Eliminar Producto</button>
        </div>
    )
}
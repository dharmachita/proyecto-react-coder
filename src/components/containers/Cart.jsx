import {useContext} from 'react';
import {CartContext} from '../../contexts/CartContext';
import ItemCart from '../ItemCart';

export default function Cart(){
    const {itemsCart,setItemsCart}=useContext(CartContext);
    const vaciarCarrito = ()=>{
        setItemsCart({
            items:[],
            cantidadAgregar:0,
            totalQty:0
        });
    }
    return(
        <div>
            <h2>Carrito de Compras</h2>
            {
                itemsCart.items.length===0?
                <p>No hay productos en el carrito</p>:
                <div>
                    <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                    {itemsCart.items.map(item=>
                        <ItemCart 
                            key={item.producto.id}
                            item={item.producto}
                            cantidad={item.cantidad}
                        />
                        
                    )}  
                </div>
            }
        </div>
    )
}
import React from "react";
import {getFirestore} from '../db';
import { useContext,useEffect,useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import Imagen from './globals/Imagen';

export default function ItemCart({ item, cantidad }) {
  const db = getFirestore();
  const [url,setUrl]=useState("");
  const { eliminarProducto } = useContext(CartContext);
  const [ loading, setLoading ] = useState(true);
   
  useEffect(()=>{  
    setLoading(true);
    db.collection('products').doc(item.id).get()
      .then(qs=>{
          qs.exists &&  setUrl(qs.data().smImg);     
      }).catch(err=>{
          console.log("Error",err);
      }).finally(()=>{
        setLoading(false);
      })
    // eslint-disable-next-line
  },[])

  return (
    <div className="item-cart">
      {!loading&&
      <Imagen
        src={url}
        alt={item.titulo}
        fld={'img'}
      />
      }
      <div>
        <h2>{item.titulo}</h2>
        <p>{`Cantidad: ${cantidad} ${cantidad<2?"unidad":"unidades"}`}</p>
        <p>Precio por unidad: ${item.precio}</p>
        <p><strong>Total:</strong> ${item.precio*cantidad}</p>
        <button className='cart-btns delete' onClick={() => eliminarProducto(item, cantidad)}>
          Eliminar Producto <FontAwesomeIcon 
                  size="lg"
                  icon={faTimesCircle} />  
        </button>
      </div>
    </div>
  );
}

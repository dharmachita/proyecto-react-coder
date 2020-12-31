import {useState} from 'react';
import {useHistory} from 'react-router-dom';

export default function ButtonAddCart({stock}){
    const [click,setClick] = useState(false);
    let history = useHistory();

    const handleClickGoCart =(e)=>{ 
        if(click){
            history.push("/cart");
        }
        e.target.innerText="Ver Carrito";
        e.target.className="add-button color-clicked";
        setClick(true);
    }

    return(
        <button 
            disabled={stock===0} 
            className={`add-button ${stock<1&&"dis"}`}
            onClick={handleClickGoCart}
        >
            {stock<1?"Producto Agotado":"Agregar al carrito"}
        </button>
    )
}
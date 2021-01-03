import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import '../assets/WidgetCart.css';

export default function ShoppCart(){
    const [show,setShow] = useState(false);
    let history = useHistory();
    
    const action = ()=>{
        setShow(!show);
    }

    const handleClickGoCart =(e)=>{ 
        history.push("/cart");
        action();
    }

    return(
        <div className="cart">
            <FontAwesomeIcon onClick={action} icon={ faShoppingCart } size="sm"/>
            <div className={`widgetCart ${show ? 'open' : 'close'}`}>
                <p>Productos en el Carrito</p>
                <div className="button-container">
                    <button 
                    onClick={handleClickGoCart} 
                    className="btn btn--primary btn--medium"
                    >Ir al carrito
                    </button>
                    <button 
                    onClick={action} 
                    className="btn btn--outline btn--medium block"
                    >Cerrar widget
                    </button>
                </div>
            </div>
        </div>
    )
}

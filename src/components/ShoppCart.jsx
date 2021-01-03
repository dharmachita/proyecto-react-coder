import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import '../assets/WidgetCart.css';

export default function ShoppCart(){
    const [show,setShow] = useState(false);
    const action = ()=>{
        setShow(!show);
    }
    return(
        <div className="cart">
            <FontAwesomeIcon onClick={action} icon={ faShoppingCart } size="sm"/>
            <div className={`widgetCart ${show ? 'open' : 'close'}`}>
                <p>Productos en el Carrito</p>
                <button 
                onClick={action} 
                className="btn btn--outline btn--medium"
                >Cerrar widget
                </button>
            </div>
        </div>
    )
}

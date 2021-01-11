import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import CartWidget from './CartWidget';
import '../../assets/WidgetCart.css';

export default function ShopCart(){
    const [show,setShow] = useState(false);
    const action = ()=>{
        setShow(!show);
    }

    return(
        <div className="cart">
            <FontAwesomeIcon onClick={action} icon={ faShoppingCart } size="sm" className='cart-icon'/>
            <CartWidget show={show} action={action}/>
        </div>
    )
}

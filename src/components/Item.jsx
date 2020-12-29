import {Link} from 'react-router-dom';
import '../assets/style.css';
import ItemCount from '../globals/ItemCount';
import img from '../assets/150.png';

export default function Item(props){
    const {	id,title,price,alt,stock } = props

    return(
    
        <div className="slider-box"> 
            <Link to={`/item/${id}`}>
                <h3 className="detail">{title}</h3>
                <div className="img-box">
                    <img src={img} alt={alt}/>
                </div>
            </Link>
            <span className="price">{`Precio: $${price}`}</span>
            <ItemCount 
                stock={stock}
                init={stock<1?"0":"1"}
            />
            <button className={`cart-button ${stock<1&&"dis"}`}>
                {stock<1?"Producto Agotado":"Agregar al carrito"}
            </button>
        </div>
        
    )
}
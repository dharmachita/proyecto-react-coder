import {Link} from 'react-router-dom';
import '../assets/style.css';
import img from '../assets/150.png';

export default function Item(props){
    const {id,title,price,alt,stock} = props

    return(
    
        <div className="slider-box"> 
            <Link to={`/item/${id}`}>
                <h3 className="detail">{title} </h3>
                {/* eslint-disable-next-line*/}
                {stock==0&&<span className='no-stock-title'>**Sin stock**</span>}
                <div className="img-box">
                    <img src={img} alt={alt}/>
                </div>
                <span className="price">{`Precio: $${price}`}</span>
                <button className='add-button'>Ver Producto</button>
            </Link>

        </div>
        
    )
}
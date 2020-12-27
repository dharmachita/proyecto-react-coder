import {Link} from 'react-router-dom';
import ItemCount from '../globals/ItemCount';

export default function ItemDetail(props){
    const {titulo,bigImg,precio,alt,stock,categoria,descripcion} = props;
    
    /*
    Mejorar los estilos del ItemDetail
    Se necesita agregar un button para agregar al carrito y 
    el contador de productos
    */
    
    return (
        <>
            <h2>{titulo}</h2>
            <div className="detail-img-desc">
                <figure>
                    <img src={bigImg} alt={alt}/>
                    <div className="under-img">
                        <figcaption className="fig-cap">Cantidad en Stock: <span>{stock}</span></figcaption>
                    <ItemCount 
                        stock={stock}
                        init={stock<1?"0":"1"}
                    />
                    <button className={`add-button ${stock<1&&"dis"}`}>
                        {stock<1?"Producto Agotado":"Agregar al carrito"}
                    </button>
                    </div>
                    </figure>
    
                <div className="detail-desc">
                    <h4>Precio: $<span>{precio}</span></h4>
                    <p>{descripcion}</p>
                </div>
            </div> 
            <p className="mas-prod">Podés encontrar más productos similares en 
                <Link to={`/categoria/${categoria}`}>
                    <span className="category-span">{` ${categoria}`}</span>
                </Link>
            </p>
        </>
    )
}
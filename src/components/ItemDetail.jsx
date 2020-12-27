import {Link} from 'react-router-dom';

export default function ItemDetail(props){
    const {titulo,bigImg,precio,alt,stock,categoria,descripcion} = props;
    
    /*
    Mejorar los estilos del ItemDetail
    Se necesita agregar un button para agregar al carrito y 
    el contador de productos
    */
    
    return (
        <>
            <p>{titulo}</p>
            <img src={bigImg} alt={alt}/>
            <p>Precio: $<span>{precio}</span></p>
            <p>Cantidad en Stock: <span>{stock}</span></p>
            <p>{descripcion}</p>
            <p>Podés encontrar más productos similares en 
                <Link to={`/categoria/${categoria}`}>
                    <span className="category-span">{` ${categoria}`}</span>
                </Link>
            </p>
        </>
    )
}
import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../globals/ItemCount";
import ButtonAddCart from "../globals/ButtonAddCart";
import Imagen from "../globals/Imagen";

export default function ItemDetail(props) {
  const { titulo, precio, alt, stock, categoria, descripcion, img } = props;
  return (
    <>
      <h2>{titulo}</h2>
      <div className="detail-img-desc">
        <figure className="img-container">
          <div className='lg-imagen-container'>
            <Imagen src={img} alt={alt} fld='img' size='lg'/>
          </div>
          <div className="under-img">
            <figcaption className="fig-cap">
              Cantidad en Stock: <span>{stock}</span>
            </figcaption>
            <div className="button-container">
              <ItemCount stock={stock} init={stock < 1 ? "0" : "1"} />
              <ButtonAddCart item={props} />
            </div>
          </div>
        </figure>

        <div className="detail-desc">
          <h4>
            Precio: $<span>{precio}</span>
          </h4>
          <p className='desc'>{descripcion}</p>
        </div>
      </div>
      <p className="mas-prod">
        Podés encontrar más productos similares en -->
        <Link to={`/categoria/${categoria}`}>
          <span className="category-span">{` ${categoria}`}</span>
        </Link>
      </p>
    </>
  );
}

import React from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect,useLayoutEffect } from "react";
import { Bars } from "svg-loaders-react";
import { getFirestore } from "../../db";
import { Link } from "react-router-dom";

export default function ItemDetailContainer() {
  const [producto, setProducto] = useState();
  const [isLoading, setLoading] = useState(true);
  const [isEmpty, setEmpty] = useState(true);
  const { itemid } = useParams();
  const [msj, setMsj] = useState();
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  useEffect(() => {
    const db = getFirestore();
    const itCol = db.collection("products").doc(itemid);
    itCol
      .get()
      .then((querySnapshot) => {
        !querySnapshot.exists ? empty() : dcmts(querySnapshot);
      })
      .catch((e) => {
        error(e);
      })
      .finally(() => {
        setLoading(false);
        console.log("Request finalizada");
      });
      // eslint-disable-next-line
  }, []);
  
  const dcmts = (qs) => {
    const document = { ...qs.data(), id: qs.id };
    setEmpty(false);
    setProducto(document);
  };

  const empty = (e) => {
    setEmpty(true)
    setMsj("El producto solicitado no existe");
  };

  const error = (e) => {
    setMsj("Se ha producido un error en la búsqueda. Intente mas tarde");
    console.error("Se produjo un error", e);
  };

  return (
    <div className="detail-cont">
      {isLoading ? (
        <Bars fill="brown" />
      ) : 
      isEmpty ?
      (<div>
        <h3>{msj}</h3>
        <Link to={'/'}>
          <span className="category-span">Vovler a la página principal</span>
        </Link> 
      </div>):
      (
        <ItemDetail
          id={producto.id}
          titulo={producto.titulo}
          img={producto.lgImg}
          precio={producto.precio}
          alt={producto.alt}
          stock={producto.stock}
          categoria={producto.catId}
          descripcion={producto.descripcion}
        />
      ) 
      }
    </div>
  );
}




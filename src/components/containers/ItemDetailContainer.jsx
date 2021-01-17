import React from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Bars } from "svg-loaders-react";
import { getFirestore } from "../../db";

export default function ItemDetailContainer() {
  const [producto, setProducto] = useState();
  const [isLoading, setLoading] = useState(true);
  const { itemid } = useParams();
  const [msj, setMsj] = useState();

  useEffect(() => {
    const db = getFirestore();
    const itCol = db.collection("products");
    itCol
      .get()
      .then((querySnapshot) => {
        querySnapshot.size === 0 ? empty() : dcmts(querySnapshot);
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
    const documents = qs.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setProducto(documents.find((prod) => prod.id === itemid));
  };

  const empty = (e) => {
    setMsj("No hemos encontrado productos para mostrar");
  };

  const error = (e) => {
    setMsj("Se ha producido un error en la búsqueda. Intente mas tarde");
    console.error("Se produjo un error", e);
  };

  return (
    <div className="detail-cont">
      {isLoading ? (
        <Bars fill="brown" />
      ) : producto ? (
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
      ) : (
        <div>
          <h3>{msj}</h3>
        </div>
      )}
    </div>
  );
}

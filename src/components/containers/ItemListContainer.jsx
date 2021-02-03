import React,{ useState, useEffect } from "react";

//Loader
import { Bars } from "svg-loaders-react";

import Item from "../globals/Items/Item";
import Error from "../globals/general/Error";

//Estilos
import "./Containers.css";

export default function ItemListContainer({filter}) {

  const [productos, setProductos] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [err, setError] = useState(false);
  const [msj, setMsj] = useState();
  const [emp, setEmpty] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    setEmpty(false);
    filter
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
  }, [filter]);

  const dcmts = (qs) => {
    const documents = qs.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setProductos(documents);
  };

  const empty = (e) => {
    setMsj("No hemos encontrado productos para mostrar");
    setProductos([]);
    setEmpty(true);
  };

  const error = (e) => {
    setMsj("Se ha producido un error en la búsqueda. Intente mas tarde");
    setError(true);
    console.error("Se produjo un error", e);
  };

  
  return (
    <>
      {
        <div className="itemList">
        {!isLoading ? (
          err ? (
            <Error mensaje={msj} />
          ) : emp ? (
            <p>{msj}</p>
          ) : (
            productos.map((producto) => (
              <Item
                key={producto.id}
                id={producto.id}
                img={producto.smImg}
                alt={producto.titulo}
                title={producto.titulo}
                price={producto.precio}
                stock={producto.stock}
              />
            ))
          )
        ) : (
          <Bars fill="brown" />
        )}
      </div>
    }
</>      
);}

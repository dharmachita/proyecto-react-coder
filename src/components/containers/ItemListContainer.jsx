import React from "react";
import { Bars } from "svg-loaders-react";
import { useState, useEffect } from "react";
import Item from "../Item";
import Error from "../Error";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../db/index";

export default function ItemListContainer() {
  const { caturl } = useParams();
  const [productos, setProductos] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [err, setError] = useState(false);
  const [msj, setMsj] = useState();
  const [emp, setEmpty] = useState(false);
  const db = getFirestore();
  const [filter,setFilter]=useState(db.collection("products"));

  //useEffect para ejecutar la llamada cuando se monta el componente
  useEffect(() => {
    //Filtro - si hay caturl uso condicion where
    caturl?setFilter(db.collection("products").where("catId","==",caturl)):
    setFilter(db.collection("products"));
    //arranco el isLoading en true para que se renderize el loader
    setLoading(true);
    //Hago la consulta en firestore (esto funciona bien cuando no paso el filtro)
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
      //hago que se ejecute el efecto cada vez que cambia el valor de caturl
  }, [caturl]);

  //funciones que se ejecutan en el manejo de .then.catch.finally
  const dcmts = (qs) => {
    const documents = qs.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setProductos(documents);
    console.log(caturl);
    console.log(productos);
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

  //<h2>{catName ? catName.titulo : `Productos Destacados`}</h2>
  return (
    <>
      
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
    </>
  );
}

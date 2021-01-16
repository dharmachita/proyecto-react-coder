import React,{useEffect,useState} from "react";
import { NavLink } from "react-router-dom";
import { getFirestore } from "../db";

export default function CatNavList() {
  const [categorias, setCategorias] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [msj, setMsj] = useState();

  useEffect(() => {
    const db = getFirestore();
    const itCol = db.collection("categories");
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
    setCategorias(documents);
  };

  const empty = (e) => {
    setMsj("No hemos encontrado productos para mostrar");
  };

  const error = (e) => {
    setMsj("Se ha producido un error en la búsqueda. Intente mas tarde");
    console.error("Se produjo un error", e);
  };

  return (
    <ul id="catnav">
      {categorias.map((categoria, index) => (
        <li key={index}>
          <NavLink
            to={`/categoria/${categoria.url}`}
            className="text-link shadow"
          >
            {categoria.titulo}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

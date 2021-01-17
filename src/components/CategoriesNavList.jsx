import React,{useEffect,useState} from "react";
import { NavLink } from "react-router-dom";
import { getFirestore } from "../db";

export default function CatNavList() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itCol = db.collection("categories");
    itCol
      .get()
      .then((querySnapshot) => {
        querySnapshot.size === 0 ? console.log("No hay categorias") : dcmts(querySnapshot);
      })
      .catch((e) => {
        error(e);
      })
      // eslint-disable-next-line
  }, []);
  
  const dcmts = (qs) => {
    const documents = qs.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setCategorias(documents);
  };

  const error = (e) => {
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

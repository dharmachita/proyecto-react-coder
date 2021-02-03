import React, {useLayoutEffect} from "react";
import {Link} from "react-router-dom";

import "./404.css"

export default function Cuatrocientoscuatro() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  return (
      <>
        <h1 className="error">404</h1>
        <h2 className="error h2">Página no encontrada</h2>
        <Link to={"/"}>Volver al Home</Link>
      </>
  );
}

import React from "react";
import ItemListContainer from "./containers/ItemListContainer";
import { getFirestore } from "../db/index";


export default function Home() {
  const db = getFirestore().collection("products");
    
  return (
    <div>
      <h1>Productos Destacados!!!</h1>
      <ItemListContainer
        filter={db}
      />
    </div>
  );
}

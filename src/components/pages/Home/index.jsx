import React, {useLayoutEffect} from "react";

import ItemListContainer from "../../containers/ItemListContainer";

//DB
import { getFirestore } from "../../../db";


export default function Home() {
  const db = getFirestore().collection("products");
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
    
  return (
    <div>
      <h1>Productos Destacados!!!</h1>
      <ItemListContainer
        filter={db}
      />
    </div>
  );
}

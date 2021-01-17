import React, {useEffect,useState} from "react";
import ItemListContainer from "./containers/ItemListContainer";
import {useParams} from 'react-router-dom';
import { getFirestore } from "../db/index";


export default function Categories() {
  const {caturl} = useParams();
  const db = getFirestore().collection("products");
  const [filter,setFilter]=useState(db);
  
  useEffect(()=>{
    setFilter(db.where("catId","==",caturl))
    // eslint-disable-next-line
  },[caturl])
  
  return (
    <div>
      <h1>{caturl}</h1>
      <ItemListContainer 
        filter={filter}
      />
    </div>
  );
}

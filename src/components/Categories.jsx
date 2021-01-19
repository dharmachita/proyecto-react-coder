import React, {useEffect,useState,useLayoutEffect} from "react";
import ItemListContainer from "./containers/ItemListContainer";
import { useParams, Link, useHistory} from 'react-router-dom';
import { getFirestore } from "../db/index";


export default function Categories() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  const {caturl} = useParams();
  const db = getFirestore();
  const [filter,setFilter]=useState(db.collection("products"));
  const [isCateg, setIsCateg]=useState(false);
  const [isLoading, setLoading]=useState(true);
  const [categoria, setCategoria]=useState([]);
  let history = useHistory();

  useEffect(()=>{  
    const categories=db.collection("categories");
    categories.where("url","==",caturl).get()
        .then(querySnapshot=>{
            querySnapshot.size > 0 &&  isCategTrue(querySnapshot);          
        }).catch(err=>{
            console.log("Error",err);
            history.push("/");
        }).finally(()=>{
            setLoading(false);
        })
    setFilter(db.collection("products").where("catId","==",caturl))
    // eslint-disable-next-line
  },[caturl])
  
  const isCategTrue=(qs)=>{
    setIsCateg(true);
    const documents = qs.docs.map((doc) => ({ ...doc.data()}));
    setCategoria(documents);
  }

  return (
    <div>
      {
          isLoading?
          <div></div>:
          isCateg?
            <>
            <h1>***{categoria[0].titulo}***</h1>
            <ItemListContainer 
                filter={filter}
            />
            </>:
            <>  
                <h3>La categoría <strong>{caturl}</strong> No existe</h3>
                <Link to={'/'}>
                    <span className="category-span">Vovler a la página principal</span>
                </Link> 
            </> 
      }

    </div>
  );
}

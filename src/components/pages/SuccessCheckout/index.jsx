import React, {useLayoutEffect,useEffect,useState} from "react";
import { useHistory, useParams} from 'react-router-dom';

//DB
import {getFirestore} from '../../../db';

export default function SuccessCheckout() {
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  },[]);

  const history=useHistory();
  const db = getFirestore();
  const {idOrden} = useParams();
  const [loading,setLoading]=useState(true);

  useEffect(() => {
    const order = db.collection("orders").doc(idOrden);
    order
      .get()
      .then((querySnapshot) => {
        !querySnapshot.exists && 
        history.push('/');
      })
      .catch((e) => {
        error(e);
      })
      .finally(() => {
        console.log("Request finalizada");
        setLoading(false);
      });
      // eslint-disable-next-line
  }, []);

  const error = (e) => {
    console.error("Se produjo un error", e);
    history.push('/');
  };

  return (
    <div>
      {
        loading||
        <>
          <h2>Felicitaciones tu compra fue aprobada</h2>
          <p>Su código de seguimiento es <strong>{idOrden}</strong></p>
        </>
      }
      
    </div>
  );
}
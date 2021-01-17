import React from 'react';
import {getFirestore} from '../db';
import productos from './productos.json';

export default function Upload(){

    const db=getFirestore()
    const handleUpload=()=>{
        productos.forEach((obj) => {
            db.collection("products").add({
                catId:obj.catId,
                descripcion:obj.descripcion,
                lgImg:obj.lgImg,
                precio:obj.precio,
                smImg:obj.smImg,
                stock:obj.stock,
                titulo:obj.titulo
            }).then((docRef) => {
                console.log("Producto registrado con ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error al agregar un documento: ", error);
            });
        });
    }

    return<button onClick={handleUpload}>Cargar</button>
}
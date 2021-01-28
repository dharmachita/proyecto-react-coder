//Seleccionar el JSON con productos
const productos = require("../utils/productos.json");
const firebase = require("firebase");
require("firebase/firestore");

//Editar las variables del entorno con los KEYS provistos por firebase
firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: "me-gusta-el-arte",
});

var db = firebase.firestore();

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
    })
})
  
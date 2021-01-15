const firebase = require("firebase");
require("firebase/firestore");
firebase.initializeApp({
    apiKey: "API-KEY",
    authDomain: "DOMINIO",
    projectId: "ID-DEL-PROYECTO"
});
var db = firebase.firestore();
var productos =[
    {
        "id": 1,
        "categoria": "branding",
        "categoriaBonita": "Branding",
        "nombre": "Paquete Básico",
        "descripcion": "Incluye: Diseño de logo, paleta de colores, articulaciones del logo, manual de identidad, brandeo de redes sociales.",
        "precio": 550000,
        "foto": "https://picsum.photos/seed/b01/800",
        "thumb": "https://picsum.photos/seed/b01/300",
        "destacado": false
    },
    {
        "id": 2,
        "categoria": "branding",
        "categoriaBonita": "Branding",
        "nombre": "Paquete Mediano",
        "descripcion": "Incluye: Diseño de logo, paleta de colores, articulaciones del logo, manual de identidad, brandeo de redes sociales.",
        "precio": 850000,
        "foto": "https://picsum.photos/seed/b02/800",
        "thumb": "https://picsum.photos/seed/b02/300",
        "destacado": false
    }
]
productos.forEach((obj) => {
    db.collection("productos").add({
        id: obj.id,
        categoria: obj.categoria,
        categoriaBonita: obj.categoriaBonita,
        nombre: obj.nombre,
        descripcion: obj.descripcion,
        precio: obj.precio,
        foto: obj.foto,
        thumb: obj.thumb,
        destacado: obj.destacado
    }).then((docRef) => {
        console.log("Producto registrado con ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error al agregar un documento: ", error);
    });
});
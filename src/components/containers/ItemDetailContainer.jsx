import ItemDetail from '../ItemDetail';
import {useParams} from 'react-router-dom';
import api from '../../utils/productos.json';
import {useState,useEffect} from 'react';
import {Bars} from 'svg-loaders-react';

export default function ItemDetailContainer(){

    const [producto,setProducto] = useState();
    const [isLoading,setLoading] = useState(true);
    const {itemid} = useParams();


    const buscarEnApi = new Promise((res,rej)=>{
        setTimeout(()=>{
            true?res(api):rej("Error 500");
                }, 2000)
        })
    
    useEffect(()=>{
        setLoading(true);
        buscarEnApi
        .then(result=>{
            //eslint-disable-next-line
            setProducto(api.find(prod=>prod.id==itemid));
            setLoading(false);
        })
        .catch((err)=>{
            console.error(err);
        })
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return(
            <div className="detail-cont">{
                
                isLoading?
                    <Bars fill="brown"/>:   
                        producto?
                        <ItemDetail 
                            titulo={producto.titulo}
                            bigImg={producto.bigImg}
                            precio={producto.precio}
                            alt={producto.alt}
                            stock={producto.stock}
                            categoria={producto.categoria}
                            descripcion={producto.descripcion}
                        />:
                        <div>
                            <h3>Producto no encontrado</h3>
                            <p>Lo sentimos, el producto  
                                no se encuentra o no está disponible.
                            </p>
                        </div>
                }
            </div>
    )
}
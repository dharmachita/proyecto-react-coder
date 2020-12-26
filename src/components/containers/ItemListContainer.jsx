import {Bars} from 'svg-loaders-react';
import api from '../../utils/productos.json';
import {useState,useEffect} from 'react';
import Item from '../Item';
import Error from '../Error';
import {useParams} from 'react-router-dom';

export default function ItemListContainer(){
	 
	const {catid} = useParams();
   const [productos,setProductos] = useState([]);
   const [error,setError] = useState();
    
    //Emulación de búsqueda de datos en API
    const buscarEnApi = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      true?resolve(api):reject("Error 500");
        }, 2000)
    })
    
    //useEffect para ejecutar la llamada cuando se monta el componente
    useEffect(()=>{
        buscarEnApi
        .then(result=>{
            setProductos(result);
        })
        .catch((err)=>{
            console.error(err);
            setError("Lo sentimos, no hemos podido cargar los productos :( ");
        })
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
	 
	 
    return(
        <div className="itemList"> 
            {
					<>
					<h1>{catid?catid:`Productos Destacados`}</h1>
                {error?
                	<Error 
                     mensaje={error}
						/>:
                  productos.length?
                    productos.map(producto=>
							<Item 
								key={producto.id}
								id={producto.id}
								title={producto.titulo}
								img={producto.url}
								price={producto.precio}
								alt={producto.alt} 
								stock={producto.stock}
							/>
						  ):
                    <Bars />
						}
					</>
            }
            
        </div>
    ) 
}
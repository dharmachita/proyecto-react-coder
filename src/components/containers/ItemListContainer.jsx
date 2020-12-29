import {Bars} from 'svg-loaders-react';
import api from '../../utils/productos.json';
import {useState,useEffect} from 'react';
import Item from '../Item';
import Error from '../Error';
import {useParams} from 'react-router-dom';
import categorias from '../../utils/categories.json';

export default function ItemListContainer(){
	 
    const {catid} = useParams();
    const [productos,setProductos] = useState([]);
    const [isLoading,setLoading] = useState(true);
    const [error,setError] = useState();
    
    //Filtrar por categoria
    const catName=catid&&categorias.find(cat=>cat.cat===catid);
    const isCategory = catName?api.filter(prods=>prods.categoria===catid):api;
    

    //Emulación de búsqueda de datos en API
    const buscarEnApi = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        true?resolve(isCategory):reject("Error 500");
            }, 2000)
    })
    
    //useEffect para ejecutar la llamada cuando se monta el componente
    useEffect(()=>{
        setLoading(true);
        buscarEnApi
        .then(result=>{
            setProductos(result);
            setLoading(false);
        })
        .catch((err)=>{
            console.error(err);
            setError("Lo sentimos, no hemos podido cargar los productos :( ");
        })
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[catid])
        	 
    return(
        
            <>
                <h2>{catName?catName.titulo:`Productos Destacados`}</h2>
                <div className="itemList"> 
                    {error?
                	    <Error 
                            mensaje={error}
						/>:
                        !isLoading?
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
                        <Bars fill="brown"/>
                    }
                </div>
			</>
 
    ) 
}
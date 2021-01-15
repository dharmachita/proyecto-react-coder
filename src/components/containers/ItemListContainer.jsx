import {Bars} from 'svg-loaders-react';
import api from '../../utils/productos.json';
import {useState,useEffect} from 'react';
import Item from '../Item';
import Error from '../Error';
import {useParams} from 'react-router-dom';
import categorias from '../../utils/categories.json';
import {getFirestore} from '../../db/index';

export default function ItemListContainer(){
	 
    const {catid} = useParams();
    const [productos,setProductos] = useState([]);
    const [isLoading,setLoading] = useState(true);
    const [err,setError] = useState(false);
    const [msj, setMsj] = useState();
    const [emp, setEmpty] = useState(false);

    //Filtrar por categoria
    const catName=catid&&categorias.find(cat=>cat.cat===catid);
    const isCategory = catName?api.filter(prods=>prods.categoria===catid):api;
    
    
    //useEffect para ejecutar la llamada cuando se monta el componente  
    useEffect(() => {
        const db = getFirestore();
        const itCol = db.collection("products");
        itCol
          .get()
          .then((querySnapshot) => {
            querySnapshot.size === 0
              ? empty()
              : dcmts(querySnapshot);
          })
          .catch((e) => {
            error(e);
          })
          .finally(() => {
            setLoading(false);
            console.log("Request finalizada");
          });
      }, []);

      const dcmts = (qs) =>{
        const documents = qs.docs.map(doc => ({...doc.data(), id: doc.id}));
        setProductos(documents);
      }

      const empty = (e) => {
        setMsj("No hemos encontrado productos para mostrar");
        setEmpty(true);
      };
    
      const error = (e) => {
        setMsj("Se ha producido un error en la búsqueda. Intente mas tarde");
        setError(true);
        console.error("Se produjo un error", e);
      };



    return(
        
            <>
                <h2>{catName?catName.titulo:`Productos Destacados`}</h2>
                <div className="itemList"> 
                    {              	    
                        !isLoading?
                            err?
                                <Error 
                                    mensaje={msj}
                                />:
                                emp?
                                    <p>{msj}</p>:
                                    productos.map((producto)=>
                                        <Item 
                                           key={producto.id}
                                           id={producto.id}
                                           img=''
                                           alt={producto.titulo}
                                           title={producto.titulo}
                                           price={producto.precio}
                                           stock={producto.stock}
                                        />
                                    
                                    ):
                                    <Bars fill="brown"/>
                    }
                </div>
			</>
 
    ) 
}
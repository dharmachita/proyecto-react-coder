import ItemDetail from '../ItemDetail';
import {useParams} from 'react-router-dom';
import productos from '../../utils/productos.json';

export default function ItemDetailContainer(){

    const {itemid} = useParams();
    // eslint-disable-next-line
    const producto = productos.find(prod=>prod.id==itemid);

    return(
        <ItemDetail 
            titulo={producto.titulo}
        />
    )
}
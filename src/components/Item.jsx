import {Link} from 'react-router-dom';

export default function Item(props){
    const {id} = props

    return(
    <>
    <p>Soy un Item</p>
    <Link to={`item/${id}`}>Detalle</Link>    
    </>
    )
}
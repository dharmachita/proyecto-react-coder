import ShoppCart from '../components/ShoppCart';
import Categories from '../components/CategoriesNavList';
import {Link} from 'react-router-dom';

export default function Nabvar(){
	//Cantidad de productos en el carrito - HARDCODEADO
	const cantidad = 0;
	
	return(

		<div className="navcont App-header">
			<p></p>
			<Link className="text-link" to={"/"}><h1 className="logo">Me gusta el Arte!!!</h1></Link>
			<ShoppCart />
			{cantidad>0&& <span className="span-cart">{cantidad}</span>}
            <Categories />
		</div>

	)
}
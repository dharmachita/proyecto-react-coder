import ShoppCart from '../components/ShoppCart';
import Categories from '../components/CategoriesNavList';

export default function Nabvar(){
	//Cantidad de productos en el carrito - HARDCODEADO
	const cantidad = 0;
	
	return(

		<div className="navcont App-header">
			<p></p>
			<h1 className="logo">Me gusta el Arte!!!</h1>
			<ShoppCart />
			{cantidad>0&& <span className="span-cart">{cantidad}</span>}
            <Categories />
		</div>

	)
}
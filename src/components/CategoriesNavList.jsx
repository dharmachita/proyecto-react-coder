import categorias from '../utils/categories.json';
import {NavLink} from 'react-router-dom';

export default function CatNavList(){


    return(
        <ul id="catnav">
        {
            categorias.map((categoria,index)=>
                <li 
                    key={index}
                >
                    <NavLink 
                    to={`/categoria/${categoria.cat}`}
                    className="text-link"
                    >
                        {categoria.titulo}
                    </NavLink>
                </li>
            )
        }      
        </ul>
    )
}
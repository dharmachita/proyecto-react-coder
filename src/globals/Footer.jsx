import pagos from '../assets/tarjetas.png';
import {Link} from 'react-router-dom';

export default function Footer(){
    return(
        <div className="footer">
            <img 
                src={pagos}
                alt="pagos con tarjetas">    
            </img>
            <Link to={"/"}><p className="footer-link">2020 - megustaelarte.com</p></Link>
        </div>
    )
}
import pagos from '../assets/tarjetas.png';

export default function Footer(){
    return(
        <div className="footer">
            <img 
                src={pagos}
                alt="pagos con tarjetas">    
            </img>
            <p>2020 - megustaelarte.com</p>
        </div>
    )
}
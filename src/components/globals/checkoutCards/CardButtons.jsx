//Estilos
import "./CheckoutCards.css";

export default function CardButton({anterior,siguiente,next,pos}) {
    return(
        <div className='card check-nav'>
            <button className='btn-ck back' onClick={anterior}>Atrás</button>
            <button className={`btn-ck ${next?'next':'disabled'}`}
                    onClick={siguiente}
                    disabled={!next}>
                {pos===3?'Pagar':'Siguiente'}
            </button>
        </div>
    )
}
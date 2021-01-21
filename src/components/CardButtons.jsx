export default function CardButton({anterior,siguiente,next,pos}) {
    return(
        <div className='card check-nav'>
            <button className='btn back' onClick={anterior}>Atrás</button>
            <button className='btn next' 
                    onClick={siguiente}
                    disabled={!next}>
                {pos===3?'Pagar':'Siguiente'}
            </button>
        </div>
    )
}
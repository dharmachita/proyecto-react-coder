export default function CartWidgetCard({item,cantidad}){
    return(
        <div className='widget-card'>
            <p>{item} - <span>Cantidad: {cantidad}</span></p>
        </div>
    )    
}
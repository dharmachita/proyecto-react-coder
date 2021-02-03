import { useHistory } from "react-router-dom";

//Estilos
import "./Modal.css";

export default function Modal({title,msj,show,setShow}){

    let history = useHistory();
    
    return(
        <div className={show?"modal":"modal off"}>
            <h2>{title}</h2>
            <div className="content">{msj}</div>
            <div className="actions">
                <button 
                    className="toggle-button close-modal"
                    onClick={()=>setShow(false)}>
                    Seguir Comprando
                </button>
                <button 
                    className="toggle-button see-cart"
                    onClick={()=>history.push("/cart")}
                    >
                    Ver Carrito
                </button>
            </div>
        </div>
    )
}
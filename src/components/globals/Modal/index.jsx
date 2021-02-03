import "./Modal.css";

export default function Modal({title,msj,fn}){

    return(
        <div className="modal" id="modal">
            <h2>{title}</h2>
            <div className="content">{msj}</div>
            <div className="actions">
                <button className="toggle-button" onClick={this.onClose}>
                    Seguir Comprando
                </button>
                <button className="toggle-button" onClick={this.onClose}>
                    Ver Carrito
                </button>
            </div>
        </div>
    )
}
import React from 'react';

//Estilos
import "./CheckoutCards.css";

export default function CardData({pos,data,err,handleInputChange,cart,loading,setData}) {
   
    return(
        <div className='card datos'>
            <div className={`${pos===1?'active':'hide'}`}>
                <h4>Datos de Contacto</h4>
                <form className='form-container'> 
                    <div>
                        <label htmlFor="nombre">Nombre:</label>
                    </div>
                    <div>
                        <input onChange={handleInputChange} 
                        type="text" 
                        name='nombre' 
                        value={data.nombre}
                        placeholder='Fede'
                        />
                        <p className={err.nombre.error?'error':'hide'}>{err.nombre.msjError}</p>
                    </div>
                
                    <div>
                        <label htmlFor="apellido">Apellido:</label>
                    </div>
                    <div>
                        <input onChange={handleInputChange} 
                                type="text" 
                                name='apellido' 
                                value={data.apellido}
                                placeholder='Miranda'
                        />
                        <p className={err.apellido.error?'error':'hide'}>{err.apellido.msjError}</p>
                    </div>

                    <div>
                        <label htmlFor="email">email:</label>
                    </div>
                    <div>
                        <input onBlur={handleInputChange} 
                                onChange={(e)=>{
                                    setData({...data,
                                         [e.target.name]:e.target.value})
                                 }}
                                type="email" 
                                name='email'         
                                placeholder='fede@miranda.com'/>
                        <p className={err.email.error?'error':'hide'}>{err.email.msjError}</p>
                    </div>
                    <div>
                        <label htmlFor="telefono">Teléfono:</label>
                    </div>
                    <div>
                        <input onChange={handleInputChange} 
                                type="tel" 
                                name='telefono' 
                                value={data.telefono}                
                                placeholder='1133334444'
                                data-inputmask="'mask':'(99) 9999 - 9999'"
                        />
                        <p className={err.telefono.error?'error':'hide'}>{err.telefono.msjError}</p>
                    </div>
                </form>
            </div>    

            <div className={`${pos===2?'active':'hide'}`}>
                <h4>Dirección de Entrega</h4>
                <form className='form-container'>
                    <div>
                        <label htmlFor="provincia">Provincia:</label>
                    </div>
                    <div>    
                        <input onChange={handleInputChange} 
                                type="text" 
                                name='provincia' 
                                value={data.provincia}
                                placeholder='Misiones'
                        />
                        <p className={err.provincia.error?'error':'hide'}>{err.provincia.msjError}</p>
                    </div>
                    <div>
                        <label htmlFor="ciudad">Ciudad:</label>
                    </div>
                    <div>    
                        <input onChange={handleInputChange} 
                                type="text" 
                                name='ciudad' 
                                value={data.ciudad}
                                placeholder='Springfield'
                        />
                        <p className={err.ciudad.error?'error':'hide'}>{err.ciudad.msjError}</p>
                    </div>
                    <div>
                        <label htmlFor="cp">CP:</label>
                    </div>
                    <div>
                        <input onChange={handleInputChange} 
                                type="text" 
                                name='cp' 
                                value={data.cp}
                                placeholder='3378'
                        />
                    </div>
                    <div>
                        <label htmlFor="calle">Calle y Nº:</label>
                    </div>
                    <div>    
                        <input onChange={handleInputChange} 
                                type="text" 
                                name='calle' 
                                value={data.calle}
                                placeholder='Calle Falsa 123'
                        />       
                    </div>
                </form>    
            </div>

            <div className={`${pos===3?'active':'hide'}`}>
            <h4>Confirmación de Productos</h4>
            {
            loading?
            <div>Cargando...</div>:
            <div>
                <ul>
                    {cart.items.map((it,index)=>(
                        <li key={index}>{it.producto.titulo} x {it.cantidad} u.</li>
                    ))}
                </ul>
                <div><p>Total a pagar: </p><strong>${cart.precioTotal}</strong></div>
            </div>
            }
            </div>
        </div>
    )
}
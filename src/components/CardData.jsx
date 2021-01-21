import React from 'react';

export default function CardData({pos,data,err,handleInputChange,cart}) {


    return(
        <div className='card datos'>
            <div className={`${pos===1?'active':'hide'}`}>
            <h4>Datos de Contacto</h4>
            <div>
                <label htmlFor="nombre">Nombre:</label>
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
                <input onChange={handleInputChange} 
                        type="email" 
                        name='email' 
                        value={data.email}                
                        placeholder='fede@miranda.com'/>
            </div>
            <p className={err.email.error?'error':'hide'}>{err.email.msjError}</p>
            <div>
                <label htmlFor="telefono">Teléfono:</label>
                <input onChange={handleInputChange} 
                        type="tel" 
                        name='telefono' 
                        value={data.telefono}                
                        placeholder='1133334444'
                        data-inputmask="'mask':'(99) 9999 - 9999'"/>
            </div>
            <p className={err.telefono.error?'error':'hide'}>{err.telefono.msjError}</p>
            </div>

            <div className={`${pos===2?'active':'hide'}`}>
            <h4>Dirección de Entrega</h4>
            <div>
                <label htmlFor="provincia">Provincia:</label>
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
                <input onChange={handleInputChange} 
                        type="text" 
                        name='ciudad' 
                        value={data.ciudad}
                        placeholder='Springfield'
                />
                <p className={err.ciudad.error?'error':'hide'}>{err.ciudad.msjError}</p>
            </div>
            <div>
                <label htmlFor="cp">CP</label>
                <input onChange={handleInputChange} 
                        type="text" 
                        name='cp' 
                        value={data.cp}
                        placeholder='3378'
                />
            </div>
            <div>
                <label htmlFor="calle">Calle y Nº:</label>
                <input onChange={handleInputChange} 
                        type="text" 
                        name='calle' 
                        value={data.calle}
                        placeholder='Calle Falsa 123'
                />       
            </div>
            </div>

            <div className={`${pos===3?'active':'hide'}`}>
            <h4>Confirmación de Productos</h4>
            <div>
                <ul>
                    {cart.items.map((it,index)=>(
                        <li key={index}>{it.producto.titulo} x {it.cantidad} u.</li>
                    ))}
                </ul>
                <div><p>Total a pagar: </p><span>${cart.precioTotal}</span></div>
            </div>
            </div>
        </div>
    )
}
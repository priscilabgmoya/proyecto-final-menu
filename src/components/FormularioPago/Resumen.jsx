import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import "./Resumen.css"
import PagoTarjeta from './PagoTarjeta';



const FormularioPago = () => {
 

    return (
        <>
            <div className='card'>
                <div className='resumen'>
                    <h1 className="encabezado">Resumen del pedido</h1>
                    <ul className='lista'>
                        <li className='lista-item mt-3'>
                            <span className='descripcion clear'> hola</span>
                            <span className='precio '>$200</span>
                        </li> b
                        
                        <li className='lista-item mt-3'>
                            <span className='descripcion clear' >hola2</span>
                            <span className='precio ' >$300</span>
                        </li> a
                        
                        <li className='lista-item mt-3'>
                            <span className='descripcion clear' >hola2</span>
                            <span className='precio ' >$300</span>
                        </li> b

                        <li className='lista-item mt-3'> 
                            <h3 className='descripcion clear'><strong>h2ola</strong></h3>
                            <h3 className='precio '><strong>$300</strong></h3>
                        </li> 
                    </ul>
                </div>
                <PagoTarjeta ></PagoTarjeta>
            </div>
        </>
    );
}

export default FormularioPago;
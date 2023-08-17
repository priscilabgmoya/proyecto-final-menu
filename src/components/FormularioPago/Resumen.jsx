import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import "./Resumen.css"
import PagoTarjeta from './PagoTarjeta';

// import axios from 'axios'




const FormularioPago = ({total, pedidos}) => {
 


    return (
        <>
            <div className=' card contenedor-resumen '>
                <div className='resumen '>
                    <h1 className="encabezado">Resumen del pedido</h1>
                    <ul className='lista'>
                        {
                            pedidos?.map((ped, index) => {
                                return   <li key={index} className='lista-item mt-3'>
                                <span className='descripcion clear'>{`${ped.menu} X ${ped.cantidad}`}</span>
                                <span className='precio '>{``}</span>
                            </li> 
                            })
                        }
                
                        <li className='lista-item mt-3'> 
                            <h3 className='descripcion clear'><strong>Total</strong></h3>
                            <h3 className='precio '><strong>{`$ ${total}`}</strong></h3>
                        </li> 
                    </ul>

                </div>
                

                <PagoTarjeta ></PagoTarjeta>

                
            </div>
        </>
    );
}

export default FormularioPago;
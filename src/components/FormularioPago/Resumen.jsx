import React, { useState } from 'react';
import "./Resumen.css"
import { Wallet } from '@mercadopago/sdk-react';




const FormularioPago = ({total, pedidos, preferenceId}) => {
    return (
        <>
            <div className=' card contenedor-resumen '>
                <div className='resumen '>
                    <h1 className="encabezado">Resumen del pedido</h1>
                    <ul className='lista'>
                        {
                            pedidos?.map((ped, index) => {
                                return   <li key={index} className='lista-item mt-3'>
                                <span className='descripcion clear'>{`${ped.menu} X ${ped.cantidad} Unidades`}</span>
                                <span className='precio '>{``}</span>
                            </li> 
                            })
                        }
                
                        <li className='lista-item mt-3'> 
                            <h3 className='descripcion clear'><strong>Total</strong></h3>
                            <h3 className='precio '><strong>{`$ ${total.toFixed(2)}`}</strong></h3>
                        </li> 
                    </ul>

                </div>
                {
                    preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} />
                }
                
            </div>
        </>
    );
}

export default FormularioPago;
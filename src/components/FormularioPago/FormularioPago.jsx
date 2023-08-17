import React, { useState } from 'react';
import InputC from '../Input/InputC';
import { Card } from 'react-bootstrap';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from 'axios'
import './FormularioPago.css';



const FormularioPago = () => {
 
const [preferenceId,setPreferenceId] = useState(null);

initMercadoPago('TEST-5565acfa-f491-44e7-a3e0-2acb33862b90');

    //TODO empieza por el minuto 35 aprox, te dejo comentado todo xd, xq sino salta 40 errores
    //mercado pago functions
    const createPreference = async () => {

        try{
            
            const response = await axios.post(`${URL_API_MERCADO_PAGO}`,{
                description: "total a pagar",
                price : 10,
                quantity : 1,
            });

            const { id} = response.data;
            return id;
        } catch (error){
            console.log(error);
        }
    };

    const handleBuy = async () => {
     const id = await createPreference();
    if (id) {
    setPreferenceId(id);
    }  
    }
//SIGUE LA PARTE DEL BOTON AL FINAL DEL COSO

    return (
        <>
            <div className='card card-mercadoPago'>
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
                <div>
                    <button className='boton-pagar' onClick={handleBuy}>PAGAR</button>
                    {preferenceId && <Wallet initialization={{ preferenceId }} />
}
                </div> 

            </div>
        </>
    );
}

export default FormularioPago;
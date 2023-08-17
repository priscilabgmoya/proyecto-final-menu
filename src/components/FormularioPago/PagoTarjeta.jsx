import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import "./PagoTarjeta.css"
import { Card } from 'react-bootstrap';

const PagoTarjeta = () => {
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;

        setState((prev) => ({ ...prev, [name]: value }));
    }

    const handleInputFocus = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
    }

    return (
        <div className='card contenedor '>
            <Cards
                number={state.number}
                expiry={state.expiry}
                cvc={state.cvc}
                name={state.name}
                focused={state.focus}
            />
            <form>
                <div className='form-group mt-4'>

                    <label htmlFor="number">Numero de la tarjeta</label> <br />
                    <input
                        type="number"
                        className='form-control'
                        name="number"
                        max={17}
                        value={state.number}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />

                </div>

                <div className='form-group mt-3'>
                    <label htmlFor="name">Nombre del propietario</label><br />
                    <input
                        type="text"
                        className='form-control'
                        name="name"
                        minLength={1}
                        value={state.name}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    /></div>


                <div className="form-row d-flex mt-3 ">
                    <div className='col-6'>
                        <label htmlFor="expiry">Fecha de vencimiento</label> <br />
                        <input
                            type="text"
                            className='form-control'
                            name="expiry"
                            maxLength={4}
                            value={state.expiry}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        /></div>

                    <div className='col-6'>
                        <label htmlFor="cvc">CVC</label><br />
                        <input
                            type="text"
                            className='form-control'
                            id="cvc"
                            maxLength={4}
                            name="cvc"
                            value={state.cvc}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        /></div>
                </div>
                <div className='d-flex contenedor-boton'>
              <button className="btn w-50 mt-4" type="submit">
                {" "}
                <strong>Pagar</strong>{" "}
              </button>
            </div>



            </form>
        </div>
    );
}

export default PagoTarjeta;
import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import InputC from '../Input/InputC';



const FormularioPago = () => {
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
    <div className="card">
        <div className="card-body">
            <Cards
            number={state.number}
            name={state.name}
            expiry={state.expiry}
            cvc={state.cvc}
            focused={state.focus}
            />
            <form>
                <div className="form-group">
                    <label htmlFor="number"> Numero de la tarjeta</label>
                    <input onFocus={handleInputFocus} onChange={handleInputChange} type="text" name="number" id="number" className="form-control"></input>
                </div> <br />
                <div className="form-group">
                    <label htmlFor="name"> Nombre del titular</label>
                    <input onFocus={handleInputFocus} onChange={handleInputChange} type="text" name="name" id="name" className="form-control"></input>
                </div>
                <div className="mt-3 d-flex">

                <div className="form-group col-6">
                    <label htmlFor="expiry">Vencimiento</label>
                    <input onFocus={handleInputFocus} onChange={handleInputChange} type="text" name="expiry" id="expiry" className="form-control"></input>
                </div>
                <div className="form-group col-6">
                    <label htmlFor="cvc">CVC</label>
                    <input onFocus={handleInputFocus} onChange={handleInputChange} type="text" name="cvc" id="cvc" className="form-control"></input>
                </div>

                </div>

            </form>
        </div>
    </div>
    );
}

export default FormularioPago;
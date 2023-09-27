import { URL_MERCADO_PAGO } from "../config";

async function createPreference(pedido) {
    try {
        const res = await fetch(`${URL_MERCADO_PAGO}`,
        {
            method: 'POST',
            headers: { "Content-Type": "application/json"  },
            body: JSON.stringify(pedido)
        }).then(async (res) => {
             const data =   await res.json().then(data => {return data})
             const {id} = data;
             return id; 
        })
        return res; 
    } catch (error) {
        console.log(error)
    }
}

export {
    createPreference
}
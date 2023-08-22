async function createPreference(pedido) {
    try {
        const res = await fetch('http://localhost:3000/api/V1/create_preference',
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
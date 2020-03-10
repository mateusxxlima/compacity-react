const ApiService = {

    // Busca cidade pelo id
    getCidade : id => {
        return fetch(`http://localhost:8000/api/cidade/${id}`)
            .then(res => res.json())
    },

    // Cria uma nova cidade
    criaCidade : cidade => {
        return fetch('http://localhost:8000/api/cidade', 
        {method : 'POST', headers : {'content-type' : 'application/json'}, body : cidade})
            .then(res => res.json())
    },

    // Remove cidade
    removeCidade : id => {
        return fetch(`http://localhost:8000/api/cidade/${id}`, 
        {method : 'DELETE', headers : {'content-type' : 'application/json'}})
            .then(res => res.json())        
    }
}

export default ApiService
const ApiService = {

    // Search city by name
    getCityByName : name => {

        return fetch(`http://localhost:8080/cidade/${name}`)
            .then(res => res.json())

    },

    // Create City
    createCity : city => {

        return fetch(`http://localhost:8080/cidade`, 
        {method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }, body: city})

    },

    // Remove city
    removeCity : id => {

        return fetch(`http://localhost:8080/cidade/${id}`, 
        {method : 'DELETE',
        headers : {
            'content-type' : 'application/json'
        }})
            .then(res => res.json())  

    },


    // ROUTES CLIENT

    // Search client by id
    getClientById : id => {

        return fetch(`http://localhost:8080/clienteId/${id}`)
            .then(res => res.json())

    },

    // Search client by name
    getClientByName : name => {

        return fetch(`http://localhost:8080/clienteNome/${name}`)
            .then(res => res.json())

    },

    // Create new client
    createClient : client => {

        return fetch(`http://localhost:8080/cliente`, 
        {method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }, body: client})
            .then(res => res.json())

    },

    // Remove client by id
    removeClient : id => {  

        return fetch(`http://localhost:8080/cliente/${id}`, 
        {method : 'DELETE',
        headers : {
            'content-type' : 'application/json'}})
            .then(res => res.json()) 

    },

}

export default ApiService
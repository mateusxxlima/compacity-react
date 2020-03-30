const ApiService = {

    getAllCities : () => {
        
        return fetch(`http://localhost:8080/cidades`)
            .then(res => res.json())
            .catch(err => console.log('Erro -> ', err))        

    },

    // Search city by name
    getCityByName : name => {

        return fetch(`http://localhost:8080/cidade/${name}`)
            .then(res => res.json())
            .catch(err => console.log('Erro -> ', err))

    },

    // Create City
    createCity : city => {

        return fetch(`http://localhost:8080/cidade`, 
        {method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }, body: JSON.stringify(city)})
            .then(res => res.json())
            .catch(err => console.log('Erro -> ', err))

    },

    // Remove city
    removeCity : id => {

        return fetch(`http://localhost:8080/cidade/${id}`, {
            method : 'DELETE',
            headers : {
                'content-type' : 'application/json'
            }
        })
        .then(res => res.json()) 
        .catch(err => console.log('Erro -> ',err)) 

    },


    // ROUTES CLIENT

    // Get all clients

    getAllClients : () => {

        return fetch(`http://localhost:8080/clientes`)
            .then(res => res.json())
            .catch(err => console.log('Erro -> ', err))        

    },

    // Search client by id
    getClientById : id => {

        return fetch(`http://localhost:8080/clienteId/${id}`)
            .then(res => res.json())
            .catch(err => console.log('Erro -> ', err))

    },

    // Search client by name
    getClientByName : name => {

        return fetch(`http://localhost:8080/clienteNome/${name}`)
            .then(res => res.json())
            .catch(err => console.log('Erro -> ', err))
            

    },

    // Create new client
    createClient : client => {
        
        return fetch(`http://localhost:8080/cliente`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(client)
        })
        .then(res => res.json())
        .catch(err => console.log('Erro -> ', err))

    },

    // Remove client by id
    removeClient : id => {  

        return fetch(`http://localhost:8080/cliente/${id}`, 
        {method : 'DELETE',
        headers : {
            'content-type' : 'application/json'}})
            .then(res => res.json())
            .catch(err => console.log('Erro -> ', err)) 

    },

}

export default ApiService
export function addClient(client) {
    return {
        type: 'ADD_CLIENT_ON_API',
        payload: client
    }
}

export function getClientByName(clientName) {
    return {
        type: 'GET_CLIENT_BY_NAME_ON_API',
        payload: clientName
    }
}

export function getClientById(clientId) {
    return {
        type: 'GET_CLIENT_BY_ID_ON_API',
        payload: clientId
    }
}

export function getAllClients() {
    return {
        type: 'GET_ALL_CLIENTS_ON_API',
        payload: {}
    }
}

export function delClient(clientId) {
    return {
        type: 'DEL_CLIENT_ON_API',
        payload: clientId
    }
}
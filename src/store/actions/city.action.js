export function addCity(city) {
    return {
        type: 'ADD_CITY_ON_API',
        payload: city
    }
}

export function getCityByName(cityName) {
    return {
        type: 'GET_CITY_BY_NAME_ON_API',
        payload: cityName
    }
}

export function getAllCity() {
    return {
        type: 'GET_ALL_CITY_ON_API',
        payload: []
    }
}

export function delCity(cityId) {
    return {
        type: 'DEL_CITY_ON_API',
        payload: cityId
    }
}
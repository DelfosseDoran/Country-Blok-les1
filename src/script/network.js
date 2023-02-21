export const get=endpoint=>{
    return fetch(endpoint)
    .then(response=>response.json())
    .catch(error=>console.log(error))
}
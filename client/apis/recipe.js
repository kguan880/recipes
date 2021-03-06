import request from 'superagent'

const baseUrl = '/api/v1/recipes'

export function getRecipes(){
    return request.get(baseUrl)
        .then(res=>res.body)
}

export function addRecipe(wombat){
    return request.post(baseUrl)
        .send(wombat)
        .then(() => null)
}

export function deleteRecipe(id){
    return request.delete(baseUrl + '/' + `${id}`)
}
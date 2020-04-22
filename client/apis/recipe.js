import request from 'superagent'

const baseUrl = '/api/v1/recipes'

export function getRecipes(){
    return request.get(baseUrl)
        .then(res=>res.body)
}


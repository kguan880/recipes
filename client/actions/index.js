import {getRecipes} from '../apis/recipe'

const ADD_RECIPE = 'ADD_RECIPE'
const SAVE_RECIPE = 'SAVE_RECIPE'

export function addRecipe(recipe){
    return {
        type: ADD_RECIPE,
        recipe,
    }
}

export function saveRecipe(recipes){
    return{
        type: SAVE_RECIPE,
        recipes,
    }
}

export function fetchRecipe(){
    return (dispatch) =>{
        getRecipes()
            .then(recipes =>{
                dispatch(saveRecipe(recipes))
            })
    }
}
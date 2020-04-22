import {getRecipes, addRecipe} from '../apis/recipe'

const SAVE_RECIPE = 'SAVE_RECIPE'


export function saveRecipe(recipes){
    return{
        type: SAVE_RECIPE,
        recipes,
    }
}

export function fetchRecipes(){
    return (dispatch) =>{
        getRecipes()
            .then(recipes =>{
                dispatch(saveRecipe(recipes))
            })
    }
}

export function saveRecipes(wombat){
    return (dispatch) =>{
        addRecipe(wombat)
            .then(() =>{
                dispatch(fetchRecipes())
            })
    }
}
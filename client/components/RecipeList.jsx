import React from 'react'
import {connect} from 'react-redux'

function RecipeList (props) {
    return(
        <div>
            <h1>Recipes!</h1>
            <ul>
                {props.recipes.map(recipe => <li key={recipe.id}>{recipe.name}</li>)}
            </ul>
        </div>
    )
}

function mapStateToProps(state){
    return{
        recipes: state.recipes
    }
}

export default connect(mapStateToProps)(RecipeList)
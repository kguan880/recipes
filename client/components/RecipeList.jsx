import React from 'react'
import {connect} from 'react-redux'

function RecipeList (props) {
    return(
        <div>
            <h1>Recipes!</h1>
            <ul>
                {props.recipes.map(recipe => <li key={recipe.name}>{recipe.name}</li>)}
                {console.log(props.recipes[0].name)}
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
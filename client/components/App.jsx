import React from 'react'
import RecipeForm from './RecipeForm'
import IngredientsForm from './IngredientsForm'
import RecipeList from './RecipeList'
import {connect} from 'react-redux'
import {fetchRecipes} from '../actions/index'

class App extends React.Component {

  componentDidMount(){
    this.props.dispatch(fetchRecipes())
  }

  render() {
    return (
      <>
        <h1>Recipe Generator!</h1>
        <RecipeList />
        <RecipeForm />
        <IngredientsForm />
      </>
    )
  }
}

export default connect()(App)

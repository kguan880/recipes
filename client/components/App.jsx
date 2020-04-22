import React from 'react'
import RecipeForm from './RecipeForm'
import IngredientsForm from './IngredientsForm'
import RecipeList from './RecipeList'

class App extends React.Component {
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

export default App

import React from 'react'
import RecipeForm from './RecipeForm'
import IngredientsForm from './IngredientsForm'

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Recipe Generator!</h1>
        <RecipeForm />
        <IngredientsForm />
      </>
    )
  }
}

export default App

import React from 'react'
import RecipeForm from './RecipeForm'
import IngredientsForm from './IngredientsForm'

const App = () => {
  return (
    <>
      <h1>Recipe Generator!</h1>
      <RecipeForm />
      <IngredientsForm/>
    </>
  )
}

export default App

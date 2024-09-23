import { useEffect, useState } from "react"

import { RecipesList } from '../RecipesList/RecipesList';


import styles from './Recipes.module.css';
import NewRecepyForm from '../NewRecipeForm/NewRecipeForm';

export default function Recipes() {

  const [recipes, setRecipes] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(recipes))
  }, [recipes])

  function addRecepy(title: string) {
    setRecipes((currentRecipes: any) => {
      return [
        ...currentRecipes,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleRecipy(id: string, completed: boolean) {
    setRecipes((currentRecipes: any)  => {
      return currentRecipes.map((recipe: any) => {
        if (recipe.id === id) {
          return { ...recipe, completed }
        }

        return recipe
      })
    })
  }

  function deleteRecipy(id: string) {
    setRecipes((currentRecipes: any) => {
      return currentRecipes.filter((recipe: any) => recipe.id !== id)
    })
  }

  return (
    <>
      <NewRecepyForm onSubmit={addRecepy}/>
      <h1 className="header">Recipes</h1>
      <RecipesList recipes={recipes} toggleRecipy={toggleRecipy} deleteRecipy={deleteRecipy}/>
    </>
  );
}
import React from 'react'
import RecipeList from './RecipeList'
import RecipesToTry from './RecipesToTry'
import Search from './Search'
// import AddRecipe from './AddRecipe'

function RecipeContainer({
  recipes, 
  // handleAddNewRecipe, 
  handleAddToTryList, 
  handleRemoveFromTryList, 
  setSearchTerm, 
  searchTerm,
  recipesToTry,
  onRemoveRecipe
})
{

  return (
    <>
      <Search
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
      />
      <RecipesToTry 
        recipesToTry={recipesToTry}
        onRecipeClick={handleRemoveFromTryList}
        onRemoveRecipe={onRemoveRecipe}

      />
      <RecipeList 
        recipes={recipes}
        onRecipeClick={handleAddToTryList}
        onRemoveRecipe={onRemoveRecipe}
      />
      {/* <AddRecipe 
        addNewRecipe={handleAddNewRecipe}
      /> */}
    </>
  )
}

export default RecipeContainer

import { RecipeProps } from "../libs/types"

interface RecipeIngredientsProps {
  recipeIngredients: RecipeProps['recipeIngredients']
}

function RecipeIngredients ({recipeIngredients}: RecipeIngredientsProps) {
  return (
    <section className="recipe-ingredients">
      <h2>
        Ingredients
      </h2>

      {
        recipeIngredients && 
        <ul>
          {
            recipeIngredients.map((ingredient, index) =>
              <li key={ index }>
                { ingredient }
              </li>
            )            
          }
        </ul>
      }
    </section>
  )
}

export default RecipeIngredients
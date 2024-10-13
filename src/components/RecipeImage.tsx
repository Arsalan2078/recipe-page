import { RecipeProps } from "../libs/types"

function RecipeImage ({ image, alt }: RecipeProps['recipeImage']) {
  return (
    <section className="recipe-image">
      <img 
        src={ image }
        alt={ alt } 
      />
    </section>
  )
}

export default RecipeImage
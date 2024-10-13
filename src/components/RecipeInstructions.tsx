import { RecipeProps } from "../libs/types"

interface RecipeInstructionsProps {
  recipeInstructions: RecipeProps['recipeInstructions']
}

function RecipeInstructions ({ recipeInstructions }: RecipeInstructionsProps) {
  return (
    <section className="recipe-instructions">
      <h2>
        Instructions
      </h2>

      {
        recipeInstructions && 
          <ol>
            {
              recipeInstructions.map(({ step, details }, index) =>
                <li key={ index }>
                  <b>{ step }</b>: { details }
                </li>
              )
            }
          </ol>
      }
    </section>
  )
}

export default RecipeInstructions
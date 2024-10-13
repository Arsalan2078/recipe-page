import { RecipeProps } from "../libs/types"

function RecipeNutrition ({ calories, carbs, protein, fat }: RecipeProps['recipeNutrition']) {
  return (
    <section className="recipe-nutrition">
      <h2>
        Nutrition
      </h2>

      <p>
      The table below shows nutritional values per serving without the additional fillings.
      </p>

      <table>
        <tbody>
          <tr>
            <th>
              Calories
            </th>
            <td className="nutrition-value">
              { calories }
            </td>
          </tr>
          <tr>
            <th>
              Carbs
            </th>
            <td className="nutrition-value">
              { carbs }
            </td>
          </tr>
          <tr>
            <th>
              Protein
            </th>
            <td className="nutrition-value">
              { protein }
            </td>
          </tr>
          <tr>
            <th>
              Fat
            </th>
            <td className="nutrition-value">
              { fat }
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default RecipeNutrition
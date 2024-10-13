import { RecipeProps } from "../libs/types";

function RecipePreparation ({ total, preparation, cooking }: RecipeProps['recipePreparation']) {
  return (
    <div className="recipe-preparation">
      <h3>
        Preparation Time
      </h3>

      <ul>
        <li>
          <b>Total</b>: { total }
        </li>
        <li>
          <b>Preparation</b>: { preparation }
        </li>
        <li>
          <b>Cooking</b>: { cooking }
        </li>
      </ul>
    </div>
  );
}
 
export default RecipePreparation
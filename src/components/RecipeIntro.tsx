import { RecipeProps } from "../libs/types";
import RecipePreparation from "./RecipePreparation";

interface RecipePreparationProps {
  recipePreparation: RecipeProps['recipePreparation']
}

function RecipeIntro ({ title, paragraphs, recipePreparation }: RecipeProps['recipeIntro'] & RecipePreparationProps) {
  return (
    <section className="recipe-intro">
      <h1>
        { title }
      </h1>

      {
        paragraphs && paragraphs.map((paragraph, index) => 
          <p key={ index }>
            { paragraph }
          </p>
        )
      }

      <RecipePreparation
        total={ recipePreparation.total }
        preparation={ recipePreparation.preparation }
        cooking={ recipePreparation.cooking }
      />
    </section>
  );
}
 
export default RecipeIntro;
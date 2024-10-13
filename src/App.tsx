import RecipeImage from "./components/RecipeImage"
import RecipeIngredients from "./components/RecipeIngredients";
import RecipeInstructions from "./components/RecipeInstructions";
import RecipeIntro from "./components/RecipeIntro"
import RecipeNutrition from "./components/RecipeNutrition";
import { RecipeProps } from "./libs/types"

function App () {
  const recipe: RecipeProps = {
    recipeImage: {
      image: "src/assets/images/image-omelette.jpeg",
      alt: "Recipe Image"
    },
    recipeIntro: {
      title: "Simple Omelette Recipe",
      paragraphs: [
        "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats."
      ]
    },
    recipePreparation: {
      total: "Approximately 10 minutes",
      preparation: "5 minutes",
      cooking: "5 minutes"
    },
    recipeIngredients: [
      "2-3 large eggs",
      "Salt, to taste",
      "Pepper, to taste",
      "1 tablespoon of butter or oil",
      "Optional fillings: cheese, diced vegetables, cooked meats, herbs"
    ],
    recipeInstructions: [
      {
        step: "Beat the eggs",
        details: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture."
      },
      {
        step: "Heat the pan",
        details: "Place a non-stick frying pan over medium heat and add butter or oil."
      },
      {
        step: "Cook the omelette:",
        details: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface."
      },
      {
        step: "Add fillings (optional)",
        details: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette."
      },
      {
        step: "Fold and serve",
        details: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate."
      },
      {
        step: "Enjoy:",
        details: "Serve hot, with additional salt and pepper if needed."
      }
    ],
    recipeNutrition: {
      calories: "277kcal",
      carbs: "0g",
      protein: "20g",
      fat: "22g"
    }
  }

  const {
    recipeImage, 
    recipeIntro, 
    recipePreparation, 
    recipeIngredients, 
    recipeInstructions, 
    recipeNutrition
  } = recipe;

  return (
    <main className="main">
      <div className="recipe">
        <RecipeImage
          image={ recipeImage.image }
          alt={ recipeImage.alt }
        />

        <RecipeIntro
          title={ recipeIntro.title }
          paragraphs={ recipeIntro.paragraphs }
          recipePreparation={ recipePreparation }
        />

        <RecipeIngredients
          recipeIngredients={ recipeIngredients}
        />

        <RecipeInstructions
          recipeInstructions={ recipeInstructions }
        />

        <RecipeNutrition
          calories={ recipeNutrition.calories }
          carbs={ recipeNutrition.carbs }
          protein={ recipeNutrition.protein }
          fat={ recipeNutrition.fat }
        />
      </div>
    </main>
  )
}
 
export default App
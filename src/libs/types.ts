export interface ImageProps {
  image: string,
  alt: string,
}

export interface RecipeProps {
  recipeImage: ImageProps,
  recipeIntro: {
    title: string,
    paragraphs: string[]
  },
  recipePreparation: {
    total: string,
    preparation: string,
    cooking: string
  },
  recipeIngredients: string[],
  recipeInstructions: {
    step: string,
    details: string
  }[],
  recipeNutrition: {
    calories: string,
    carbs: string,
    protein: string,
    fat: string,
  }
}
import { Keygen } from "./keygen";

// Convert loaded meals to application usable format.
export const formatMealsForLoad = (mealData) => {
  if (!mealData) return [];

  const meals = [...mealData];
  let formattedMeals = [];
  for (const meal of meals) {
    const formattedIng = {};
    for (const ing of meal.ingredients) {
      let newKey = Keygen.getKey();
      formattedIng[newKey] = ing;
    }

    formattedMeals.push({
      key: Keygen.getKey(),
      content: {
        ...meal,
        ingredients: {
          ...formattedIng,
        },
      },
    });
  }
  return formattedMeals;
};

// Convert meals to save to saveable format.
export const formatMealsForSave = (mealData) => {
  if (!mealData) return [];

  const meals = [...mealData];
  let formattedMeals = [];
  for (const meal of meals) {
    const formattedMeal = { ...meal.content };
    formattedMeal.ingredients = [];
    for (const ing in meal.content.ingredients) {
      formattedMeal.ingredients.push(meal.content.ingredients[ing]);
    }
    formattedMeals.push(formattedMeal);
  }

  return formattedMeals;
};

// Helper method for getting the meals for a specific day.
export const findMealsForDay = (dayId, userData) => {
  const days = userData.days.items;
  const day = days.find((day) => day.id === `${dayId} ${userData.id}`);
  if (day) {
    return day.meals;
  }
  return undefined;
};

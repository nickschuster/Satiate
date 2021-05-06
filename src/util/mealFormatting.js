import { Keygen } from "./keygen";

// Convert loaded meals to application usable format.
export const formatMealsForLoad = (mealData) => {
  if (!mealData) return undefined;

  console.log("Pre format", mealData);
  const meals = [...mealData];
  let formattedMeals = [];
  for (const meal of meals) {
    const formattedIng = {};
    for (const ing of meal.ingredients) {
      let newKey = Keygen.getKey();
      formattedIng[newKey] = ing;
    }

    meal.ingredients = formattedIng;
    formattedMeals.push({
      key: Keygen.getKey(),
      content: {
        ...meal,
      },
    });
  }
  console.log("Load", formattedMeals);
  return formattedMeals;
};

// Convert meals to save to saveable format.
export const formatMealsForSave = (mealData) => {
  if (!mealData) return undefined;

  console.log("Save", mealData);
  const meals = [...mealData];
  for (const meal of meals) {
    delete meal.key;
    const formattedIng = [];
    for (const ing in meal.content.ingredients) {
      console.log(meal.content.ingredients[ing]);
      formattedIng.push(meal.content.ingredients[ing]);
    }
    meal.ingredients = formattedIng;
    meal.name = meal.content.name;
    delete meal.content;
  }
  return meals;
};

// Helper method for getting the meals for a specific day.
export const findMealsForDay = (dayId, userData) => {
  const days = userData.days.items;
  const day = days.find((day) => parseInt(day.id) === dayId);
  if (day) {
    return day.meals;
  }
  return undefined;
};

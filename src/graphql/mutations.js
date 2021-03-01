/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDay = /* GraphQL */ `
  mutation CreateDay(
    $input: CreateDayInput!
    $condition: ModelDayConditionInput
  ) {
    createDay(input: $input, condition: $condition) {
      id
      name
      goal
      meals {
        items {
          id
          title
          dayID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateDay = /* GraphQL */ `
  mutation UpdateDay(
    $input: UpdateDayInput!
    $condition: ModelDayConditionInput
  ) {
    updateDay(input: $input, condition: $condition) {
      id
      name
      goal
      meals {
        items {
          id
          title
          dayID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteDay = /* GraphQL */ `
  mutation DeleteDay(
    $input: DeleteDayInput!
    $condition: ModelDayConditionInput
  ) {
    deleteDay(input: $input, condition: $condition) {
      id
      name
      goal
      meals {
        items {
          id
          title
          dayID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createMeal = /* GraphQL */ `
  mutation CreateMeal(
    $input: CreateMealInput!
    $condition: ModelMealConditionInput
  ) {
    createMeal(input: $input, condition: $condition) {
      id
      title
      dayID
      day {
        id
        name
        goal
        meals {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      ingredients {
        items {
          id
          mealID
          content
          calories
          protein
          fat
          carbs
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateMeal = /* GraphQL */ `
  mutation UpdateMeal(
    $input: UpdateMealInput!
    $condition: ModelMealConditionInput
  ) {
    updateMeal(input: $input, condition: $condition) {
      id
      title
      dayID
      day {
        id
        name
        goal
        meals {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      ingredients {
        items {
          id
          mealID
          content
          calories
          protein
          fat
          carbs
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteMeal = /* GraphQL */ `
  mutation DeleteMeal(
    $input: DeleteMealInput!
    $condition: ModelMealConditionInput
  ) {
    deleteMeal(input: $input, condition: $condition) {
      id
      title
      dayID
      day {
        id
        name
        goal
        meals {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      ingredients {
        items {
          id
          mealID
          content
          calories
          protein
          fat
          carbs
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createIngredient = /* GraphQL */ `
  mutation CreateIngredient(
    $input: CreateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    createIngredient(input: $input, condition: $condition) {
      id
      mealID
      meal {
        id
        title
        dayID
        day {
          id
          name
          goal
          createdAt
          updatedAt
          owner
        }
        ingredients {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      content
      calories
      protein
      fat
      carbs
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateIngredient = /* GraphQL */ `
  mutation UpdateIngredient(
    $input: UpdateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    updateIngredient(input: $input, condition: $condition) {
      id
      mealID
      meal {
        id
        title
        dayID
        day {
          id
          name
          goal
          createdAt
          updatedAt
          owner
        }
        ingredients {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      content
      calories
      protein
      fat
      carbs
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteIngredient = /* GraphQL */ `
  mutation DeleteIngredient(
    $input: DeleteIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    deleteIngredient(input: $input, condition: $condition) {
      id
      mealID
      meal {
        id
        title
        dayID
        day {
          id
          name
          goal
          createdAt
          updatedAt
          owner
        }
        ingredients {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      content
      calories
      protein
      fat
      carbs
      createdAt
      updatedAt
      owner
    }
  }
`;

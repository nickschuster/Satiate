/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      days {
        items {
          userID
          id
          pretty
          meals {
            name
            ingredients {
              name
              calories
              protein
              fat
              carbs
            }
          }
          calorieGoal
          proteinGoal
          fatGoal
          carbGoal
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      savedMeals {
        items {
          id
          userID
          name
          ingredients {
            name
            calories
            protein
            fat
            carbs
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      savedIngredients {
        items {
          id
          userID
          name
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
      calorieGoal
      proteinGoal
      fatGoal
      carbGoal
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      days {
        items {
          userID
          id
          pretty
          meals {
            name
            ingredients {
              name
              calories
              protein
              fat
              carbs
            }
          }
          calorieGoal
          proteinGoal
          fatGoal
          carbGoal
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      savedMeals {
        items {
          id
          userID
          name
          ingredients {
            name
            calories
            protein
            fat
            carbs
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      savedIngredients {
        items {
          id
          userID
          name
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
      calorieGoal
      proteinGoal
      fatGoal
      carbGoal
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      days {
        items {
          userID
          id
          pretty
          meals {
            name
            ingredients {
              name
              calories
              protein
              fat
              carbs
            }
          }
          calorieGoal
          proteinGoal
          fatGoal
          carbGoal
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      savedMeals {
        items {
          id
          userID
          name
          ingredients {
            name
            calories
            protein
            fat
            carbs
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      savedIngredients {
        items {
          id
          userID
          name
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
      calorieGoal
      proteinGoal
      fatGoal
      carbGoal
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createDay = /* GraphQL */ `
  mutation CreateDay(
    $input: CreateDayInput!
    $condition: ModelDayConditionInput
  ) {
    createDay(input: $input, condition: $condition) {
      userID
      id
      pretty
      meals {
        name
        ingredients {
          name
          calories
          protein
          fat
          carbs
        }
      }
      calorieGoal
      proteinGoal
      fatGoal
      carbGoal
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
      userID
      id
      pretty
      meals {
        name
        ingredients {
          name
          calories
          protein
          fat
          carbs
        }
      }
      calorieGoal
      proteinGoal
      fatGoal
      carbGoal
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
      userID
      id
      pretty
      meals {
        name
        ingredients {
          name
          calories
          protein
          fat
          carbs
        }
      }
      calorieGoal
      proteinGoal
      fatGoal
      carbGoal
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createSavedMeal = /* GraphQL */ `
  mutation CreateSavedMeal(
    $input: CreateSavedMealInput!
    $condition: ModelSavedMealConditionInput
  ) {
    createSavedMeal(input: $input, condition: $condition) {
      id
      userID
      name
      ingredients {
        name
        calories
        protein
        fat
        carbs
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateSavedMeal = /* GraphQL */ `
  mutation UpdateSavedMeal(
    $input: UpdateSavedMealInput!
    $condition: ModelSavedMealConditionInput
  ) {
    updateSavedMeal(input: $input, condition: $condition) {
      id
      userID
      name
      ingredients {
        name
        calories
        protein
        fat
        carbs
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteSavedMeal = /* GraphQL */ `
  mutation DeleteSavedMeal(
    $input: DeleteSavedMealInput!
    $condition: ModelSavedMealConditionInput
  ) {
    deleteSavedMeal(input: $input, condition: $condition) {
      id
      userID
      name
      ingredients {
        name
        calories
        protein
        fat
        carbs
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createSavedIngredient = /* GraphQL */ `
  mutation CreateSavedIngredient(
    $input: CreateSavedIngredientInput!
    $condition: ModelSavedIngredientConditionInput
  ) {
    createSavedIngredient(input: $input, condition: $condition) {
      id
      userID
      name
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
export const updateSavedIngredient = /* GraphQL */ `
  mutation UpdateSavedIngredient(
    $input: UpdateSavedIngredientInput!
    $condition: ModelSavedIngredientConditionInput
  ) {
    updateSavedIngredient(input: $input, condition: $condition) {
      id
      userID
      name
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
export const deleteSavedIngredient = /* GraphQL */ `
  mutation DeleteSavedIngredient(
    $input: DeleteSavedIngredientInput!
    $condition: ModelSavedIngredientConditionInput
  ) {
    deleteSavedIngredient(input: $input, condition: $condition) {
      id
      userID
      name
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

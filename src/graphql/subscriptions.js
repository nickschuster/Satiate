/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String!) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String!) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String!) {
    onDeleteUser(owner: $owner) {
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
export const onCreateDay = /* GraphQL */ `
  subscription OnCreateDay($owner: String!) {
    onCreateDay(owner: $owner) {
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
export const onUpdateDay = /* GraphQL */ `
  subscription OnUpdateDay($owner: String!) {
    onUpdateDay(owner: $owner) {
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
export const onDeleteDay = /* GraphQL */ `
  subscription OnDeleteDay($owner: String!) {
    onDeleteDay(owner: $owner) {
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
export const onCreateSavedMeal = /* GraphQL */ `
  subscription OnCreateSavedMeal($owner: String!) {
    onCreateSavedMeal(owner: $owner) {
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
export const onUpdateSavedMeal = /* GraphQL */ `
  subscription OnUpdateSavedMeal($owner: String!) {
    onUpdateSavedMeal(owner: $owner) {
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
export const onDeleteSavedMeal = /* GraphQL */ `
  subscription OnDeleteSavedMeal($owner: String!) {
    onDeleteSavedMeal(owner: $owner) {
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
export const onCreateSavedIngredient = /* GraphQL */ `
  subscription OnCreateSavedIngredient($owner: String!) {
    onCreateSavedIngredient(owner: $owner) {
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
export const onUpdateSavedIngredient = /* GraphQL */ `
  subscription OnUpdateSavedIngredient($owner: String!) {
    onUpdateSavedIngredient(owner: $owner) {
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
export const onDeleteSavedIngredient = /* GraphQL */ `
  subscription OnDeleteSavedIngredient($owner: String!) {
    onDeleteSavedIngredient(owner: $owner) {
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

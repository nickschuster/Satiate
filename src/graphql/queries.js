/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        days {
          items {
            userID
            id
            pretty
            meals {
              name
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
      nextToken
    }
  }
`;
export const getDay = /* GraphQL */ `
  query GetDay($id: ID!) {
    getDay(id: $id) {
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
export const listDays = /* GraphQL */ `
  query ListDays(
    $filter: ModelDayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDays(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getSavedMeal = /* GraphQL */ `
  query GetSavedMeal($id: ID!) {
    getSavedMeal(id: $id) {
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
export const listSavedMeals = /* GraphQL */ `
  query ListSavedMeals(
    $filter: ModelSavedMealFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSavedMeals(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getSavedIngredient = /* GraphQL */ `
  query GetSavedIngredient($id: ID!) {
    getSavedIngredient(id: $id) {
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
export const listSavedIngredients = /* GraphQL */ `
  query ListSavedIngredients(
    $filter: ModelSavedIngredientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSavedIngredients(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;

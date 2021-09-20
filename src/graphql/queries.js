/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPublicProfile = /* GraphQL */ `
  query GetPublicProfile($username: String) {
    getPublicProfile(username: $username) {
      name
      username
      profileImage
      activity {
        dayId
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
        points
      }
      private
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      parameters {
        items {
          id
          userID
          key
          value
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
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
          points
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
        parameters {
          items {
            id
            userID
            key
            value
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
            points
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
      points
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
        points
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
export const getParameter = /* GraphQL */ `
  query GetParameter($id: ID!) {
    getParameter(id: $id) {
      id
      userID
      key
      value
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listParameters = /* GraphQL */ `
  query ListParameters(
    $filter: ModelParameterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParameters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        key
        value
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;

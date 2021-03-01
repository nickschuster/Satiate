/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDay = /* GraphQL */ `
  query GetDay($id: ID!) {
    getDay(id: $id) {
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
          ingredients {
            items {
              calories
              carbs
              content
              fat
              id
              owner
              protein
              updatedAt
              createdAt
              mealID
            }
          }
        }
        nextToken
      }
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
      nextToken
    }
  }
`;
export const getMeal = /* GraphQL */ `
  query GetMeal($id: ID!) {
    getMeal(id: $id) {
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
export const listMeals = /* GraphQL */ `
  query ListMeals(
    $filter: ModelMealFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMeals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getIngredient = /* GraphQL */ `
  query GetIngredient($id: ID!) {
    getIngredient(id: $id) {
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
export const listIngredients = /* GraphQL */ `
  query ListIngredients(
    $filter: ModelIngredientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIngredients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        mealID
        meal {
          id
          title
          dayID
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
      nextToken
    }
  }
`;

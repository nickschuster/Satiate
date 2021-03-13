/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String!) {
    onCreateUser(owner: $owner) {
      id
      days {
        items {
          id
          userId
          pretty
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String!) {
    onUpdateUser(owner: $owner) {
      id
      days {
        items {
          id
          userId
          pretty
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String!) {
    onDeleteUser(owner: $owner) {
      id
      days {
        items {
          id
          userId
          pretty
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
export const onCreateDay = /* GraphQL */ `
  subscription OnCreateDay($owner: String!) {
    onCreateDay(owner: $owner) {
      id
      userId
      pretty
      meals {
        items {
          id
          dayId
          name
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
export const onUpdateDay = /* GraphQL */ `
  subscription OnUpdateDay($owner: String!) {
    onUpdateDay(owner: $owner) {
      id
      userId
      pretty
      meals {
        items {
          id
          dayId
          name
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
export const onDeleteDay = /* GraphQL */ `
  subscription OnDeleteDay($owner: String!) {
    onDeleteDay(owner: $owner) {
      id
      userId
      pretty
      meals {
        items {
          id
          dayId
          name
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
export const onCreateMeal = /* GraphQL */ `
  subscription OnCreateMeal($owner: String!) {
    onCreateMeal(owner: $owner) {
      id
      dayId
      name
      ingredients {
        items {
          id
          mealId
          name
          calories
          carbs
          protein
          fat
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
export const onUpdateMeal = /* GraphQL */ `
  subscription OnUpdateMeal($owner: String!) {
    onUpdateMeal(owner: $owner) {
      id
      dayId
      name
      ingredients {
        items {
          id
          mealId
          name
          calories
          carbs
          protein
          fat
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
export const onDeleteMeal = /* GraphQL */ `
  subscription OnDeleteMeal($owner: String!) {
    onDeleteMeal(owner: $owner) {
      id
      dayId
      name
      ingredients {
        items {
          id
          mealId
          name
          calories
          carbs
          protein
          fat
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
export const onCreateIngredient = /* GraphQL */ `
  subscription OnCreateIngredient($owner: String!) {
    onCreateIngredient(owner: $owner) {
      id
      mealId
      name
      calories
      carbs
      protein
      fat
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateIngredient = /* GraphQL */ `
  subscription OnUpdateIngredient($owner: String!) {
    onUpdateIngredient(owner: $owner) {
      id
      mealId
      name
      calories
      carbs
      protein
      fat
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteIngredient = /* GraphQL */ `
  subscription OnDeleteIngredient($owner: String!) {
    onDeleteIngredient(owner: $owner) {
      id
      mealId
      name
      calories
      carbs
      protein
      fat
      createdAt
      updatedAt
      owner
    }
  }
`;

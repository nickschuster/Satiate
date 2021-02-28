/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDay = /* GraphQL */ `
  subscription OnCreateDay($owner: String!) {
    onCreateDay(owner: $owner) {
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
export const onUpdateDay = /* GraphQL */ `
  subscription OnUpdateDay($owner: String!) {
    onUpdateDay(owner: $owner) {
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
export const onDeleteDay = /* GraphQL */ `
  subscription OnDeleteDay($owner: String!) {
    onDeleteDay(owner: $owner) {
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
export const onCreateMeal = /* GraphQL */ `
  subscription OnCreateMeal($owner: String!) {
    onCreateMeal(owner: $owner) {
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
export const onUpdateMeal = /* GraphQL */ `
  subscription OnUpdateMeal($owner: String!) {
    onUpdateMeal(owner: $owner) {
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
export const onDeleteMeal = /* GraphQL */ `
  subscription OnDeleteMeal($owner: String!) {
    onDeleteMeal(owner: $owner) {
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
export const onCreateIngredient = /* GraphQL */ `
  subscription OnCreateIngredient($owner: String!) {
    onCreateIngredient(owner: $owner) {
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
      protein
      fat
      carbs
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
      protein
      fat
      carbs
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
      protein
      fat
      carbs
      createdAt
      updatedAt
      owner
    }
  }
`;

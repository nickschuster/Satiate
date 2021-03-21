/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String!) {
    onCreateUser(owner: $owner) {
      id
      days {
        items {
          userId
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
          userId
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
          userId
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
      userId
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateDay = /* GraphQL */ `
  subscription OnUpdateDay($owner: String!) {
    onUpdateDay(owner: $owner) {
      userId
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteDay = /* GraphQL */ `
  subscription OnDeleteDay($owner: String!) {
    onDeleteDay(owner: $owner) {
      userId
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
      createdAt
      updatedAt
      owner
    }
  }
`;

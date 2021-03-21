/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        days {
          items {
            userId
            id
            pretty
            meals {
              name
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
      nextToken
    }
  }
`;
export const getDay = /* GraphQL */ `
  query GetDay($id: ID!) {
    getDay(id: $id) {
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
export const listDays = /* GraphQL */ `
  query ListDays(
    $filter: ModelDayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDays(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;

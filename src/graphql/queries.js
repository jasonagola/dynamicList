/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBike = /* GraphQL */ `
  query GetBike($id: ID!) {
    getBike(id: $id) {
      id
      color
      make
      model
      createdAt
      updatedAt
    }
  }
`;
export const listBikes = /* GraphQL */ `
  query ListBikes(
    $filter: ModelBikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        color
        make
        model
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

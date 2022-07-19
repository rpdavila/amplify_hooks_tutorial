/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPersonalInfo = /* GraphQL */ `
  query GetPersonalInfo($id: ID!) {
    getPersonalInfo(id: $id) {
      id
      name
      age
      address
      createdAt
      updatedAt
    }
  }
`;
export const listPersonalInfos = /* GraphQL */ `
  query ListPersonalInfos(
    $filter: ModelPersonalInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPersonalInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        age
        address
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

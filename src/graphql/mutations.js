/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPersonalInfo = /* GraphQL */ `
  mutation CreatePersonalInfo(
    $input: CreatePersonalInfoInput!
    $condition: ModelPersonalInfoConditionInput
  ) {
    createPersonalInfo(input: $input, condition: $condition) {
      id
      name
      age
      address
      createdAt
      updatedAt
    }
  }
`;
export const updatePersonalInfo = /* GraphQL */ `
  mutation UpdatePersonalInfo(
    $input: UpdatePersonalInfoInput!
    $condition: ModelPersonalInfoConditionInput
  ) {
    updatePersonalInfo(input: $input, condition: $condition) {
      id
      name
      age
      address
      createdAt
      updatedAt
    }
  }
`;
export const deletePersonalInfo = /* GraphQL */ `
  mutation DeletePersonalInfo(
    $input: DeletePersonalInfoInput!
    $condition: ModelPersonalInfoConditionInput
  ) {
    deletePersonalInfo(input: $input, condition: $condition) {
      id
      name
      age
      address
      createdAt
      updatedAt
    }
  }
`;

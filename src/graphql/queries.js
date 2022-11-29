/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTicket = /* GraphQL */ `
  query GetTicket($id: ID!) {
    getTicket(id: $id) {
      id
      hasServiceRequest {
        status
        request
      }
      hasBike {
        id
        color
        make
        model
      }
      hasCustomer {
        id
        firstName
        lastName
        phoneNumber
        hasServiceHistory {
          status
          request
        }
      }
    }
  }
`;
export const getBike = /* GraphQL */ `
  query GetBike($id: ID!) {
    getBike(id: $id) {
      id
      color
      make
      model
    }
  }
`;

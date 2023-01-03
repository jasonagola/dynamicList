/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getServiceTicket = /* GraphQL */ `
  query GetServiceTicket($id: ID!) {
    getServiceTicket(id: $id) {
      id
      customer {
        id
        firstName
        lastName
        phoneNumber
        hasBikes {
          id
          color
          make
          model
        }
      }
      serviceRequest {
        request
        date
        partsRequired
        partsRequest
        status
      }
      bike {
        id
        color
        make
        model
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listServiceTickets = /* GraphQL */ `
  query ListServiceTickets(
    $filter: ModelServiceTicketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServiceTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        customer {
          id
          firstName
          lastName
          phoneNumber
        }
        serviceRequest {
          request
          date
          partsRequired
          partsRequest
          status
        }
        bike {
          id
          color
          make
          model
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;

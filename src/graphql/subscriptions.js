/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateServiceTicket = /* GraphQL */ `
  subscription OnCreateServiceTicket(
    $filter: ModelSubscriptionServiceTicketFilterInput
    $owner: String
  ) {
    onCreateServiceTicket(filter: $filter, owner: $owner) {
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
export const onUpdateServiceTicket = /* GraphQL */ `
  subscription OnUpdateServiceTicket(
    $filter: ModelSubscriptionServiceTicketFilterInput
    $owner: String
  ) {
    onUpdateServiceTicket(filter: $filter, owner: $owner) {
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
export const onDeleteServiceTicket = /* GraphQL */ `
  subscription OnDeleteServiceTicket(
    $filter: ModelSubscriptionServiceTicketFilterInput
    $owner: String
  ) {
    onDeleteServiceTicket(filter: $filter, owner: $owner) {
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

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createServiceTicket = /* GraphQL */ `
  mutation CreateServiceTicket(
    $input: CreateServiceTicketInput!
    $condition: ModelServiceTicketConditionInput
  ) {
    createServiceTicket(input: $input, condition: $condition) {
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
export const updateServiceTicket = /* GraphQL */ `
  mutation UpdateServiceTicket(
    $input: UpdateServiceTicketInput!
    $condition: ModelServiceTicketConditionInput
  ) {
    updateServiceTicket(input: $input, condition: $condition) {
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
export const deleteServiceTicket = /* GraphQL */ `
  mutation DeleteServiceTicket(
    $input: DeleteServiceTicketInput!
    $condition: ModelServiceTicketConditionInput
  ) {
    deleteServiceTicket(input: $input, condition: $condition) {
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

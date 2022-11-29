const AWS = require("aws-sdk");

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json"
  };

  try {
    switch (event.routeKey) {
      case "DELETE /items/{id}":
        await dynamo
          .delete({
            TableName: "Service_Queue",
            Key: {
              id: event.pathParameters.ticket_id
            }
          })
          .promise();
        body = `Deleted item ${event.pathParameters.id}`;
        break;
      case "GET /items/{id}":
        body = await dynamo
          .get({
            TableName: "Service_Queue",
            Key: {
              "Ticket ID": event.pathParameters.ticket_id
            }
          })
          .promise();
        break;
      case "GET /items":
        body = await dynamo.scan({ TableName: "Service_Queue" }).promise();
        break;
      case "PUT /items":
        let requestJSON = JSON.parse(event.body);
        await dynamo
          .put({
            TableName: "Service_Queue",
            "Ticket ID": requestJSON.ticket_id,
            "serviceRequest": {
                "type": requestJSON.serviceRequest.type,
                "request": requestJSON.serviceRequest.request
            },
            "customer": {
                "firstName": requestJSON.customer.firstName,
                "lastName": requestJSON.customer.lastName,
                "phoneNumber": requestJSON.customer.phoneNumber
            },
            "bike": {
                "color":requestJSON.bike.color,
                "make":requestJSON.bike.make,
                "model":requestJSON.bike.model,
            }
          })
          .promise();
        body = `Put ticket ${requestJSON.ticket_id}`;
        break;
      default:
        throw new Error(`Unsupported route: "${event.routeKey}"`);
    }
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers
  };
};

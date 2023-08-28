import { APIGatewayProxyHandler, APIGatewayProxyEvent } from "aws-lambda";
import * as AWS from "aws-sdk";
const db = new AWS.DynamoDB.DocumentClient();
import { createResponse } from "../../lib/response";
// const TABLE_NAME = process.env.TABLE_NAME || "";
// const PRIMARY_KEY = process.env.PRIMARY_KEY || "";

const USERS = [
  { id: "1", name: "田中" },
  { id: "2", title: "佐藤" },
  { id: "3", title: "山田" },
];

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
) => {
  console.log(
    "pathParameters = " + JSON.stringify(event.pathParameters, undefined, 2)
  );

  const requestedItemId = event.pathParameters?.id;
  if (!requestedItemId) {
    return {
      statusCode: 400,
      body: `Error: You are missing the path parameter id`,
    };
  }

  const params = {
    TableName: "users",
    Key: {
      userId: requestedItemId,
      createdAt: "fuga",
    },
  };

  try {
    const response = await db.get(params).promise();
    return { statusCode: 200, body: JSON.stringify(response.Item) };
  } catch (dbError) {
    return { statusCode: 500, body: JSON.stringify(dbError) };
  }

  // ユーザーID
  // const principalId = event.requestContext.authorizer?.principalId;

  // return createResponse(USERS.find((b) => b.id === id))
  return createResponse(USERS[0]);
};

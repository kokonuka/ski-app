import { APIGatewayProxyHandler, APIGatewayProxyEvent } from "aws-lambda";
import * as AWS from "aws-sdk";
import { createResponse } from "../../lib/response";

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

  // const s3 = new AWS.S3();
  // const params = {
  //   Bucket: process.env.BUCKET_NAME!,
  //   Key: "test.txt",
  // };
  // const res = await s3.getObject(params).promise();

  // return createResponse(USERS)
  // return createResponse(await selectUsers())
  return createResponse(USERS);
};

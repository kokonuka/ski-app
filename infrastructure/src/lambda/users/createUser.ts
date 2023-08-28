import { APIGatewayProxyHandler, APIGatewayProxyEvent } from "aws-lambda";
import { createResponse } from "../../lib/response";

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
) => {
  console.log(
    "pathParameters = " + JSON.stringify(event.pathParameters, undefined, 2)
  );

  const principalId = event.requestContext.authorizer?.principalId;

  // supabaseからuser_idで取得

  // 存在しない場合作成

  // 存在した場合更新

  return createResponse(event.body);
};

/** POST /users */
// export const putUser: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent) => {
//   console.log("pathParameters = " + JSON.stringify(event.pathParameters, undefined, 2))

//   return createResponse(event.body);
// }

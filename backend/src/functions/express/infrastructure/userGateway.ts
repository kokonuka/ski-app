import {
  GetCommand,
  QueryCommand,
  PutCommand,
  ScanCommand,
  ScanCommandInput,
  ScanCommandOutput,
  UpdateCommand,
  UpdateCommandInput,
} from "@aws-sdk/lib-dynamodb";
import { documentClient } from "./connection";

export class UserGateway {
  async findAll() {
    const command = new ScanCommand({
      TableName: "users",
    } as ScanCommandInput);
    const output: ScanCommandOutput = await documentClient.send(command);
    return output.Items;
  }

  async findForId(id: string) {
    const command = new GetCommand({
      TableName: "users",
      Key: {
        id,
      },
    });
    const result = await documentClient.send(command);
    return result.Item;
  }

  async findForAuth0UserId(auth0UserId: string) {
    const command = new QueryCommand({
      TableName: "users",
      IndexName: "auth0UserId",
      KeyConditionExpression: "auth0UserId = :auth0UserIdValue",
      ExpressionAttributeValues: {
        ":auth0UserIdValue": auth0UserId,
      },
    });
    const result = await documentClient.send(command);
    return result.Items;
  }

  async insert(id: string, auth0UserId: string, name: string, email: string) {
    const command = new PutCommand({
      TableName: "users",
      Item: {
        id,
        auth0UserId,
        name,
        email,
      },
      ConditionExpression: "attribute_not_exists(auth0UserId)",
    });
    return await documentClient.send(command);
  }

  async update(id: string, name: string, email: string) {
    const command = new UpdateCommand({
      TableName: "users",
      Key: {
        id,
      },
      UpdateExpression: "set #name = :user, email = :email",
      ExpressionAttributeNames: {
        "#name": "name",
      },
      ExpressionAttributeValues: {
        ":user": name,
        ":email": email,
      },
    } as UpdateCommandInput);

    return await documentClient.send(command);
  }
}

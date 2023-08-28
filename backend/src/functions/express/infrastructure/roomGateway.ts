import { PutCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";
import { documentClient } from "./connection";

export class RoomGateway {
  async insert(
    id: string,
    creatorId: string,
    memberId: string,
    updatedAt: number
  ) {
    const command = new PutCommand({
      TableName: "rooms",
      Item: {
        id,
        creatorId,
        memberId,
        updatedAt,
      },
      ConditionExpression: "attribute_not_exists(id)",
    });
    return await documentClient.send(command);
  }

  async findForCreatorId(id: string) {
    const command = new QueryCommand({
      TableName: "rooms",
      IndexName: "creatorId",
      KeyConditionExpression: "creatorId = :idValue",
      ExpressionAttributeValues: {
        ":idValue": id,
      },
    });
    const result = await documentClient.send(command);
    return result.Items;
  }

  async findForMemberId(id: string) {
    const command = new QueryCommand({
      TableName: "rooms",
      IndexName: "memberId",
      KeyConditionExpression: "memberId = :idValue",
      ExpressionAttributeValues: {
        ":idValue": id,
      },
    });
    const result = await documentClient.send(command);
    return result.Items;
  }
}

import { PutCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";
import { documentClient } from "./connection";

export class MessageGateway {
  async insert(
    id: string,
    userId: string,
    roomId: string,
    text: string,
    createdAt: number
  ) {
    const command = new PutCommand({
      TableName: "messages",
      Item: {
        id,
        roomId,
        userId,
        text,
        createdAt,
      },
      ConditionExpression: "attribute_not_exists(id)",
    });
    return await documentClient.send(command);
  }

  async findForRoomId(roomId: string) {
    const command = new QueryCommand({
      TableName: "messages",
      IndexName: "roomId",
      KeyConditionExpression: "roomId = :roomId",
      ExpressionAttributeValues: {
        ":roomId": roomId,
      },
    });
    const result = await documentClient.send(command);
    return result.Items;
  }
}

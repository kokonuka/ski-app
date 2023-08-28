import { DynamoDBClient, DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const config: DynamoDBClientConfig = { region: "ap-northeast-1" };
const dbClient = new DynamoDBClient(config);
export const documentClient = DynamoDBDocumentClient.from(dbClient);

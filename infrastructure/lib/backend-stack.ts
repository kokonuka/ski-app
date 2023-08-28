import {
  Stack,
  StackProps,
  aws_apigateway,
  aws_lambda,
  aws_s3 as s3,
  RemovalPolicy,
  aws_dynamodb,
} from "aws-cdk-lib";
import { Construct } from "constructs";
import { Lambda } from "./construct/lambda";
import { Api } from "./construct/api";
import * as dotenv from "dotenv";

dotenv.config();

export class BackendStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const lambda = new aws_lambda.Function(this, "Lambda", {
      functionName: "serverless-express",
      code: aws_lambda.Code.fromAsset("../backend/.serverless/express.zip"),
      handler: "src/functions/express/main.handler",
      runtime: aws_lambda.Runtime.NODEJS_18_X,
      environment: {
        NODE_OPTIONS: "--enable-source-maps",
      },
    });

    const api = new aws_apigateway.RestApi(this, "Api", {
      deployOptions: {
        stageName: "api",
      },
      defaultCorsPreflightOptions: {
        allowOrigins: aws_apigateway.Cors.ALL_ORIGINS,
        allowMethods: aws_apigateway.Cors.ALL_METHODS,
        allowHeaders: aws_apigateway.Cors.DEFAULT_HEADERS,
        statusCode: 200,
      },
    });
    api.root.addProxy({
      defaultIntegration: new aws_apigateway.LambdaIntegration(lambda),
    });

    const usersTable = new aws_dynamodb.Table(this, "UsersTable", {
      tableName: "users",
      partitionKey: {
        name: "id",
        type: aws_dynamodb.AttributeType.STRING,
      },
      billingMode: aws_dynamodb.BillingMode.PAY_PER_REQUEST, // オンデマンド請求
      pointInTimeRecovery: true, // PITRを有効化
      removalPolicy: RemovalPolicy.DESTROY, // for Development
    });
    usersTable.addGlobalSecondaryIndex({
      indexName: "auth0UserId",
      partitionKey: {
        name: "auth0UserId",
        type: aws_dynamodb.AttributeType.STRING,
      },
    });
    usersTable.grantReadWriteData(lambda);

    const roomsTable = new aws_dynamodb.Table(this, "RoomsTable", {
      tableName: "rooms",
      partitionKey: {
        name: "id",
        type: aws_dynamodb.AttributeType.STRING,
      },
      sortKey: {
        name: "updatedAt",
        type: aws_dynamodb.AttributeType.NUMBER,
      },
      billingMode: aws_dynamodb.BillingMode.PAY_PER_REQUEST,
      pointInTimeRecovery: true,
      removalPolicy: RemovalPolicy.DESTROY,
    });
    roomsTable.addGlobalSecondaryIndex({
      indexName: "creatorId",
      partitionKey: {
        name: "creatorId",
        type: aws_dynamodb.AttributeType.STRING,
      },
    });
    roomsTable.addGlobalSecondaryIndex({
      indexName: "memberId",
      partitionKey: {
        name: "memberId",
        type: aws_dynamodb.AttributeType.STRING,
      },
    });
    roomsTable.grantReadWriteData(lambda);

    const messagesTable = new aws_dynamodb.Table(this, "MessagesTable", {
      tableName: "messages",
      partitionKey: {
        name: "id",
        type: aws_dynamodb.AttributeType.STRING,
      },
      billingMode: aws_dynamodb.BillingMode.PAY_PER_REQUEST,
      pointInTimeRecovery: true,
      removalPolicy: RemovalPolicy.DESTROY,
    });
    messagesTable.addGlobalSecondaryIndex({
      indexName: "roomId",
      partitionKey: {
        name: "roomId",
        type: aws_dynamodb.AttributeType.STRING,
      },
      sortKey: {
        name: "createdAt",
        type: aws_dynamodb.AttributeType.NUMBER,
      },
    });
    messagesTable.grantReadWriteData(lambda);

    // const bucket = new s3.Bucket(this, "SkiAppBucket", {
    //   removalPolicy: RemovalPolicy.DESTROY,
    //   autoDeleteObjects: true,
    // });

    // const lambda = new Lambda(this, "Lambda", { dynamoTable, bucket });

    // new Api(this, "Api", { lambda });
  }
}

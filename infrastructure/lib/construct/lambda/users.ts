import {
  aws_lambda_nodejs as lambda_nodejs,
  aws_lambda as lambda,
  aws_s3 as s3,
  aws_dynamodb as dynamodb,
} from "aws-cdk-lib";
import { Construct } from "constructs";

export type UsersProps = {
  dynamoTable: dynamodb.Table;
  bucket: s3.Bucket;
};

export class Users extends Construct {
  readonly getUsers: lambda_nodejs.NodejsFunction;
  readonly getUser: lambda_nodejs.NodejsFunction;
  readonly createUser: lambda_nodejs.NodejsFunction;

  constructor(scope: Construct, id: string, props: UsersProps) {
    super(scope, id);

    const { dynamoTable, bucket } = props;

    const getUsers = new lambda_nodejs.NodejsFunction(this, "getUsers", {
      functionName: "getUsers",
      entry: "src/lambda/users/getUsers.ts",
      handler: "handler",
      runtime: lambda.Runtime.NODEJS_18_X,
      environment: {
        BUCKET_NAME: props.bucket.bucketName,
      },
    });
    this.getUsers = getUsers;
    props.bucket.grantReadWrite(getUsers);

    const getUser = new lambda_nodejs.NodejsFunction(this, "getUser", {
      functionName: "getUser",
      entry: "src/lambda/users/getUser.ts",
      handler: "handler",
      runtime: lambda.Runtime.NODEJS_18_X,
      environment: {
        TABLE_NAME: props.bucket.bucketName,
        BUCKET_NAME: props.bucket.bucketName,
      },
    });
    this.getUser = getUser;
    dynamoTable.grantReadData(getUser);
    props.bucket.grantReadWrite(getUser);

    const createUser = new lambda_nodejs.NodejsFunction(this, "createUser", {
      functionName: "createUser",
      entry: "src/lambda/users/createUser.ts",
      handler: "handler",
      runtime: lambda.Runtime.NODEJS_18_X,
      environment: {
        BUCKET_NAME: props.bucket.bucketName,
      },
    });
    this.createUser = createUser;
    props.bucket.grantReadWrite(createUser);
  }
}

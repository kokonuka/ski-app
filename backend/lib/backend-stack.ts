import { Stack, StackProps, aws_s3 as s3, RemovalPolicy } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Lambda } from "./construct/lambda";
import { Api } from "./construct/api";
import * as dotenv from "dotenv";

dotenv.config();

export class BackendStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, "SkiAppBucket", {
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    const lambda = new Lambda(this, "Lambda", { bucket });

    new Api(this, "Api", { lambda });
  }
}

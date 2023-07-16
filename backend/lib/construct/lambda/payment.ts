import {
  aws_lambda_nodejs as lambda_nodejs,
  aws_lambda as lambda,
  aws_s3 as s3,
} from "aws-cdk-lib";
import { Construct } from "constructs";

export type PaymentProps = {};

export class Payment extends Construct {
  readonly checkout: lambda_nodejs.NodejsFunction;
  readonly webhook: lambda_nodejs.NodejsFunction;

  constructor(scope: Construct, id: string, props?: PaymentProps) {
    super(scope, id);

    const checkout = new lambda_nodejs.NodejsFunction(this, "checkout", {
      functionName: "checkout",
      entry: "src/lambda/payment/checkout.ts",
      handler: "handler",
      runtime: lambda.Runtime.NODEJS_18_X,
      environment: {
        STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY!,
        STRIPE_PRICE_ID: process.env.STRIPE_PRICE_ID!,
        CLIENT_HOST: process.env.CLIENT_HOST!,
      },
    });
    this.checkout = checkout;

    const webhook = new lambda_nodejs.NodejsFunction(this, "webhook", {
      functionName: "webhook",
      entry: "src/lambda/payment/webhook.ts",
      handler: "handler",
      runtime: lambda.Runtime.NODEJS_18_X,
      environment: {
        STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY!,
        STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET!,
      },
    });
    this.webhook = webhook;
  }
}

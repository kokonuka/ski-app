# ski-app

## ディレクトリ構成

### backend

Serverless Framework + serverless-express で API を実装

```
$ npm run start
$ npx sls package
```

### frontend

Next.js でフロントエンドを実装

```
$ npm run dev
```

### infrastructure

AWS CDK で AWS へソースコードのデプロイを行う

#### リソース

- API Gateway
- Lambda
- DynamoDB
- S3
- CloudFront

```
$ cdk deploy
```

### openapi

OpenAPI で API を定義

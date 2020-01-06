# fullstack-example-backend

A sample REST API project implemented with Nest.js

## Converd Features

* Generating Open API document (@nestjs/swagger)
* Validation (class-validator)
* Integration with Serverless Framework

## Install dependencies

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# with serverless offline plugin
$ npm run start:sls
```

## generating documents

```bash
# generate Open API doc
$ npm run build:open-api
```

## Running tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## (How to create this project from the scratch)

```shell
# Install Nest.js CLI
npm i -g @nestjs/cli

# Create new project
nest new {project name} --package-manager npm

# Install swagger module
npm i @nestjs/swagger swagger-ui-express 

# Install validation module
npm i class-validator class-transformer

# Install database module
npm i @nestjs/typeorm typeorm
npm i -D mongodb-memory-server

# Install config module
npm i @nestjs/config

# Install Serverless Framework
npm i -g serverless

# Install Serverless dependencies
npm i aws-lambda aws-serverless-express
npm i -D serverless-offline serverless-dotenv-plugin
```

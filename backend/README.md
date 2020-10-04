# fullstack-example-backend

A simple Nest.js project that serves REST APIs for TODO web app.

## Covered Features

* Generating Open API document (@nestjs/swagger)
* Validation (class-validator)
* API authentication using JWT based on user authentication
* Integration with Serverless Framework

## How to start development

### Install dependencies

```shell
$ npm install
```

### Run the application

```shell
# development mode
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# with serverless offline plugin
$ npm run start:sls
```

## Generate documents

```shell
# generate Open API doc
$ npm run build:open-api
```

## Run tests

```shell
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## How to create this project from scratch

```shell
# Install Nest.js CLI
npm i -g @nestjs/cli

# Create new project
nest new {project name} --package-manager npm

# Install swagger library
npm i @nestjs/swagger swagger-ui-express 

# Install validation library
npm i class-validator class-transformer

# Install database library
npm i @nestjs/typeorm typeorm
npm i -D mongodb-memory-server

# Install config library
npm i @nestjs/config

# Install Serverless Framework
npm i -g serverless

# Install Serverless plugins
npm i aws-lambda aws-serverless-express
npm i -D serverless-offline serverless-dotenv-plugin
```

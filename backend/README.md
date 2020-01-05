# fullstack-example-backend

A sample REST API project implemented with Nest.js

## Converd Features

* Generating Open API document (@nestjs/swagger)
* Validation (class-validator)

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

## (How to create the project from the scratch)

```shell
# Install Nest.js CLI
npm i -g @nestjs/cli

# Create new project
nest new {project name} --package-manager npm

# Install swagger module
npm i -s @nestjs/swagger swagger-ui-express 

# Install validation module
npm i -s class-validator class-transformer

# Install database module
npm i --save @nestjs/typeorm typeorm
npm i --save-dev mongodb-memory-server

```

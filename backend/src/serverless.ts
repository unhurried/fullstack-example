import { Server } from 'http';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { createServer, proxy } from 'aws-serverless-express';
import { AppModule } from './module';

let cachedServer: Server;

async function bootstrapServer(): Promise<Server> {
  const expressApp = express();
  const nestApp = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
  nestApp.enableCors();
  await nestApp.init();
  return createServer(expressApp);
}

export const handler = (event: APIGatewayProxyEvent, context: Context) => {
  if (!cachedServer) {
    bootstrapServer().then(server => {
      cachedServer = server;
      return proxy(server, event, context);
    });
  } else {
    return proxy(cachedServer, event, context);
  }
};

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from '../module';
import * as fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Todo')
    .setDescription('Todo API specification')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  fs.writeFileSync("./dist/open-api.json", JSON.stringify(document));
  await app.close();
  process.exit();
}

bootstrap();

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import configuration from 'app/app.config';
import { AppModule } from 'app/app.module';

const logger = new Logger('Application');

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  await app.listen(configuration.port);
}

bootstrap()
  .then(() => logger.verbose(`Started on ${configuration.port}`))
  .catch((e) => logger.error(e));

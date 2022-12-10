import { INestApplication, Logger, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import configuration from './app/app.config'
import { AppModule } from './app/app.module'

const logger = new Logger('Application')

async function bootstrap (): Promise<void> {
  const app = await NestFactory.create(AppModule, { cors: true })

  if (configuration.env !== 'production') setSwagger(app)

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      disableErrorMessages: configuration.env === 'production'
    })
  )

  await app.listen(configuration.port)
}

function setSwagger (app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('CPH Scorer api')
    .setVersion('1.0')
    .addTag('Player')
    .addTag('Tournament')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup(configuration.swaggerPath, app, document)

  logger.log(
    `Swagger mapped on {/${configuration.swaggerPath}, GET} and {/${configuration.swaggerPath}-json, GET}`
  )
}

bootstrap()
  .then(() => logger.verbose(`Started on ${configuration.port}`))
  .catch((e) => logger.error(e))

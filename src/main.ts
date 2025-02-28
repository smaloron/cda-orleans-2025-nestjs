import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());

  app.enableCors({
    origin: '*',
  });

  // Activation de la validation globale
  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true
    }
  ));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

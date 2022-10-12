import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  Logger.log(`Environment: ${process.env.NODE_ENV?.trim().toUpperCase()}`, 'Bootstrap');

  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  const configService = app.get(ConfigService);
  
  await app.listen(3000);
}

bootstrap().catch(e => {
  Logger.error(`Error starting server, ${e}`, 'Bootstrap');
  throw e;
});

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { setEnvironment } from './infrastructure/environment';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    expandVariables: true,
    envFilePath: setEnvironment(),
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

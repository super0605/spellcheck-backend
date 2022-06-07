import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { SharedModule } from './shared/shared.module';
import { HealthCheckModule } from './controllers/health-check/health-check.module';

const envFilePath = `.env.${process.env.NODE_ENV}`;

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      isGlobal: true,
    }),
    SharedModule,
    HealthCheckModule,
  ],
  controllers: [],
})
export class AppModule {}

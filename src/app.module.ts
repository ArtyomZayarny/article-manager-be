import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ArticlesModule } from './articles/articles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IamModule } from './iam/iam.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    ArticlesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ep-ancient-haze-68914800-pooler.eu-central-1.postgres.vercel-storage.com',
      port: 5432,
      username: 'default',
      password: 'LpayuzO0KQb2',
      database: 'verceldb',
      autoLoadEntities: true,
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      }
    }),
    IamModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

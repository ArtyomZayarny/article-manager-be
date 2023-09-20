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
      host: 'dashboard.render.com/d/dpg-ck58bk6g2bec73ctfngg-a',
      port: 5432,
      username: 'article_manager_db_user',
      password: 'Mi30aj9Nzi0EGgtv7VGc2mvs8E2WL90I',
      database: 'article_manager_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    IamModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

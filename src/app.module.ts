import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm';
import { PhotoModule } from './photo/photo.module';
import { PhotoService } from './photo/photo.service';

@Module({
  imports: [TypeOrmModule.forRoot(), PhotoModule],
  controllers: [AppController],
  providers: [AppService, PhotoService],
})
export class AppModule {
  constructor(private readonly connection: Connection) { }
}

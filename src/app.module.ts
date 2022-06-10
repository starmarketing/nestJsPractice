/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotoModule } from './photo.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mssql',
    //   host: 'localhost',
    //   port: 1433,
    //   username: 'test',
    //   password: 'test',
    //   database: 'attendance',
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    // }),
    PhotoModule 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

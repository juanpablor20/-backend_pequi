import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'prueba',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      
      
     
      synchronize: true,
      logging: true
      
    }),
  ],
})
export class DatabaseModule {}

import { Module } from '@nestjs/common';
import { AprendicesService } from './aprendices.service';
import { AprendicesController } from './aprendices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AprendiceEntity } from './entities/aprendice.entity';
@Module({
  imports: [TypeOrmModule.forFeature([AprendiceEntity])],
  controllers: [AprendicesController],
  providers: [AprendicesService],
})
export class AprendicesModule {}






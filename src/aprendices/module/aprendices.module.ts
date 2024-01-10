import { Module } from '@nestjs/common';
import { AprendicesService } from '../aprendices.service';
import { AprendicesController } from '../aprendices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AprendicesEntity } from '../entities/aprendice.entity';
@Module({
  imports: [TypeOrmModule.forFeature([AprendicesEntity])],
  controllers: [AprendicesController],
  providers: [AprendicesService],
})
export class AprendicesModule {}








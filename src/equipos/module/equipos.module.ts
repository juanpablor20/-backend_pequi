import { Repository } from 'typeorm';
// equipo.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipoEntity } from '../entities/equipos.entity';
import { EquipoService } from '../equipos.service';
import { EquipoController } from '../equipos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EquipoEntity])],
  controllers: [EquipoController],
  providers: [EquipoService, EquipoEntity, Repository],
  exports: [EquipoService, EquipoEntity, Repository]
})
export class EquipoModule { }







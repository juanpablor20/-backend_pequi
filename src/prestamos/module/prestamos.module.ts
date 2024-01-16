import { TypeOrmModule } from "@nestjs/typeorm";
import { PrestamoEquipoEntity } from "../entities/prestamo.entity";
import { PrestamoController } from "../prestamos.controller";
import { Module } from "@nestjs/common";
import { PrestamoService } from "../Prestamo.Service";
import { EquipoModule } from "src/equipos/module/equipos.module";
import { AprendicesModule } from "src/aprendices/module/aprendices.module";
import { EquipoEntity } from "src/equipos/entities/equipos.entity";

@Module({
  imports: [TypeOrmModule.forFeature([PrestamoEquipoEntity, EquipoEntity]), EquipoModule, AprendicesModule],
  controllers: [PrestamoController],
  providers: [PrestamoService],
  exports: [PrestamoService],
})
export class PrestamoEquipoModule { }





import { TypeOrmModule } from "@nestjs/typeorm";
import { PrestamoEquipoEntity } from "../entities/prestamo.entity";
import { PrestamosController } from "../prestamos.controller";
import { Module } from "@nestjs/common";
import { PrestamoService } from "../Prestamo.Service";

@Module({
  imports: [TypeOrmModule.forFeature([PrestamoEquipoEntity])],
  controllers: [PrestamosController],
  providers: [PrestamoService],
})
export class PrestamoEquipoModule {}



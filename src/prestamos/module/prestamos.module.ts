import { TypeOrmModule } from "@nestjs/typeorm";
import { PrestamoEquipoEntity } from "../entities/prestamo.entity";
import { PrestamoController } from "../prestamos.controller";
import { Module } from "@nestjs/common";
import { PrestamoService } from "../Prestamo.Service";

@Module({
  imports: [TypeOrmModule.forFeature([PrestamoEquipoEntity])],
  controllers: [PrestamoController],
  providers: [PrestamoService],
})
export class PrestamoEquipoModule {}



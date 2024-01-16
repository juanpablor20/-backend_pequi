import { Controller, Post, Body, Res, Param, Patch, Get } from '@nestjs/common';
import { PrestamoService } from 'src/prestamos/Prestamo.Service';
import { Response } from 'express';
import { PrestamoDTO } from './entities/prestamo.interface';
import { PrestamoEquipoEntity } from './entities/prestamo.entity';
import { SolicitudPrestamoDTO } from './entities/solicitud.prestamo';

@Controller('prestamos')
export class PrestamoController {
  constructor(private readonly prestamoService: PrestamoService) { }

  @Post()
  async prestarEquipo(@Body() prestamos: PrestamoDTO): Promise<PrestamoEquipoEntity> {
    return await this.prestamoService.prestarEquipo(prestamos)
  }

  @Get()
  findAll() {
    return this.prestamoService.findAll();
  }

  // Otros métodos...
}


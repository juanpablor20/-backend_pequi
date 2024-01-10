// equipo.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { EquiposService } from './equipos.service';
import { DataSource } from 'typeorm';
@Controller('equipos')
export class EquipoController {
  
  constructor(private equiposService: EquiposService) {}

  @Post()
  async createEquipo(@Body('numero_serie') numero_serie: number, @Body('estado') estado: string) {
   return await this.equiposService.createEquipo(numero_serie, estado);

  }

  // Otros métodos según tus necesidades
}


import { Controller, Post, Body, Res, Param, Patch, Get } from '@nestjs/common';
import { PrestamoService } from 'src/prestamos/Prestamo.Service';
import { Response } from 'express';
import { PrestamoDTO } from './entities/prestamo.interface';
import { PrestamoEquipoEntity } from './entities/prestamo.entity';
import { SolicitudPrestamoDTO } from './entities/solicitud.prestamo';
import { get } from 'http';

@Controller('prestamos')
export class PrestamoController {
  constructor(private readonly prestamoService: PrestamoService) { }

  @Post('/guardar-log')
  async prestarEquipo(@Body() prestamos: PrestamoDTO): Promise<PrestamoEquipoEntity> {
    return await this.prestamoService.prestarEquipo(prestamos)
  }
  @Post('/devolver')
  async devolverEquipo(@Body() prestamos: PrestamoDTO): Promise<PrestamoEquipoEntity>{
    return await this.prestamoService.devolverEquipo(prestamos)
  }

  @Get('/historial')
  async obtenerPrestamosConEquipos() {
    try {
      const prestamosConEquipos = await this.prestamoService.obtenerPrestamosConEquipos();
      return { prestamos: prestamosConEquipos };
    } catch (error) {
      return { mensaje: 'Error al obtener prestamos con equipos', error };
    }
  }
 /* @Get('aprendiz')
  async  obtenerPrestamosConAprendices(){
    try {
      const prestamosConAprendices = await this.prestamoService.obtenerPrestamosConAprendices();
    return {prestamos: prestamosConAprendices};
    } catch(error){
      return{mensaje: 'error al obtener el aprendiz', error};
    }
  }*/

}


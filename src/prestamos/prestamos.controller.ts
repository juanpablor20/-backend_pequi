import { Controller, Post, Body, Res } from '@nestjs/common';
import { PrestamoService } from 'src/prestamos/Prestamo.Service';
import { Response } from 'express';

@Controller('prestamos')
export class PrestamosController {
  constructor(
    private readonly PrestamoService: PrestamoService,
  ) { }

  @Post()
  async prestarEquipo(@Body() prestamoData: any, @Res() res: Response): Promise<any> {
    try {
      // Aquí realizarías las operaciones necesarias con tus servicios
      await this.PrestamoService.prestarsevice(prestamoData.idEquipo);
      // this.negocioService.inhabilitarUsuario(prestamoData.tipoUsuario, prestamoData.fechaInicio);

      // Envía una respuesta al cliente si todo va bien
      return res.status(200).json({ mensaje: 'Préstamo exitoso', data: prestamoData });
    } catch (error) {
      // Maneja cualquier error que pueda ocurrir durante el proceso
      console.error('Error al procesar el préstamo:', error);
      return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  }

  // Implementa otros métodos para devolver equipos, obtener historiales, etc.
}

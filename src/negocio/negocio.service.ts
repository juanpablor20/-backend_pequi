
import { Injectable } from '@nestjs/common';
import { addMonths } from 'date-fns';

@Injectable()
export class NegocioService {
  inhabilitarUsuario(tipoUsuario: string, fechaInicio: Date): void {
    let mesesInhabilitacion: number;

    if (tipoUsuario === 'aprendiz') {
      mesesInhabilitacion = 6;
    } else if (tipoUsuario === 'tecnologo') {
      mesesInhabilitacion = 24;
    } else {
      // Manejar otros tipos de usuarios si es necesario
      return;
    }

    const fechaLimiteInhabilitacion = addMonths(fechaInicio, mesesInhabilitacion);
    // Lógica para realizar la inhabilitación en la base de datos
  }
}

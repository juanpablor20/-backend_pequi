import { AprendicesService } from './../aprendices/aprendices.service';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PrestamoEquipoEntity } from 'src/prestamos/entities/prestamo.entity';
import { Repository } from 'typeorm';
import { PrestamoDTO } from './entities/prestamo.interface';
import { EquipoService } from 'src/equipos/equipos.service';

@Injectable()
export class PrestamoService {
  constructor(
    @InjectRepository(PrestamoEquipoEntity)
    private readonly prestamoRepository: Repository<PrestamoEquipoEntity>,
   private readonly EquipoService: EquipoService,
   private readonly AprendicesService: AprendicesService,

  ) {}
  async prestarEquipo(prestamos: PrestamoDTO): Promise<any> {
    const equipoExiste = await this.EquipoService.existeEquipoPorNumeroSerie(prestamos.numero_serie);
    const aprendizExiste = await this.AprendicesService.existeAprendizpornumeroDocumento(prestamos.Numero_Documento)
      if (equipoExiste && aprendizExiste) {
          let item = new PrestamoEquipoEntity();
          item.Numero_Documento = prestamos.Numero_Documento;
          item.numero_serie = prestamos.numero_serie;
          const nuevoPrestamo = await this.prestamoRepository.save(item);
  
          return { mensaje: 'Préstamo exitoso', nuevoPrestamo };
      } else {
          return { mensaje: 'No se puede realizar el préstamo. Equipo o aprendiz no encontrado.' };
      }
  }
  
  async devolverEquipo(id: string): Promise<any> {
    const prestamo = await this.prestamoRepository.findOne({ where: { id } });

    
    if (!prestamo) {
      return undefined; 
    }

    prestamo.estado = 'Disponible';
    return this.prestamoRepository.save(prestamo);
  }
  async findAll(): Promise<PrestamoEquipoEntity[]> {
    return this.prestamoRepository.find();
  }

}

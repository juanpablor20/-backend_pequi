import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PrestamoEquipoEntity } from 'src/prestamos/entities/prestamo.entity';
import { Repository } from 'typeorm';
import { PrestamoDTO } from './entities/prestamo.interface';
import { EquipoService } from 'src/equipos/equipos.service';
import { AprendicesService } from 'src/aprendices/aprendices.service';
import { EquipoEntity } from 'src/equipos/entities/equipos.entity';
import { AprendiceEntity } from 'src/aprendices/entities/aprendice.entity';

@Injectable()
export class PrestamoService {
  constructor(

    @InjectRepository(PrestamoEquipoEntity)
    @InjectRepository(AprendiceEntity)
    @InjectRepository(EquipoEntity)

    private readonly prestamoRepository: Repository<PrestamoEquipoEntity>,
    private readonly EquipoService: EquipoService,
    private readonly AprendicesService: AprendicesService,
  ) { }
  async prestarEquipo(prestamos: PrestamoDTO): Promise<any> {
    try {
      const aprendiz = await this.AprendicesService.obtenerAprendizPorId(prestamos.Numero_Documento)
      const equipo = await this.EquipoService.obtenerEquipoPorNumeroSerie(prestamos.numero_serie);
      const equipoExiste = await this.EquipoService.existeEquipoPorNumeroSerie(prestamos.numero_serie);
      const aprendizExiste = await this.AprendicesService.existeAprendizpornumeroDocumento(prestamos.Numero_Documento);
      if (!equipoExiste || !aprendizExiste) {
        return { mensaje: 'No se puede realizar el préstamo. Equipo o aprendiz no encontrado.' };
      }
      if (equipo && equipo.estado === 'disponible') {
        equipo.estado = 'en prestamo';
        await this.EquipoService.updateEquipo(equipo.id, equipo);

        let item = new PrestamoEquipoEntity();
        item.Numero_Documento = prestamos.Numero_Documento;
        item.numero_serie = prestamos.numero_serie;

        const prestamo = new PrestamoEquipoEntity();
        prestamo.aprendice = aprendiz;
        prestamo.equipos = equipo;

        await this.prestamoRepository.save(prestamo);
        const nuevoPrestamo = await this.prestamoRepository.save(item);
        return { mensaje: 'Préstamo exitoso', nuevoPrestamo };
      } else {
        return { mensaje: 'No se puede realizar el préstamo. Equipo no disponible.' };
      }
    } catch (error) {
      console.log(error);

      return { mensaje: 'Error al procesar el préstamo.', e: error };
    }
  }




  async findAll(): Promise<PrestamoEquipoEntity[]> {
    return this.prestamoRepository.find();
  }

}

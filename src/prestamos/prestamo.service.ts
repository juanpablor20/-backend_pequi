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

        
        item.aprendice = aprendiz;
        item.equipos = equipo;

        const nuevoPrestamo = await this.prestamoRepository.save(item);
        
        return { mensaje: 'Préstamo exitoso', nuevoPrestamo };
      } else {
        return { mensaje: 'No se puede realizar el préstamo. Equipo no disponible.' };
      }
    } catch (error) {
      console.log(error);

      return { mensaje: 'Error al procesar el préstamo.', e: error };
    }}
    async devolverEquipo(prestamos: PrestamoDTO): Promise<any> {
      try {
        const aprendiz = await this.AprendicesService.obtenerAprendizPorId(prestamos.Numero_Documento)
        const equipo = await this.EquipoService.obtenerEquipoPorNumeroSerie(prestamos.numero_serie);
       
        if (!prestamos) {
          return { mensaje: 'No se encuentra el préstamo.' };
        }
     
  
        
  
        if (!equipo) {
          return { mensaje: 'No se encuentra el equipo asociado al préstamo.' };
        }
  
        equipo.estado = 'disponible';
        await this.EquipoService.updateEquipo(equipo.id, equipo);
        
      
       const logDevolucion = new PrestamoEquipoEntity();
       
       logDevolucion.fechaDevolucion = new Date();
       
       await this.prestamoRepository.save(logDevolucion);
       
  
        return { mensaje: 'Devolución exitosa' };
      } catch (error) {
        console.log(error);
        return { mensaje: 'Error al procesar la devolución.', e: error };
      }
  }

  async obtenerPrestamosConEquipos(): Promise<any[]> {
    const prestamosConEquipos = await this.prestamoRepository
      .createQueryBuilder('prestamo')
      .leftJoinAndSelect('prestamo.equipos', 'equipo') 
      .leftJoinAndSelect('prestamo.aprendice', 'aprendiz')
      .select([
        'prestamo', 
        'equipo.numero_serie', 
        'equipo.estado', 
        'aprendiz.name', 
        'aprendiz.apellido', 
        'aprendiz.tipo_identidad', 
        'aprendiz.Numero_Documento'
      ])
      .getMany();
  
    return prestamosConEquipos;
  }
 
  
  

 
}

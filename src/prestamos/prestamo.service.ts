
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PrestamoEquipoEntity } from 'src/prestamos/entities/prestamo.entity';
import { Repository } from 'typeorm';
import { PrestamoDTO } from './entities/prestamo.interface';
@Injectable()
export class PrestamoService {
  constructor(
    @InjectRepository(PrestamoEquipoEntity)
    private readonly prestamoRepository: Repository<PrestamoEquipoEntity>,
  ) {}

  async prestarEquipo(prestamos: PrestamoDTO): Promise<any> {
    let item = new PrestamoEquipoEntity();
    item.numero_documento = prestamos.numero_documento;
    item.numero_serie = prestamos.numero_serie;
    item.estado = 'En prestamo';
    const new_equipo = await this.prestamoRepository.save(item);
    return {new_equipo};
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

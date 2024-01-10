import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { EquipoEntity } from 'src/equipos/entities/equipos.entity'; // Ajusta la ruta según tu estructura

@Injectable()
export class EquiposService {
  constructor(
    @InjectRepository(EquipoEntity)
    private equipoRepository: Repository<EquipoEntity>,
  ) {}

  async createEquipo(numero_serie: number, estado: string): Promise<any> {
    // Puedes realizar validaciones u operaciones específicas aquí antes de guardar en la base de datos
     const nuevoEquipo = this.equipoRepository.create({ numero_serie, estado });
     return nuevoEquipo
     return await this.equipoRepository.save(nuevoEquipo);
    return await this.equipoRepository.find()
  }

  // Puedes agregar más métodos según tus necesidades, por ejemplo:
  async findAllEquipos(): Promise<EquipoEntity[]> {
    return await this.equipoRepository.find();
  }

  async findEquipoById(id: FindOneOptions<EquipoEntity>): Promise<EquipoEntity | undefined> {
    return await this.equipoRepository.findOne(id);
  }

  // Agrega otros métodos según tus necesidades
}

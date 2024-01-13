import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { EquipoEntity } from './entities/equipos.entity';
import { equipoDto } from './entities/equipo.interface';

@Injectable()
export class EquipoService {

    constructor(
        @InjectRepository(EquipoEntity)
        private equipoRepository: Repository<EquipoEntity>,
    ) {}

    async existeEquipoPorNumeroSerie(numero_serie: number): Promise<boolean> {
        const equipo = await this.equipoRepository.findOne({ where: { numero_serie } });
        return !!equipo; // Devuelve true si el equipo existe, false si no existe
      }

    async AddEquipo(equipos: equipoDto): Promise<any>{
        let item = new EquipoEntity();
        item.numero_serie = equipos.numero_serie;
        item.estado = equipos.estado;
        item.estado = 'disponible';
        const new_equipo = await this.equipoRepository.save(item);
        return { new_equipo };
    }


    getAllEquipo(): Promise<EquipoEntity[]> {
        return this.equipoRepository.find();
    }

    getEquipobyID(id: any): Promise<EquipoEntity> {
        return this.equipoRepository.findOne(id);
    }

    async eliminarEquipo(id: number): Promise<void> {
        await this.equipoRepository.delete(id);
    }
}

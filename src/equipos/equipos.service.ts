import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EquipoEntity } from './entities/equipos.entity';
import { equipoDto } from './entities/equipo.interface';

@Injectable()
export class EquipoService {

    constructor(
        @InjectRepository(EquipoEntity)
        private equipoRepository: Repository<EquipoEntity>,
    ) { }
    async obtenerEquipoPorNumeroSerie(numero_serie: number): Promise<EquipoEntity | null> {
        return await this.equipoRepository.findOne({ where: { numero_serie } });
    }

    async existeEquipoPorNumeroSerie(numero_serie: number): Promise<boolean> {
        const equipo = await this.equipoRepository.findOneBy({numero_serie});
        return !!equipo; 
    }

    async AddEquipo(equipos: equipoDto): Promise<any> {
        let item = new EquipoEntity();
        item.numero_serie = equipos.numero_serie;
        item.estado = equipos.estado;
        const new_equipo = await this.equipoRepository.save(item);
        return { new_equipo };
    }


    getAllEquipo(): Promise<EquipoEntity[]> {
        return this.equipoRepository.find();
    }

    async getEquipobyID(id: number): Promise<EquipoEntity | undefined> {
        return await this.equipoRepository.findOne({where:{id}});
      }
      
    async eliminarEquipo(id: number): Promise<void> {
        await this.equipoRepository.delete(id);
    }

    async updateEquipo(id: number, newData: Partial<EquipoEntity>): Promise<EquipoEntity | undefined> {
        const existingEquipo = await this.equipoRepository.findOneBy({ id: id });
    
        if (!existingEquipo) {
          throw new NotFoundException(`Aprendiz con ID ${id} no encontrado`);
        }
    
        await this.equipoRepository.update(id, newData);
        return this.equipoRepository.findOneBy({id:  id });
      }
      async searchEquipos(searchTerm: string): Promise<any> {
        return await this.equipoRepository
          .createQueryBuilder('equipo')
          .where('equipo.numero_serie = :searchTerm', { searchTerm }) 
          .orWhere('equipo.estado = :searchTerm', { searchTerm })
          .getMany();
      }
      

}

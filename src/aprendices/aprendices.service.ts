import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AprendiceEntity } from './entities/aprendice.entity';
import { CreateAprendiceDto } from './dto/create-aprendice.dto';
import { UpdateAprendiceDto } from './dto/update-aprendice.dto';
import { validate } from 'class-validator';

@Injectable()
export class AprendicesService {

  constructor(
    @InjectRepository(AprendiceEntity)
    private readonly aprendiceRepository: Repository<AprendiceEntity>,
  ) { }


  async obtenerAprendizPorId(Numero_Documento: number): Promise<AprendiceEntity | null> {
    return await this.aprendiceRepository.findOne({ where: { Numero_Documento } });
}


  async existeAprendizpornumeroDocumento(Numero_Documento: number): Promise<boolean> {
    const aprendice = await this.aprendiceRepository.findOne({ where: { Numero_Documento } });
    return !!aprendice; // Devuelve true si el equipo existe, false si no existe
  }
  async create(aprendices: CreateAprendiceDto): Promise<any> {
    let item = new AprendiceEntity();
    item.name = aprendices.name;
    item.apellido = aprendices.apellido;
    item.tipo_identidad = aprendices.tipo_identidad;
    item.Numero_Documento = aprendices.Numero_Documento;
    const new_aprendice = await this.aprendiceRepository.save(item);
    return { new_aprendice };
  }



  async findAll(): Promise<AprendiceEntity[]> {
    return this.aprendiceRepository.find();
  }

  async findOne(id: string): Promise<AprendiceEntity | undefined> {
    return this.aprendiceRepository.findOne({ where: { id } });
  }


  async update(id: string, newData: Partial<AprendiceEntity>): Promise<AprendiceEntity | undefined> {
    const existingAprendiz = await this.aprendiceRepository.findOneBy({ id: id });

    if (!existingAprendiz) {
      throw new NotFoundException(`Aprendiz con ID ${id} no encontrado`);
    }

    await this.aprendiceRepository.update(id, newData);
    return this.aprendiceRepository.findOneBy({ id: id });
  }

  async remove(id: string): Promise<void> {
    await this.aprendiceRepository.delete(id);
  }

}


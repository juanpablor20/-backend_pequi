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
  ) {}

  async create(createAprendiceDto: CreateAprendiceDto): Promise<AprendiceEntity> {
    const aprendice = this.aprendiceRepository.create(createAprendiceDto);
    
    // Aquí puedes manejar las relaciones, por ejemplo, asignar contactos si existen en el DTO
    // aprendice.contactos = createAprendiceDto.contactos;

    return this.aprendiceRepository.save(aprendice);
  }

  async findAll(): Promise<AprendiceEntity[]> {
    return this.aprendiceRepository.find();
  }

  async findOne(id: string): Promise<AprendiceEntity | undefined> {
    return this.aprendiceRepository.findOne({ where: { id } });
  }
  

  async update(id: string, newData: Partial<AprendiceEntity>): Promise<AprendiceEntity | undefined> {
    const existingAprendiz = await this.aprendiceRepository.findOneBy({id:id});
    
    if (!existingAprendiz) {
      throw new NotFoundException(`Aprendiz con ID ${id} no encontrado`);
    }

    await this.aprendiceRepository.update(id, newData);
    return this.aprendiceRepository.findOneBy({id:id});
  }

  async remove(id: string): Promise<void> {
    await this.aprendiceRepository.delete(id);
   }

}


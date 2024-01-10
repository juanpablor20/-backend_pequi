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

  async create(createAprendiceDto: any): Promise<any> {
    try {
      const nuevoAprendice = this.aprendiceRepository.create(createAprendiceDto);

      const errors = await validate(nuevoAprendice);
      if (errors.length > 0) {
        throw new Error('Datos de aprendiz no válidos');
      }

      return await this.aprendiceRepository.save(nuevoAprendice);
    } catch (error) {
      console.error('Error al crear un nuevo aprendiz:', error);
      throw error; // Propaga el error después de hacer logging
    }
  }

  async findAll(): Promise<AprendiceEntity[]> {
    return await this.aprendiceRepository.find();
  }

  async findOne(id: any): Promise<AprendiceEntity> {
    const aprendice = await this.aprendiceRepository.findOne(id);
    if (!aprendice) {
      throw new NotFoundException(`Aprendice con ID ${id} no encontrado.`);
    }
    return aprendice;
  }

  // async update(id: number, updateAprendiceDto: UpdateAprendiceDto): Promise<AprendiceEntity> {
  //   const aprendice = await this.findOne(id);
  //   this.aprendiceRepository.merge(aprendice, updateAprendiceDto);

  //   try {
  //     const errors = await validate(aprendice);
  //     if (errors.length > 0) {
  //       throw new Error('Datos de aprendiz no válidos');
  //     }

  //     return await this.aprendiceRepository.save(aprendice);
  //   } catch (error) {
  //     console.error(`Error al actualizar el aprendiz con ID ${id}:`, error);
  //     throw error; // Propaga el error después de hacer logging
  //   }
  // }

  async remove(id: number): Promise<void> {
    const aprendice = await this.findOne(id);
    await this.aprendiceRepository.remove(aprendice);
  }
}

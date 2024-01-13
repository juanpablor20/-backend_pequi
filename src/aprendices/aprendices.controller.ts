// aprendices.controller.ts

import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { AprendicesService } from './aprendices.service';
import { CreateAprendiceDto } from './dto/create-aprendice.dto';
import { UpdateAprendiceDto } from './dto/update-aprendice.dto';
import { AprendiceEntity } from './entities/aprendice.entity';
import { NotFoundException } from '@nestjs/common/exceptions';

@Controller('aprendices')
export class AprendicesController {
  constructor(private readonly aprendicesService: AprendicesService) {}

  @Post()
  async create(@Body() aprendices: CreateAprendiceDto): Promise<AprendiceEntity> {
    return  await this.aprendicesService.create(aprendices);
  }
 

  @Get()
  findAll() {
    return this.aprendicesService.findAll();
  }

  @Get(':id')
async findOne(@Param('id') id: string) {
  const aprendiz = await this.aprendicesService.findOne(id);
  if (!aprendiz) {
    throw new NotFoundException(`Aprendiz con ID ${id} no encontrado`);
  }
  return aprendiz;
}


  @Put(':id')
  update(@Param('id') id: string, @Body() newData: Partial<AprendiceEntity>) {
    return this.aprendicesService.update(id, newData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aprendicesService.remove(id);
  }
}

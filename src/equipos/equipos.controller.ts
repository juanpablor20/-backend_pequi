import { equipoDto } from './entities/equipo.interface';
import { EquipoEntity } from './entities/equipos.entity';
import { EquipoService } from './equipos.service';
import { Controller, Get, Post, Delete, Param, Put, Body,  } from '@nestjs/common';

@Controller('equipos')
export class EquipoController {
    constructor(private readonly equipoService: EquipoService){}

    @Get()
    async getEquipo(): Promise<EquipoEntity[]>{
        return await this.equipoService.getAllEquipo();
    }

    @Post()
    async addEquipo(@Body() equipo: equipoDto): Promise<EquipoEntity>{
        return await this.equipoService.AddEquipo(equipo);
    }
   
    @Delete(':id')
    async deleteEquipo(@Param() params): Promise<void>{
        await this.equipoService.eliminarEquipo(params.id);
    }

}


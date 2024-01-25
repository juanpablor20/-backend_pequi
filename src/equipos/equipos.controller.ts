import { equipoDto } from './entities/equipo.interface';
import { EquipoEntity } from './entities/equipos.entity';
import { EquipoService } from './equipos.service';
import { Controller, Get, Post, Delete, Param, Put, Body, Patch, Query,  } from '@nestjs/common';

@Controller('equipos')
export class EquipoController {
    constructor(private readonly equipoService: EquipoService){}
    @Get('/search')
    @Get('/search')
    async searchEquipos(@Query('search') searchTerm: string): Promise<EquipoEntity[]> {
      return await this.equipoService.searchEquipos(searchTerm);
    }  
     @Get('/equipos')
     async getEquipo(): Promise<EquipoEntity[]>{
         return await this.equipoService.getAllEquipo();
     }
     @Get(':id')
     async getEquipobyID(@Param('id') id: number): Promise<EquipoEntity> {
       return await this.equipoService.getEquipobyID(id);
     }

     @Post('/guardar')
     async addEquipo(@Body() equipo: equipoDto): Promise<EquipoEntity>{
        return await this.equipoService.AddEquipo(equipo);
     }
   
     @Delete(':id')
     async deleteEquipo(@Param() params): Promise<void>{
         await this.equipoService.eliminarEquipo(params.id);
     }

     @Patch(':id')
     updateEquipo(@Param('id') id: number, @Body() newData: Partial<EquipoEntity>) {
       return this.equipoService.updateEquipo(id, newData);
     }

  
    
  

}


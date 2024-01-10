
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PrestamoEquipoEntity } from 'src/prestamos/entities/prestamo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PrestamoService {
    createEquipo(numero_serie: number, estado: string) {
        throw new Error('Method not implemented.');
    }
    constructor(
        @InjectRepository(PrestamoEquipoEntity)
        private equipoRepository: Repository<PrestamoEquipoEntity>,
    ) { }
    async prestarsevice(idEquipo: any): Promise<void> {
        // Obtener el equipo por ID
        const equipo = await this.equipoRepository.findOne(idEquipo);

        // Verificar si el equipo existe
        if (!equipo) {
            throw new Error('Equipo no encontrado');
        }

        // Actualizar el estado del equipo a "Prestado"
        equipo.estado = 'Prestado';
        await this.equipoRepository.save(equipo);
    }

    devolverEquipo(idEquipo: number): void {
        // Lógica para cambiar el estado del equipo a "Disponible" en la base de datos
    }
}

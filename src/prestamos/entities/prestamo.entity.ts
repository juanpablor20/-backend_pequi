import { AprendiceEntity } from '../../aprendices/entities/aprendice.entity';
import { EquipoEntity } from '../../equipos/entities/equipos.entity';

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('prestamos')
export class PrestamoEquipoEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  Numero_Documento: number;

  @Column()
  numero_serie: number;

  @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })

  fecha_prestamo: Date;


  @ManyToOne(() => EquipoEntity)
  @JoinColumn({ name: 'equiposId' })
  equipos: EquipoEntity;

  @ManyToOne(() => AprendiceEntity)
  @JoinColumn({name:'aprendiceId' }) 
  aprendice: AprendiceEntity;
  estado: string;
}
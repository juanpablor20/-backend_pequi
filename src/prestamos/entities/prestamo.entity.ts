import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('prestamos')
export class PrestamoEquipoEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  numero_documento: number;

  @Column()
  numero_serie: number;

  @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })

  fecha_prestamo: Date;
  @Column({ default: 'Disponible' }) 
  estado: string;
}
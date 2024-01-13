import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
  @Column({ default: 'Disponible' }) 
  estado: string;
  
}
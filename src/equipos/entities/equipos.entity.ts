
import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from "typeorm";

@Entity('equipos')
export class EquipoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numero_serie: number;

  @Column({ default: 'disponible' })
  estado: string;

  @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
  fecha_registro: Date;
}




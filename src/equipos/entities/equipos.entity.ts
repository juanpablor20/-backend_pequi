import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'equipos' })
export class EquipoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numero_serie: number;

  @Column()
  estado: string;


  constructor(numero_serie: number, estado: string) {
    this.numero_serie = numero_serie;
    this.estado = estado;
  }
}




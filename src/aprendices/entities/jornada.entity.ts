// // tecnico.entity.ts
// import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
// import { AprendiceEntity } from './aprendice.entity';

// @Entity('jornada')
// export class Jornada {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   tipo_jornada: string;

//   @OneToMany(() => AprendiceEntity, aprendice => aprendice.jornada)
//   aprendices: AprendiceEntity[];
// }

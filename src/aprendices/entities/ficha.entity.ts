// // tecnico.entity.ts
// import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
// import { AprendiceEntity } from './aprendice.entity';

// @Entity('ficha')
// export class Ficha {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   numero: number;

//   @OneToMany(() => AprendiceEntity, aprendice => aprendice.ficha)
//   aprendices: AprendiceEntity[];
// }

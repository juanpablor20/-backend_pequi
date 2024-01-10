// // tecnico.entity.ts
// import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
// import {AprendiceEntity } from './aprendice.entity';

// @Entity('tegnico')
// export class Tecnico {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   nombre: string;

//   @OneToMany(() => AprendiceEntity, aprendice => aprendice.tecnico)
//   aprendices:AprendiceEntity[];
// }

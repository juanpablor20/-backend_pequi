
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToOne,
} from 'typeorm'

@Entity('aprendices')
export class AprendiceEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

     @Column()
     apellido: string

     @Column()
    tipo_identidad: string

     @Column()
     Numero_Documento: number

     @CreateDateColumn()
     created_at: Date

     @UpdateDateColumn()
     updated_at: Date

    // @OneToMany(() => ContactoEntity, contacto => contacto.aprendiz)
     //contactos: ContactoEntity[];


    // @ManyToOne(() => Tecnico, tecnico => tecnico.aprendices)
    // tecnico: Tecnico;
  
    // @ManyToOne(() => Tecnologo, tecnologo => tecnologo.aprendices)
    // tecnologo: Tecnologo;
  
    // @ManyToOne(() => Ficha, ficha => ficha.aprendices)
    // ficha: Ficha;
  
    // @ManyToOne(() => Programa, programa => programa.aprendices)
    // programa: Programa;
  
    // @ManyToOne(() => Jornada, jornada => jornada.aprendices)
    // jornada: Jornada
  }



  






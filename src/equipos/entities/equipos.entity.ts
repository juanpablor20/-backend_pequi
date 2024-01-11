import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity('equipos')
export class EquipoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    numero_serie: number;


    @Column()
    estado: string;
    
   

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    fecha_registro: Date;

}




import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateEquipoEntity1638457720766 implements MigrationInterface {
    name = 'CreateEquipoEntity1638457720766'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "equipos" (
                "id" SERIAL NOT NULL,
                "numero_serie" integer NOT NULL,
                "estado" character varying NOT NULL,
                CONSTRAINT "PK_eac7b4f1fa3f437d7c190f565e1" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "equipos"
        `);
    }
}

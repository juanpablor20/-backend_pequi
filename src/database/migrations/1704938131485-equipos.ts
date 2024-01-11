import { MigrationInterface, QueryRunner } from "typeorm";

export class Equipos1704938131485 implements MigrationInterface {
    name = 'Equipos1704938131485';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`equipos\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`numero_serie\` int NULL,  -- Cambiado a NULL para permitir valores nulos
                \`estado\` varchar(255) NOT NULL,
                \`fecha_registro\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY (\`id\`)
            ) ENGINE=InnoDB
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`equipos\``);
    }
}


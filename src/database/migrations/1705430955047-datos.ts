import { MigrationInterface, QueryRunner } from "typeorm";

export class  datos1705430955047 implements MigrationInterface {
    name = ' datos1705430955047'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`aprendices\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`apellido\` varchar(255) NOT NULL, \`tipo_identidad\` varchar(255) NOT NULL, \`Numero_Documento\` int NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`equipos\` (\`id\` int NOT NULL AUTO_INCREMENT, \`numero_serie\` int NOT NULL, \`estado\` varchar(255) NOT NULL DEFAULT 'disponible', \`fecha_registro\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`prestamos\` (\`id\` int NOT NULL AUTO_INCREMENT, \`Numero_Documento\` int NOT NULL, \`numero_serie\` int NOT NULL, \`fecha_prestamo\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`fechaDevolucion\` timestamp NULL, \`equiposId\` int NULL, \`aprendiceId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`prestamos\` ADD CONSTRAINT \`FK_31edd621e4d3b8e0df2e2565d43\` FOREIGN KEY (\`equiposId\`) REFERENCES \`equipos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`prestamos\` ADD CONSTRAINT \`FK_71e60c0ffbd30516bb3c2ff6502\` FOREIGN KEY (\`aprendiceId\`) REFERENCES \`aprendices\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`prestamos\` DROP FOREIGN KEY \`FK_71e60c0ffbd30516bb3c2ff6502\``);
        await queryRunner.query(`ALTER TABLE \`prestamos\` DROP FOREIGN KEY \`FK_31edd621e4d3b8e0df2e2565d43\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`prestamos\``);
        await queryRunner.query(`DROP TABLE \`equipos\``);
        await queryRunner.query(`DROP TABLE \`aprendices\``);
    }

}

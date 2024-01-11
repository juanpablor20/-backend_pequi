import { MigrationInterface, QueryRunner } from "typeorm";

export class  prestamos1705003686213 implements MigrationInterface {
    name = ' prestamos1705003686213'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`prestamos\` (\`id\` int NOT NULL AUTO_INCREMENT, \`numero_documento\` int NOT NULL, \`numero_serie\` int NOT NULL, \`fecha_prestamo\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`estado\` varchar(255) NOT NULL DEFAULT 'Disponible', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
      }

    public async down(queryRunner: QueryRunner): Promise<void> {
       
        await queryRunner.query(`DROP TABLE \`prestamos\``);
    }

}

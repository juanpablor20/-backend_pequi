import { MigrationInterface, QueryRunner } from "typeorm";

export class aprendices1704991773990 implements MigrationInterface {
    name = 'aprendices1704991773990';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`aprendices\` (
                \`id\` varchar(36) NOT NULL,
                \`name\` varchar(255) NOT NULL,
                \`apellido\` varchar(255) NOT NULL,
                \`tipo_identidad\` varchar(255) NOT NULL,
                \`Numero_Documento\` varchar(255) NOT NULL,
                \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                PRIMARY KEY (\`id\`)
            ) ENGINE=InnoDB
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`aprendices\``);
    }
}

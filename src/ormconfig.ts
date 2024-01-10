import { join } from 'path';
import { DatabaseModule } from './type-orm-module/type-orm-module.module';

const config: DatabaseModule = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'prueba',
    entities: [join(__dirname, '**', '*.entity.{ts,js}')],
   
    migrations: [__dirname + '/../migrations/**/*{.ts,.js}'],
    cli: {
        migrationsDir: './migrations'},
    synchronize: true,
    logging: true
    
    
}

export = config;
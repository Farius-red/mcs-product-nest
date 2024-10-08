import { DataSource } from 'typeorm';
import { join } from 'path';
import { Compra } from '../infraestructure/entitis/compra.entity';
import { Producto } from '../infraestructure/entitis/producto.entity';

export const AppDataSource = new DataSource({
  type: 'postgres', // Cambiado a postgres
  host: 'juliaosystem.server', // Asegúrate de que esté correcto según tu configuración
  port: 30432, // Puerto estándar para PostgreSQL
  username: 'juliaosistemdev', // Cambia esto por tu usuario de PostgreSQL
  password: '0d068B4290@123', // Cambia esto por tu contraseña de PostgreSQL
  database: 'juliaosistem', // Nombre de la base de datos
  synchronize: false,
  logging: true,
  entities: [Compra,Producto],
  schema: 'public',
  connectTimeoutMS: 7000,
});

AppDataSource.initialize().then(() => {
  console.log('Data Source has been initialized!');
}).catch((err) => {
  console.error('Error initializing Data Source', err);
});
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Producto {

  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precio: number;

  @Column({ type: 'text' }) // Configuración para la descripción
  descripcion: string;

}

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BeforeInsert } from 'typeorm';

import { v4 as uuidv4 } from 'uuid';
import { Producto } from './producto.entity';

@Entity()
export class Compra {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({type:'varchar'})
  idUsuario: string;

  @Column({type:'varchar'})
  idProducto: string;

  @Column({ type: 'int' })
  cantidad: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;

  @BeforeInsert()
  generateId() {
    this.id = uuidv4(); // Genera un nuevo UUID
  }
}

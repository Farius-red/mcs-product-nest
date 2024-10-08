import { Entity, PrimaryGeneratedColumn, Column, } from 'typeorm';

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

}

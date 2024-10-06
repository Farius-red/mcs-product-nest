import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { v4 as uuidv4 } from 'uuid';

export class CompraDTO {

  @ApiProperty()
  @Expose()
  id: string;


  @ApiProperty()
  @Expose()
  idUsuario: string;


  @ApiProperty()
  @Expose()
  idProducto: string;

  @Expose()
  @ApiProperty()
  cantidad: number;



}
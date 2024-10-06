import { DataSource, Repository } from 'typeorm';
import { Compra } from '../entitis/compra.entity';
import { Injectable } from '@nestjs/common';


@Injectable()
export class CompraRepository extends Repository<Compra>{

}
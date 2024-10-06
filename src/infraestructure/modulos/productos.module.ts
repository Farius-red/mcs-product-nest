import { Module } from '@nestjs/common';
import { ProductosController } from '../../api/controller/productos.controller';
import { CompraMapper } from '../../api/mappers/compraMapper';
import { CompraService } from '../servicios/primary/compraService';
import { CompraRepository } from '../repositorios/compraRepository';
import { CompraServiceAdapter } from '../adapters/secondary/compraServiceAdapter';
import { CompraImpl } from '../adapters/primary/compraImpl';
import { UtilModule } from '../../utils/util.module';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from '../../utils/data-source';
import { Compra } from '../entitis/compra.entity';

@Module({
  controllers: [ProductosController],
  imports:[
    UtilModule,
    AutomapperModule,
    TypeOrmModule.forFeature([Compra]),
],
  providers: [
    CompraRepository,
    CompraService,
    CompraServiceAdapter,
    CompraImpl,
    CompraMapper
  ],
  exports:[
    CompraService,
    CompraServiceAdapter,
    CompraImpl,
    CompraMapper
  ]
})
export class ProductosModule {}

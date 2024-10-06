import { Module } from '@nestjs/common';
import { ProductosModule } from './infraestructure/modulos/productos.module';
import { AppDataSource } from './utils/data-source';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UtilModule } from './utils/util.module';
import { classes } from '@automapper/classes';
import { AutomapperModule } from '@automapper/nestjs';

@Module({
  imports: [
    ProductosModule,
    TypeOrmModule.forRoot(AppDataSource.options),
  //  UtilModule,
    AutomapperModule.forRoot({
      strategyInitializer: classes(), // Inicializa las estrategias de clases
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

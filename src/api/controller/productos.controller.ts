import { Controller, Get, Post, Body} from '@nestjs/common';

import { CompraService } from '../../infraestructure/servicios/primary/compraService';
import { CompraDTO } from '../dto/compraDTO';
import { Observable } from 'rxjs';
import { PlantillaResponse } from '../../utils/plantillaResponse';


@Controller('productos')
export class ProductosController {
  constructor(
    private readonly compraService:CompraService
              ) {}

  @Post('add')
  add(@Body() compraDTO : CompraDTO): Observable<PlantillaResponse<CompraDTO>> {
    return this.compraService.add(compraDTO);
  }

  @Get('all')
  all(): Observable<PlantillaResponse<CompraDTO>> {
    return this.compraService.all();
  }

}

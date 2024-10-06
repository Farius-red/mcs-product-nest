import { Injectable } from '@nestjs/common';
import { CompraService } from '../../servicios/primary/compraService';
import { CompraServiceAdapter } from '../secondary/compraServiceAdapter';
import { CompraDTO } from '../../../api/dto/compraDTO';
import { Observable } from 'rxjs';
import { PlantillaResponse } from '../../../utils/plantillaResponse';

@Injectable()
export class CompraImpl {
  constructor(private readonly compraAdapter: CompraServiceAdapter) {
  }

  add(rq:CompraDTO):Observable<PlantillaResponse<CompraDTO>>{
    return this.compraAdapter.add(rq);
  }

  all():Observable<PlantillaResponse<CompraDTO>> {
    return this.compraAdapter.all();
  }

}
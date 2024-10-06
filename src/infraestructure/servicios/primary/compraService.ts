import { Injectable } from '@nestjs/common';
import { CompraDTO } from '../../../api/dto/compraDTO';
import { PlantillaResponse } from '../../../utils/plantillaResponse';
import { Observable } from 'rxjs';
import { CompraImpl } from '../../adapters/primary/compraImpl';

@Injectable()
export class CompraService {

  constructor(private compraImpl:CompraImpl) {
  }

  add(compraDTO: CompraDTO): Observable<PlantillaResponse<CompraDTO>> {
    return  this.compraImpl.add(compraDTO);
  }

  all(): Observable<PlantillaResponse<CompraDTO>> {
    return this.compraImpl.all()
  }

}
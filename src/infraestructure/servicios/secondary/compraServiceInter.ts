import { Observable, Observer } from 'rxjs';
import { CompraDTO } from '../../../api/dto/compraDTO';
import { PlantillaResponse } from '../../../utils/plantillaResponse';

export  interface CompraServiceInter {
  add(rq: CompraDTO): Observable<PlantillaResponse<CompraDTO>>;
  all(): Observable<PlantillaResponse<CompraDTO>>;
}
import { Injectable } from '@nestjs/common';
import { CompraServiceInter } from '../../servicios/secondary/compraServiceInter';
import { CompraDTO } from '../../../api/dto/compraDTO';
import { catchError, from, map, Observable, Observer } from 'rxjs';
import { PlantillaResponse } from '../../../utils/plantillaResponse';
import { CompraMapper } from '../../../api/mappers/compraMapper';
import { UtilResponses } from '../../../utils/utilResponses';
import { ResponseType } from '../../../utils/responseType';
import { plainToClass, plainToInstance } from 'class-transformer';
import { Compra } from '../../entitis/compra.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CompraServiceAdapter implements CompraServiceInter{
  constructor(private readonly compraMapper: CompraMapper,
              private readonly utilResponses: UtilResponses<CompraDTO>,
              @InjectRepository(Compra)
              private readonly compraRepository: Repository<Compra>
  ) {
  }

  generateIdCompraDTO(compraDTO: CompraDTO): CompraDTO {
    if (compraDTO.id=="" || compraDTO.id == undefined) compraDTO.id =uuidv4();
    return compraDTO;
  }

    add(rq: CompraDTO): Observable<PlantillaResponse<CompraDTO>> {

      return from(this.compraRepository.save(plainToClass(Compra,this.generateIdCompraDTO(rq)))).pipe(
         map(response => {
           const dtoResponse = plainToClass(CompraDTO,response);
             return this.utilResponses.buildResponse(ResponseType.CREATED, dtoResponse);
      }),
      catchError(error => {

        console.error("CompraServiceAdapter.add()", error);
        return [this.utilResponses.buildResponse(ResponseType.FALLO, undefined)];
      }),
    );
  }

  all(): Observable<PlantillaResponse<CompraDTO>> {
    return new Observable<PlantillaResponse<CompraDTO>>(observer => {
      from(this.compraRepository.find()).subscribe({
        next: response => {
          observer.next(this.utilResponses.buildResponse(ResponseType.GET, undefined, plainToInstance(CompraDTO,response)));
          observer.complete();
        },
        error: error => {
          console.error("compraServiceAdapter.get()",error);
          observer.error(this.utilResponses.buildResponse(ResponseType.FALLO, undefined));
        }
      });
    });
  }


}
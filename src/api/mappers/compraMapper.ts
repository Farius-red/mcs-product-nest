import { Injectable } from '@nestjs/common';
import { Mapper } from '@automapper/core';
import { CompraDTO } from '../dto/compraDTO';
import { Compra } from '../../infraestructure/entitis/compra.entity';

export class CompraMapper {
  constructor(private readonly mapper: Mapper) {}

  toEntity(dto: CompraDTO): Compra {

    return this.mapper.map(dto,CompraDTO,Compra)
  }

  toDTO(entity: Compra): CompraDTO {
    return this.mapper.map(entity, Compra, CompraDTO);
  }

  toDTOs(entities: Compra[]): CompraDTO[] {
    if (!entities) {
      return [];
    }
    return entities.map(entity => this.toDTO(entity));
  }
}

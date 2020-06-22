import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'colegiados', table: 'conceptoingreso'}}
})
export class Conceptoingreso extends Entity {
  @property({
    type: 'number',
    required: false,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {columnName: 'id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  id: number;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'denominacion', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  denominacion?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'monto', dataType: 'decimal', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  monto?: number;

  @property({
    type: 'number',
    precision: 3,
    scale: 0,
    mysql: {columnName: 'agremiado', dataType: 'tinyint', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'Y'},
  })
  agremiado?: number;

  @property({
    type: 'string',
    length: 8,
    mysql: {columnName: 'codigo', dataType: 'varchar', dataLength: 8, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  codigo?: string;

  @property({
    type: 'string',
    length: 10,
    mysql: {columnName: 'abreviatura', dataType: 'varchar', dataLength: 10, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  abreviatura?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'item', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  item?: number;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'unidad', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  unidad?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Conceptoingreso>) {
    super(data);
  }
}

export interface ConceptoingresoRelations {
  // describe navigational properties here
}

export type ConceptoingresoWithRelations = Conceptoingreso & ConceptoingresoRelations;

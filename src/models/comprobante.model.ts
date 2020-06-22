import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'colegiados', table: 'comprobante'}}
})
export class Comprobante extends Entity {
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
    length: 10,
    mysql: {columnName: 'codigo', dataType: 'varchar', dataLength: 10, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  codigo?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'denominacion', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  denominacion?: string;

  @property({
    type: 'string',
    length: 100,
    mysql: {columnName: 'abreviatura', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  abreviatura?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'longitudserie', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  longitudserie?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'longitudnumero', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  longitudnumero?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'item', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  item?: number;

  @property({
    type: 'number',
    precision: 3,
    scale: 0,
    mysql: {columnName: 'estado', dataType: 'tinyint', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'Y'},
  })
  estado?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Comprobante>) {
    super(data);
  }
}

export interface ComprobanteRelations {
  // describe navigational properties here
}

export type ComprobanteWithRelations = Comprobante & ComprobanteRelations;

import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'colegiados', table: 'multa'}}})
export class Multa extends Entity {
  @property({
    type: 'number',
    required: false,
    precision: 19,
    scale: 0,
    id: 1,
    mysql: {columnName: 'id', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'N'},
  })
  id: number;

  @property({
    type: 'string',
    length: 500,
    mysql: {columnName: 'motivo_multa', dataType: 'varchar', dataLength: 500, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  motivoMulta?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'monto', dataType: 'decimal', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  monto?: number;

  @property({
    type: 'string',
    length: 8,
    mysql: {columnName: 'dniagremiado', dataType: 'varchar', dataLength: 8, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  dniagremiado?: string;

  @property({
    type: 'date',
    mysql: {columnName: 'fecha', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  fecha?: string;

  @property({
    type: 'number',
    precision: 3,
    scale: 0,
    mysql: {columnName: 'pagado', dataType: 'tinyint', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'Y'},
  })
  pagado?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Multa>) {
    super(data);
  }
}

export interface MultaRelations {
  // describe navigational properties here
}

export type MultaWithRelations = Multa & MultaRelations;

import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'colegiados', table: 'transaccion'}}
})
export class Transaccion extends Entity {
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
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'agremiadoId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  agremiadoId?: number;

  @property({
    type: 'string',
    length: 8,
    mysql: {columnName: 'dniAgremiado', dataType: 'varchar', dataLength: 8, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  dniAgremiado?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'comprobanteId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  comprobanteId?: number;

  @property({
    type: 'string',
    length: 10,
    mysql: {columnName: 'codigoComprobante', dataType: 'varchar', dataLength: 10, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  codigoComprobante?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'motivoanulacionId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  motivoanulacionId?: number;

  @property({
    type: 'date',
    mysql: {columnName: 'fechaTransaccion', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  fechaTransaccion?: string;

  @property({
    type: 'date',
    mysql: {columnName: 'fechaEmision', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  fechaEmision?: string;

  @property({
    type: 'date',
    mysql: {columnName: 'fechamodificacion', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  fechamodificacion?: string;

  @property({
    type: 'string',
    length: 3,
    mysql: {columnName: 'seriecomprobante', dataType: 'varchar', dataLength: 3, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  seriecomprobante?: string;

  @property({
    type: 'string',
    length: 8,
    mysql: {columnName: 'numerocomprobante', dataType: 'varchar', dataLength: 8, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  numerocomprobante?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'descuentosoles', dataType: 'decimal', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  descuentosoles?: number;

  @property({
    type: 'number',
    precision: 3,
    scale: 0,
    mysql: {columnName: 'anulado', dataType: 'tinyint', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'Y'},
  })
  anulado?: number;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'estadoaprobado', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  estadoaprobado?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'fechaprobado', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  fechaprobado?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'ipenvio', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  ipenvio?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'os', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  os?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'fotocomprobante', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  fotocomprobante?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'usuarioId', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  usuarioId?: string;

  @property({
    type: 'number',
    precision: 3,
    scale: 0,
    mysql: {columnName: 'enviocorreo', dataType: 'tinyint', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'Y'},
  })
  enviocorreo?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Transaccion>) {
    super(data);
  }
}

export interface TransaccionRelations {
  // describe navigational properties here
}

export type TransaccionWithRelations = Transaccion & TransaccionRelations;

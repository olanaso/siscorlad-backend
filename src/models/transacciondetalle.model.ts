import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'colegiados', table: 'transacciondetalle'}}
})
export class Transacciondetalle extends Entity {
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
    mysql: {columnName: 'transaccionId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  transaccionId?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'conceptopingresoId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  conceptopingresoId?: number;

  @property({
    type: 'string',
    length: 8,
    mysql: {columnName: 'conceptoingreso_codigo', dataType: 'varchar', dataLength: 8, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  conceptoingresoCodigo?: string;

  @property({
    type: 'number',
    precision: 3,
    scale: 0,
    mysql: {columnName: 'afectoagremiado', dataType: 'tinyint', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'Y'},
  })
  afectoagremiado?: number;

  @property({
    type: 'date',
    mysql: {columnName: 'fecha_inicio', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  fechaInicio?: string;

  @property({
    type: 'date',
    mysql: {columnName: 'fechafin', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  fechafin?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'conceptoingreso', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  conceptoingreso?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'cantidad', dataType: 'decimal', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  cantidad?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'precio', dataType: 'decimal', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  precio?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'descuento', dataType: 'decimal', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  descuento?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'usuarioId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  usuarioId?: number;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'unidad', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  unidad?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'multaId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  multaId?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Transacciondetalle>) {
    super(data);
  }
}

export interface TransacciondetalleRelations {
  // describe navigational properties here
}

export type TransacciondetalleWithRelations = Transacciondetalle & TransacciondetalleRelations;

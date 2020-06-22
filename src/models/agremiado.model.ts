import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'colegiados', table: 'agremiado'}}
})
export class Agremiado extends Entity {
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
    mysql: {columnName: 'codigocolegiado', dataType: 'decimal', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  codigocolegiado?: number;

  @property({
    type: 'string',
    length: 8,
    mysql: {columnName: 'dni', dataType: 'varchar', dataLength: 8, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  dni?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'nombres', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  nombres?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'apellidopaterno', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  apellidopaterno?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'apellidomaterno', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  apellidomaterno?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'correo', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  correo?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'celular', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  celular?: string;

  @property({
    type: 'date',
    mysql: {columnName: 'fechanacimiento', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  fechanacimiento?: string;

  @property({
    type: 'string',
    length: 300,
    mysql: {columnName: 'direccion', dataType: 'varchar', dataLength: 300, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  direccion?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'clavegestion', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  clavegestion?: string;

  @property({
    type: 'number',
    precision: 3,
    scale: 0,
    mysql: {columnName: 'activo', dataType: 'tinyint', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'Y'},
  })
  activo?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'capituloId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  capituloId?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'especialidadId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  especialidadId?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Agremiado>) {
    super(data);
  }
}

export interface AgremiadoRelations {
  // describe navigational properties here
}

export type AgremiadoWithRelations = Agremiado & AgremiadoRelations;

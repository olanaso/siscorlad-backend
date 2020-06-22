import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'colegiados', table: 'certificado'}}
})
export class Certificado extends Entity {
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
    mysql: {columnName: 'numero', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  numero?: string;

  @property({
    type: 'date',
    mysql: {columnName: 'fechaemision', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  fechaemision?: string;

  @property({
    type: 'date',
    mysql: {columnName: 'fecharegistro', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  fecharegistro?: string;

  @property({
    type: 'date',
    mysql: {columnName: 'fechaimpresion', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  fechaimpresion?: string;

  @property({
    type: 'date',
    mysql: {columnName: 'fechainicio_vigencia', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  fechainicioVigencia?: string;

  @property({
    type: 'date',
    mysql: {columnName: 'fechafinvigencia', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  fechafinvigencia?: string;

  @property({
    type: 'string',
    length: 8,
    mysql: {columnName: 'agremiadoDni', dataType: 'varchar', dataLength: 8, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  agremiadoDni?: string;

  @property({
    type: 'number',
    precision: 3,
    scale: 0,
    mysql: {columnName: 'impresion', dataType: 'tinyint', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'Y'},
  })
  impresion?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'transacciondetalleId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  transacciondetalleId?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Certificado>) {
    super(data);
  }
}

export interface CertificadoRelations {
  // describe navigational properties here
}

export type CertificadoWithRelations = Certificado & CertificadoRelations;

import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'colegiados', table: 'parametro'}}
})
export class Parametro extends Entity {
  @property({
    type: 'string',
    required: true,
    length: 200,
    id: 1,
    mysql: {columnName: 'codigo', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  codigo: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'denominacion', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  denominacion?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'valor', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valor?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'valor2', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valor2?: string;

  @property({
    type: 'string',
    length: 200,
    mysql: {columnName: 'valor3', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  valor3?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Parametro>) {
    super(data);
  }
}

export interface ParametroRelations {
  // describe navigational properties here
}

export type ParametroWithRelations = Parametro & ParametroRelations;

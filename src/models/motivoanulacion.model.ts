import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'colegiados', table: 'motivoanulacion'}}
})
export class Motivoanulacion extends Entity {
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
    mysql: {columnName: 'demoninacion', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  demoninacion?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Motivoanulacion>) {
    super(data);
  }
}

export interface MotivoanulacionRelations {
  // describe navigational properties here
}

export type MotivoanulacionWithRelations = Motivoanulacion & MotivoanulacionRelations;

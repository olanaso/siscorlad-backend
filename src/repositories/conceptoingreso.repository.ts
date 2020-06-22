import {DefaultCrudRepository} from '@loopback/repository';
import {Conceptoingreso, ConceptoingresoRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ConceptoingresoRepository extends DefaultCrudRepository<
  Conceptoingreso,
  typeof Conceptoingreso.prototype.id,
  ConceptoingresoRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Conceptoingreso, dataSource);
  }
}

import {DefaultCrudRepository} from '@loopback/repository';
import {Motivoanulacion, MotivoanulacionRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MotivoanulacionRepository extends DefaultCrudRepository<
  Motivoanulacion,
  typeof Motivoanulacion.prototype.id,
  MotivoanulacionRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Motivoanulacion, dataSource);
  }
}

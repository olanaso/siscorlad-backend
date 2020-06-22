import {DefaultCrudRepository} from '@loopback/repository';
import {Agremiado, AgremiadoRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AgremiadoRepository extends DefaultCrudRepository<
  Agremiado,
  typeof Agremiado.prototype.id,
  AgremiadoRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Agremiado, dataSource);
  }
}

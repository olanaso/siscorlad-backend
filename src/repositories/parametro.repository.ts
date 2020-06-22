import {DefaultCrudRepository} from '@loopback/repository';
import {Parametro, ParametroRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ParametroRepository extends DefaultCrudRepository<
  Parametro,
  typeof Parametro.prototype.codigo,
  ParametroRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Parametro, dataSource);
  }
}

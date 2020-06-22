import {DefaultCrudRepository} from '@loopback/repository';
import {Multa, MultaRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MultaRepository extends DefaultCrudRepository<
  Multa,
  typeof Multa.prototype.id,
  MultaRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Multa, dataSource);
  }
}

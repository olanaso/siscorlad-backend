import {DefaultCrudRepository} from '@loopback/repository';
import {Transaccion, TransaccionRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TransaccionRepository extends DefaultCrudRepository<
  Transaccion,
  typeof Transaccion.prototype.id,
  TransaccionRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Transaccion, dataSource);
  }
}

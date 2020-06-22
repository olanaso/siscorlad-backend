import {DefaultCrudRepository} from '@loopback/repository';
import {Transacciondetalle, TransacciondetalleRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TransacciondetalleRepository extends DefaultCrudRepository<
  Transacciondetalle,
  typeof Transacciondetalle.prototype.id,
  TransacciondetalleRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Transacciondetalle, dataSource);
  }
}

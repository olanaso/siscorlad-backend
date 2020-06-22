import {DefaultCrudRepository} from '@loopback/repository';
import {Capitulo, CapituloRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CapituloRepository extends DefaultCrudRepository<
  Capitulo,
  typeof Capitulo.prototype.id,
  CapituloRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Capitulo, dataSource);
  }
}

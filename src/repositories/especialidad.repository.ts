import {DefaultCrudRepository} from '@loopback/repository';
import {Especialidad, EspecialidadRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EspecialidadRepository extends DefaultCrudRepository<
  Especialidad,
  typeof Especialidad.prototype.id,
  EspecialidadRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Especialidad, dataSource);
  }
}

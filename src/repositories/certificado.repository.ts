import {DefaultCrudRepository} from '@loopback/repository';
import {Certificado, CertificadoRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CertificadoRepository extends DefaultCrudRepository<
  Certificado,
  typeof Certificado.prototype.id,
  CertificadoRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Certificado, dataSource);
  }
}

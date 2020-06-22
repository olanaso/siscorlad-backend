import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Certificado} from '../models';
import {CertificadoRepository} from '../repositories';

export class CertificadoController {
  constructor(
    @repository(CertificadoRepository)
    public certificadoRepository : CertificadoRepository,
  ) {}

  @post('/certificados', {
    responses: {
      '200': {
        description: 'Certificado model instance',
        content: {'application/json': {schema: getModelSchemaRef(Certificado)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Certificado, {
            title: 'NewCertificado',
            exclude: ['id'],
          }),
        },
      },
    })
    certificado: Omit<Certificado, 'id'>,
  ): Promise<Certificado> {
    return this.certificadoRepository.create(certificado);
  }

  @get('/certificados/count', {
    responses: {
      '200': {
        description: 'Certificado model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Certificado) where?: Where<Certificado>,
  ): Promise<Count> {
    return this.certificadoRepository.count(where);
  }

  @get('/certificados', {
    responses: {
      '200': {
        description: 'Array of Certificado model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Certificado, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Certificado) filter?: Filter<Certificado>,
  ): Promise<Certificado[]> {
    return this.certificadoRepository.find(filter);
  }

  @patch('/certificados', {
    responses: {
      '200': {
        description: 'Certificado PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Certificado, {partial: true}),
        },
      },
    })
    certificado: Certificado,
    @param.where(Certificado) where?: Where<Certificado>,
  ): Promise<Count> {
    return this.certificadoRepository.updateAll(certificado, where);
  }

  @get('/certificados/{id}', {
    responses: {
      '200': {
        description: 'Certificado model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Certificado, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Certificado, {exclude: 'where'}) filter?: FilterExcludingWhere<Certificado>
  ): Promise<Certificado> {
    return this.certificadoRepository.findById(id, filter);
  }

  @patch('/certificados/{id}', {
    responses: {
      '204': {
        description: 'Certificado PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Certificado, {partial: true}),
        },
      },
    })
    certificado: Certificado,
  ): Promise<void> {
    await this.certificadoRepository.updateById(id, certificado);
  }

  @put('/certificados/{id}', {
    responses: {
      '204': {
        description: 'Certificado PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() certificado: Certificado,
  ): Promise<void> {
    await this.certificadoRepository.replaceById(id, certificado);
  }

  @del('/certificados/{id}', {
    responses: {
      '204': {
        description: 'Certificado DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.certificadoRepository.deleteById(id);
  }
}

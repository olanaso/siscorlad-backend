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
import {Comprobante} from '../models';
import {ComprobanteRepository} from '../repositories';

export class ComprobanteController {
  constructor(
    @repository(ComprobanteRepository)
    public comprobanteRepository : ComprobanteRepository,
  ) {}

  @post('/comprobantes', {
    responses: {
      '200': {
        description: 'Comprobante model instance',
        content: {'application/json': {schema: getModelSchemaRef(Comprobante)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Comprobante, {
            title: 'NewComprobante',
            exclude: ['id'],
          }),
        },
      },
    })
    comprobante: Omit<Comprobante, 'id'>,
  ): Promise<Comprobante> {
    return this.comprobanteRepository.create(comprobante);
  }

  @get('/comprobantes/count', {
    responses: {
      '200': {
        description: 'Comprobante model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Comprobante) where?: Where<Comprobante>,
  ): Promise<Count> {
    return this.comprobanteRepository.count(where);
  }

  @get('/comprobantes', {
    responses: {
      '200': {
        description: 'Array of Comprobante model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Comprobante, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Comprobante) filter?: Filter<Comprobante>,
  ): Promise<Comprobante[]> {
    return this.comprobanteRepository.find(filter);
  }

  @patch('/comprobantes', {
    responses: {
      '200': {
        description: 'Comprobante PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Comprobante, {partial: true}),
        },
      },
    })
    comprobante: Comprobante,
    @param.where(Comprobante) where?: Where<Comprobante>,
  ): Promise<Count> {
    return this.comprobanteRepository.updateAll(comprobante, where);
  }

  @get('/comprobantes/{id}', {
    responses: {
      '200': {
        description: 'Comprobante model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Comprobante, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Comprobante, {exclude: 'where'}) filter?: FilterExcludingWhere<Comprobante>
  ): Promise<Comprobante> {
    return this.comprobanteRepository.findById(id, filter);
  }

  @patch('/comprobantes/{id}', {
    responses: {
      '204': {
        description: 'Comprobante PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Comprobante, {partial: true}),
        },
      },
    })
    comprobante: Comprobante,
  ): Promise<void> {
    await this.comprobanteRepository.updateById(id, comprobante);
  }

  @put('/comprobantes/{id}', {
    responses: {
      '204': {
        description: 'Comprobante PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() comprobante: Comprobante,
  ): Promise<void> {
    await this.comprobanteRepository.replaceById(id, comprobante);
  }

  @del('/comprobantes/{id}', {
    responses: {
      '204': {
        description: 'Comprobante DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.comprobanteRepository.deleteById(id);
  }
}

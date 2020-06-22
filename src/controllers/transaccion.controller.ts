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
import {Transaccion} from '../models';
import {TransaccionRepository} from '../repositories';

export class TransaccionController {
  constructor(
    @repository(TransaccionRepository)
    public transaccionRepository : TransaccionRepository,
  ) {}

  @post('/transaccions', {
    responses: {
      '200': {
        description: 'Transaccion model instance',
        content: {'application/json': {schema: getModelSchemaRef(Transaccion)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Transaccion, {
            title: 'NewTransaccion',
            exclude: ['id'],
          }),
        },
      },
    })
    transaccion: Omit<Transaccion, 'id'>,
  ): Promise<Transaccion> {
    return this.transaccionRepository.create(transaccion);
  }

  @get('/transaccions/count', {
    responses: {
      '200': {
        description: 'Transaccion model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Transaccion) where?: Where<Transaccion>,
  ): Promise<Count> {
    return this.transaccionRepository.count(where);
  }

  @get('/transaccions', {
    responses: {
      '200': {
        description: 'Array of Transaccion model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Transaccion, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Transaccion) filter?: Filter<Transaccion>,
  ): Promise<Transaccion[]> {
    return this.transaccionRepository.find(filter);
  }

  @patch('/transaccions', {
    responses: {
      '200': {
        description: 'Transaccion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Transaccion, {partial: true}),
        },
      },
    })
    transaccion: Transaccion,
    @param.where(Transaccion) where?: Where<Transaccion>,
  ): Promise<Count> {
    return this.transaccionRepository.updateAll(transaccion, where);
  }

  @get('/transaccions/{id}', {
    responses: {
      '200': {
        description: 'Transaccion model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Transaccion, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Transaccion, {exclude: 'where'}) filter?: FilterExcludingWhere<Transaccion>
  ): Promise<Transaccion> {
    return this.transaccionRepository.findById(id, filter);
  }

  @patch('/transaccions/{id}', {
    responses: {
      '204': {
        description: 'Transaccion PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Transaccion, {partial: true}),
        },
      },
    })
    transaccion: Transaccion,
  ): Promise<void> {
    await this.transaccionRepository.updateById(id, transaccion);
  }

  @put('/transaccions/{id}', {
    responses: {
      '204': {
        description: 'Transaccion PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() transaccion: Transaccion,
  ): Promise<void> {
    await this.transaccionRepository.replaceById(id, transaccion);
  }

  @del('/transaccions/{id}', {
    responses: {
      '204': {
        description: 'Transaccion DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.transaccionRepository.deleteById(id);
  }
}

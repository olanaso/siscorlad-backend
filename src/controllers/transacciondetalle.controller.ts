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
import {Transacciondetalle} from '../models';
import {TransacciondetalleRepository} from '../repositories';

export class TransacciondetalleController {
  constructor(
    @repository(TransacciondetalleRepository)
    public transacciondetalleRepository : TransacciondetalleRepository,
  ) {}

  @post('/transacciondetalles', {
    responses: {
      '200': {
        description: 'Transacciondetalle model instance',
        content: {'application/json': {schema: getModelSchemaRef(Transacciondetalle)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Transacciondetalle, {
            title: 'NewTransacciondetalle',
            exclude: ['id'],
          }),
        },
      },
    })
    transacciondetalle: Omit<Transacciondetalle, 'id'>,
  ): Promise<Transacciondetalle> {
    return this.transacciondetalleRepository.create(transacciondetalle);
  }

  @get('/transacciondetalles/count', {
    responses: {
      '200': {
        description: 'Transacciondetalle model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Transacciondetalle) where?: Where<Transacciondetalle>,
  ): Promise<Count> {
    return this.transacciondetalleRepository.count(where);
  }

  @get('/transacciondetalles', {
    responses: {
      '200': {
        description: 'Array of Transacciondetalle model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Transacciondetalle, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Transacciondetalle) filter?: Filter<Transacciondetalle>,
  ): Promise<Transacciondetalle[]> {
    return this.transacciondetalleRepository.find(filter);
  }

  @patch('/transacciondetalles', {
    responses: {
      '200': {
        description: 'Transacciondetalle PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Transacciondetalle, {partial: true}),
        },
      },
    })
    transacciondetalle: Transacciondetalle,
    @param.where(Transacciondetalle) where?: Where<Transacciondetalle>,
  ): Promise<Count> {
    return this.transacciondetalleRepository.updateAll(transacciondetalle, where);
  }

  @get('/transacciondetalles/{id}', {
    responses: {
      '200': {
        description: 'Transacciondetalle model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Transacciondetalle, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Transacciondetalle, {exclude: 'where'}) filter?: FilterExcludingWhere<Transacciondetalle>
  ): Promise<Transacciondetalle> {
    return this.transacciondetalleRepository.findById(id, filter);
  }

  @patch('/transacciondetalles/{id}', {
    responses: {
      '204': {
        description: 'Transacciondetalle PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Transacciondetalle, {partial: true}),
        },
      },
    })
    transacciondetalle: Transacciondetalle,
  ): Promise<void> {
    await this.transacciondetalleRepository.updateById(id, transacciondetalle);
  }

  @put('/transacciondetalles/{id}', {
    responses: {
      '204': {
        description: 'Transacciondetalle PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() transacciondetalle: Transacciondetalle,
  ): Promise<void> {
    await this.transacciondetalleRepository.replaceById(id, transacciondetalle);
  }

  @del('/transacciondetalles/{id}', {
    responses: {
      '204': {
        description: 'Transacciondetalle DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.transacciondetalleRepository.deleteById(id);
  }
}

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
import {Agremiado} from '../models';
import {AgremiadoRepository} from '../repositories';

export class AgremiadoController {
  constructor(
    @repository(AgremiadoRepository)
    public agremiadoRepository : AgremiadoRepository,
  ) {}

  @post('/agremiados', {
    responses: {
      '200': {
        description: 'Agremiado model instance',
        content: {'application/json': {schema: getModelSchemaRef(Agremiado)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Agremiado, {
            title: 'NewAgremiado',
            exclude: ['id'],
          }),
        },
      },
    })
    agremiado: Omit<Agremiado, 'id'>,
  ): Promise<Agremiado> {
    return this.agremiadoRepository.create(agremiado);
  }

  @get('/agremiados/count', {
    responses: {
      '200': {
        description: 'Agremiado model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Agremiado) where?: Where<Agremiado>,
  ): Promise<Count> {
    return this.agremiadoRepository.count(where);
  }

  @get('/agremiados', {
    responses: {
      '200': {
        description: 'Array of Agremiado model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Agremiado, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Agremiado) filter?: Filter<Agremiado>,
  ): Promise<Agremiado[]> {
    return this.agremiadoRepository.find(filter);
  }

  @patch('/agremiados', {
    responses: {
      '200': {
        description: 'Agremiado PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Agremiado, {partial: true}),
        },
      },
    })
    agremiado: Agremiado,
    @param.where(Agremiado) where?: Where<Agremiado>,
  ): Promise<Count> {
    return this.agremiadoRepository.updateAll(agremiado, where);
  }

  @get('/agremiados/{id}', {
    responses: {
      '200': {
        description: 'Agremiado model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Agremiado, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Agremiado, {exclude: 'where'}) filter?: FilterExcludingWhere<Agremiado>
  ): Promise<Agremiado> {
    return this.agremiadoRepository.findById(id, filter);
  }

  @patch('/agremiados/{id}', {
    responses: {
      '204': {
        description: 'Agremiado PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Agremiado, {partial: true}),
        },
      },
    })
    agremiado: Agremiado,
  ): Promise<void> {
    await this.agremiadoRepository.updateById(id, agremiado);
  }

  @put('/agremiados/{id}', {
    responses: {
      '204': {
        description: 'Agremiado PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() agremiado: Agremiado,
  ): Promise<void> {
    await this.agremiadoRepository.replaceById(id, agremiado);
  }

  @del('/agremiados/{id}', {
    responses: {
      '204': {
        description: 'Agremiado DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.agremiadoRepository.deleteById(id);
  }
}

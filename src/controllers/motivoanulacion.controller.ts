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
import {Motivoanulacion} from '../models';
import {MotivoanulacionRepository} from '../repositories';

export class MotivoanulacionController {
  constructor(
    @repository(MotivoanulacionRepository)
    public motivoanulacionRepository : MotivoanulacionRepository,
  ) {}

  @post('/motivoanulacions', {
    responses: {
      '200': {
        description: 'Motivoanulacion model instance',
        content: {'application/json': {schema: getModelSchemaRef(Motivoanulacion)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Motivoanulacion, {
            title: 'NewMotivoanulacion',
            exclude: ['id'],
          }),
        },
      },
    })
    motivoanulacion: Omit<Motivoanulacion, 'id'>,
  ): Promise<Motivoanulacion> {
    return this.motivoanulacionRepository.create(motivoanulacion);
  }

  @get('/motivoanulacions/count', {
    responses: {
      '200': {
        description: 'Motivoanulacion model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Motivoanulacion) where?: Where<Motivoanulacion>,
  ): Promise<Count> {
    return this.motivoanulacionRepository.count(where);
  }

  @get('/motivoanulacions', {
    responses: {
      '200': {
        description: 'Array of Motivoanulacion model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Motivoanulacion, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Motivoanulacion) filter?: Filter<Motivoanulacion>,
  ): Promise<Motivoanulacion[]> {
    return this.motivoanulacionRepository.find(filter);
  }

  @patch('/motivoanulacions', {
    responses: {
      '200': {
        description: 'Motivoanulacion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Motivoanulacion, {partial: true}),
        },
      },
    })
    motivoanulacion: Motivoanulacion,
    @param.where(Motivoanulacion) where?: Where<Motivoanulacion>,
  ): Promise<Count> {
    return this.motivoanulacionRepository.updateAll(motivoanulacion, where);
  }

  @get('/motivoanulacions/{id}', {
    responses: {
      '200': {
        description: 'Motivoanulacion model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Motivoanulacion, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Motivoanulacion, {exclude: 'where'}) filter?: FilterExcludingWhere<Motivoanulacion>
  ): Promise<Motivoanulacion> {
    return this.motivoanulacionRepository.findById(id, filter);
  }

  @patch('/motivoanulacions/{id}', {
    responses: {
      '204': {
        description: 'Motivoanulacion PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Motivoanulacion, {partial: true}),
        },
      },
    })
    motivoanulacion: Motivoanulacion,
  ): Promise<void> {
    await this.motivoanulacionRepository.updateById(id, motivoanulacion);
  }

  @put('/motivoanulacions/{id}', {
    responses: {
      '204': {
        description: 'Motivoanulacion PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() motivoanulacion: Motivoanulacion,
  ): Promise<void> {
    await this.motivoanulacionRepository.replaceById(id, motivoanulacion);
  }

  @del('/motivoanulacions/{id}', {
    responses: {
      '204': {
        description: 'Motivoanulacion DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.motivoanulacionRepository.deleteById(id);
  }
}

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
import {Especialidad} from '../models';
import {EspecialidadRepository} from '../repositories';

export class EspecialidadController {
  constructor(
    @repository(EspecialidadRepository)
    public especialidadRepository : EspecialidadRepository,
  ) {}

  @post('/especialidads', {
    responses: {
      '200': {
        description: 'Especialidad model instance',
        content: {'application/json': {schema: getModelSchemaRef(Especialidad)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Especialidad, {
            title: 'NewEspecialidad',
            exclude: ['id'],
          }),
        },
      },
    })
    especialidad: Omit<Especialidad, 'id'>,
  ): Promise<Especialidad> {
    return this.especialidadRepository.create(especialidad);
  }

  @get('/especialidads/count', {
    responses: {
      '200': {
        description: 'Especialidad model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Especialidad) where?: Where<Especialidad>,
  ): Promise<Count> {
    return this.especialidadRepository.count(where);
  }

  @get('/especialidads', {
    responses: {
      '200': {
        description: 'Array of Especialidad model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Especialidad, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Especialidad) filter?: Filter<Especialidad>,
  ): Promise<Especialidad[]> {
    return this.especialidadRepository.find(filter);
  }

  @patch('/especialidads', {
    responses: {
      '200': {
        description: 'Especialidad PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Especialidad, {partial: true}),
        },
      },
    })
    especialidad: Especialidad,
    @param.where(Especialidad) where?: Where<Especialidad>,
  ): Promise<Count> {
    return this.especialidadRepository.updateAll(especialidad, where);
  }

  @get('/especialidads/{id}', {
    responses: {
      '200': {
        description: 'Especialidad model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Especialidad, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Especialidad, {exclude: 'where'}) filter?: FilterExcludingWhere<Especialidad>
  ): Promise<Especialidad> {
    return this.especialidadRepository.findById(id, filter);
  }

  @patch('/especialidads/{id}', {
    responses: {
      '204': {
        description: 'Especialidad PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Especialidad, {partial: true}),
        },
      },
    })
    especialidad: Especialidad,
  ): Promise<void> {
    await this.especialidadRepository.updateById(id, especialidad);
  }

  @put('/especialidads/{id}', {
    responses: {
      '204': {
        description: 'Especialidad PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() especialidad: Especialidad,
  ): Promise<void> {
    await this.especialidadRepository.replaceById(id, especialidad);
  }

  @del('/especialidads/{id}', {
    responses: {
      '204': {
        description: 'Especialidad DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.especialidadRepository.deleteById(id);
  }
}

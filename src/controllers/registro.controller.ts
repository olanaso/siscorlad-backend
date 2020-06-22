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
import {Registro} from '../models';
import {RegistroRepository} from '../repositories';

export class RegistroController {
  constructor(
    @repository(RegistroRepository)
    public registroRepository : RegistroRepository,
  ) {}

  @post('/registros', {
    responses: {
      '200': {
        description: 'Registro model instance',
        content: {'application/json': {schema: getModelSchemaRef(Registro)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Registro, {
            title: 'NewRegistro',
            exclude: ['id'],
          }),
        },
      },
    })
    registro: Omit<Registro, 'id'>,
  ): Promise<Registro> {
    return this.registroRepository.create(registro);
  }

  @get('/registros/count', {
    responses: {
      '200': {
        description: 'Registro model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Registro) where?: Where<Registro>,
  ): Promise<Count> {
    return this.registroRepository.count(where);
  }

  @get('/registros', {
    responses: {
      '200': {
        description: 'Array of Registro model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Registro, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Registro) filter?: Filter<Registro>,
  ): Promise<Registro[]> {
    return this.registroRepository.find(filter);
  }

  @patch('/registros', {
    responses: {
      '200': {
        description: 'Registro PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Registro, {partial: true}),
        },
      },
    })
    registro: Registro,
    @param.where(Registro) where?: Where<Registro>,
  ): Promise<Count> {
    return this.registroRepository.updateAll(registro, where);
  }

  @get('/registros/{id}', {
    responses: {
      '200': {
        description: 'Registro model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Registro, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Registro, {exclude: 'where'}) filter?: FilterExcludingWhere<Registro>
  ): Promise<Registro> {
    return this.registroRepository.findById(id, filter);
  }

  @patch('/registros/{id}', {
    responses: {
      '204': {
        description: 'Registro PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Registro, {partial: true}),
        },
      },
    })
    registro: Registro,
  ): Promise<void> {
    await this.registroRepository.updateById(id, registro);
  }

  @put('/registros/{id}', {
    responses: {
      '204': {
        description: 'Registro PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() registro: Registro,
  ): Promise<void> {
    await this.registroRepository.replaceById(id, registro);
  }

  @del('/registros/{id}', {
    responses: {
      '204': {
        description: 'Registro DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.registroRepository.deleteById(id);
  }
}

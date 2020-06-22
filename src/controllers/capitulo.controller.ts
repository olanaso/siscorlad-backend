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
import {Capitulo} from '../models';
import {CapituloRepository} from '../repositories';

export class CapituloController {
  constructor(
    @repository(CapituloRepository)
    public capituloRepository : CapituloRepository,
  ) {}

  @post('/capitulos', {
    responses: {
      '200': {
        description: 'Capitulo model instance',
        content: {'application/json': {schema: getModelSchemaRef(Capitulo)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Capitulo, {
            title: 'NewCapitulo',
            exclude: ['id'],
          }),
        },
      },
    })
    capitulo: Omit<Capitulo, 'id'>,
  ): Promise<Capitulo> {
    return this.capituloRepository.create(capitulo);
  }

  @get('/capitulos/count', {
    responses: {
      '200': {
        description: 'Capitulo model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Capitulo) where?: Where<Capitulo>,
  ): Promise<Count> {
    return this.capituloRepository.count(where);
  }

  @get('/capitulos', {
    responses: {
      '200': {
        description: 'Array of Capitulo model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Capitulo, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Capitulo) filter?: Filter<Capitulo>,
  ): Promise<Capitulo[]> {
    return this.capituloRepository.find(filter);
  }

  @patch('/capitulos', {
    responses: {
      '200': {
        description: 'Capitulo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Capitulo, {partial: true}),
        },
      },
    })
    capitulo: Capitulo,
    @param.where(Capitulo) where?: Where<Capitulo>,
  ): Promise<Count> {
    return this.capituloRepository.updateAll(capitulo, where);
  }

  @get('/capitulos/{id}', {
    responses: {
      '200': {
        description: 'Capitulo model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Capitulo, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Capitulo, {exclude: 'where'}) filter?: FilterExcludingWhere<Capitulo>
  ): Promise<Capitulo> {
    return this.capituloRepository.findById(id, filter);
  }

  @patch('/capitulos/{id}', {
    responses: {
      '204': {
        description: 'Capitulo PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Capitulo, {partial: true}),
        },
      },
    })
    capitulo: Capitulo,
  ): Promise<void> {
    await this.capituloRepository.updateById(id, capitulo);
  }

  @put('/capitulos/{id}', {
    responses: {
      '204': {
        description: 'Capitulo PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() capitulo: Capitulo,
  ): Promise<void> {
    await this.capituloRepository.replaceById(id, capitulo);
  }

  @del('/capitulos/{id}', {
    responses: {
      '204': {
        description: 'Capitulo DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.capituloRepository.deleteById(id);
  }
}

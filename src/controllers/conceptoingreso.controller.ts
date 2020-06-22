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
import {Conceptoingreso} from '../models';
import {ConceptoingresoRepository} from '../repositories';

export class ConceptoingresoController {
  constructor(
    @repository(ConceptoingresoRepository)
    public conceptoingresoRepository : ConceptoingresoRepository,
  ) {}

  @post('/conceptoingresos', {
    responses: {
      '200': {
        description: 'Conceptoingreso model instance',
        content: {'application/json': {schema: getModelSchemaRef(Conceptoingreso)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Conceptoingreso, {
            title: 'NewConceptoingreso',
            exclude: ['id'],
          }),
        },
      },
    })
    conceptoingreso: Omit<Conceptoingreso, 'id'>,
  ): Promise<Conceptoingreso> {
    return this.conceptoingresoRepository.create(conceptoingreso);
  }

  @get('/conceptoingresos/count', {
    responses: {
      '200': {
        description: 'Conceptoingreso model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Conceptoingreso) where?: Where<Conceptoingreso>,
  ): Promise<Count> {
    return this.conceptoingresoRepository.count(where);
  }

  @get('/conceptoingresos', {
    responses: {
      '200': {
        description: 'Array of Conceptoingreso model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Conceptoingreso, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Conceptoingreso) filter?: Filter<Conceptoingreso>,
  ): Promise<Conceptoingreso[]> {
    return this.conceptoingresoRepository.find(filter);
  }

  @patch('/conceptoingresos', {
    responses: {
      '200': {
        description: 'Conceptoingreso PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Conceptoingreso, {partial: true}),
        },
      },
    })
    conceptoingreso: Conceptoingreso,
    @param.where(Conceptoingreso) where?: Where<Conceptoingreso>,
  ): Promise<Count> {
    return this.conceptoingresoRepository.updateAll(conceptoingreso, where);
  }

  @get('/conceptoingresos/{id}', {
    responses: {
      '200': {
        description: 'Conceptoingreso model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Conceptoingreso, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Conceptoingreso, {exclude: 'where'}) filter?: FilterExcludingWhere<Conceptoingreso>
  ): Promise<Conceptoingreso> {
    return this.conceptoingresoRepository.findById(id, filter);
  }

  @patch('/conceptoingresos/{id}', {
    responses: {
      '204': {
        description: 'Conceptoingreso PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Conceptoingreso, {partial: true}),
        },
      },
    })
    conceptoingreso: Conceptoingreso,
  ): Promise<void> {
    await this.conceptoingresoRepository.updateById(id, conceptoingreso);
  }

  @put('/conceptoingresos/{id}', {
    responses: {
      '204': {
        description: 'Conceptoingreso PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() conceptoingreso: Conceptoingreso,
  ): Promise<void> {
    await this.conceptoingresoRepository.replaceById(id, conceptoingreso);
  }

  @del('/conceptoingresos/{id}', {
    responses: {
      '204': {
        description: 'Conceptoingreso DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.conceptoingresoRepository.deleteById(id);
  }
}

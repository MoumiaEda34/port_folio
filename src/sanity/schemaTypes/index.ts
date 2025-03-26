import { type SchemaTypeDefinition } from 'sanity'
import portfolioProjects from '../schema/portfolio-projects'
import portfolioServices from '../schema/portfolio-services'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [portfolioServices, portfolioProjects],
}

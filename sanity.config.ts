import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
// Aquí importaremos el esquema de productos en el siguiente paso
import { schemaTypes } from './sanity/schema'

export default defineConfig({
  name: 'default',
  title: 'Camellia Bakery Admin',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  basePath: '/admin', // Esta será la url: tudominio.com/admin

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
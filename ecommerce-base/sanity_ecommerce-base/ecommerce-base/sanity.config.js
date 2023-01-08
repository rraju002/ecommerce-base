import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'ecommerce-base',

  projectId: 'glovt51l',
  dataset: 'ecommerce-base',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

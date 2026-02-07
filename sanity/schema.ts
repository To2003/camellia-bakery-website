// sanity/schema.ts

const product = {
  name: 'product',
  title: 'Productos',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre del Producto',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'name' }
    },
    {
      name: 'price',
      title: 'Precio',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Foto',
      type: 'image',
      options: { hotspot: true }, // Permite recortar la imagen
    },
    {
        name: 'badge',
        title: 'Etiqueta (Opcional)',
        type: 'string'
    },
    {
        name: 'category',
        title: 'Categoría',
        type: 'string',
        options: {
            list: [
                { title: 'Tortas', value: 'tortas' },
                { title: 'Dulces', value: 'dulces' },
                { title: 'Salado', value: 'salado' },
            ]
        }
    }
  ],
}

export const schemaTypes = [product]
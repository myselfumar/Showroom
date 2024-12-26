// sanity/pet.ts
export const showroom = {
    name: 'showroom',
    type: 'document',
    title: 'Showroom',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description'
        },
        {
            name: 'price',
            type: 'string',
            title: 'Price'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
            hotspot: true,
            }
        }
    ]
}
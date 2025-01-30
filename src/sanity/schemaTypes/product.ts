const product = {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'string',
    },

    { name: 'name', type: 'string', title: 'Name' },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true, // Enables cropping and focal point
      },
    },
    { name: 'price', type: 'number', title: 'Price' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'discountPercentage', type: 'number', title: 'Discount Percentage' },
    { name: 'isFeaturedProduct', type: 'boolean', title: 'Is Featured Product' },
    { name: 'stockLevel', type: 'number', title: 'Stock Level' },
    { name: 'category', type: 'string', title: 'Category' },
  ],
};
export default product;
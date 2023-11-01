// Import the necessary models for your database schema
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Define associations between the models using Sequelize's ORM

// A product belongs to a category with a foreign key 'category_id',
// and if the category is deleted, the product is also deleted (CASCADE).
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// A category has many products associated with it using the 'category_id' foreign key.
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// A product can have many tags, and a tag can be associated with many products
// through the 'ProductTag' model as an intermediary table.
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

// Similarly, a tag can be associated with many products through the 'ProductTag' model.
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

// Export the models to be used in other parts of your application
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

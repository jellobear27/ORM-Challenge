const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// GET request to retrieve all tags with associated products through ProductTag
router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Product, // Include associated Products
        through: ProductTag, // Use the intermediary table ProductTag
      },
    ],
  })
    .then((tags) => res.status(200).json(tags))
    .catch((err) => res.status(500).json(err));
});

// GET request to retrieve a specific tag by ID with associated products through ProductTag
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id, // Get the tag by the provided ID
    },
    include: [
      {
        model: Product, // Include associated Products
        through: ProductTag, // Use the intermediary table ProductTag
      },
    ],
  })
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(404).json(err));
});

// POST request to create a new tag
router.post('/', (req, res) => {
  Tag.create(req.body) // Create a new tag using the data in the request body
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(404).json(err));
});

// PUT request to update a tag by ID
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id, // Update the tag with the provided ID
    },
  })
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(404).json(err));
});

// DELETE request to delete a tag by ID
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id, // Delete the tag with the provided ID
    },
  })
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(404).json(err));
});

module.exports = router;







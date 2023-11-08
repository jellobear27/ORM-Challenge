const router = require('express').Router();
const { Category, Product } = require('../../models');

// GET request to retrieve all categories with associated products
router.get('/', (req, res) => {
  Category.findAll({
     // Include associated Products when fetching Categories
    include: [Product],
  })
    .then((categories) => res.json(categories))
    .catch((err) => res.status(500).json(err));
});

// GET request to retrieve a specific category by ID with associated products
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,  // Get the category by the provided ID
    },
    include: [Product],  // Include associated Product
  })
    .then((category) => res.json(category))
    .catch((err) => res.status(400).json(err));
});

// POST request to create a new category
router.post('/', (req, res) => {
  Category.create(req.body)
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(400).json(err));
});

// PUT request to update a category by ID
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,  // Update the category with the provided ID
    },
  })
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(400).json(err));
});

// DELETE request to delete a category by ID
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id, // Delete the category with the provided ID

    },
  })
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(400).json(err));
});
module.exports = router;
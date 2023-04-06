const db = require('../models');
const Category = db.category;

exports.createNewCategory = (req, res) => {
  const category = new Category({
    name: req.body.name,
    status: req.body.status,
  });
  category
    .save(category)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Category.',
      });
    });
};

exports.updateCategory = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update can not be empty!',
    });
  }

  const id = req.params.id;

  Category.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Category with id=${id}. Maybe Category was not found!`,
        });
      } else res.send({ message: 'Category was updated successfully.' });
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Category with id=' + id,
      });
    });
};

exports.findAllCategory = (req, res) => {
  Category.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving category.',
      });
    });
};

exports.deleteCategory = (req, res) => {
  const id = req.params.id;

  Category.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete User with id=${id}. Maybe Category was not found!`,
        });
      } else {
        res.send({
          message: 'Category was deleted successfully!',
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Category with id=' + id,
      });
    });
};

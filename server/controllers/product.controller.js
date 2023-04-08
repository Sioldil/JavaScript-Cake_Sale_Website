const db = require('../models');
const Product = db.product;
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now());
  },
});

const upload = multer({ storage: storage });

exports.uploadProduct = (req, res) => {
  upload.single('image')(req, res, (err) => {
    if (err) {
      return res.status(400).send({ message: err.message });
    }

    const imagePath = req.file.path.replace('uploads\\', '');

    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      image: imagePath,
    });

    product.save((err) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }

      res.send({ message: 'Product uploaded successfully!' });
    });
  });
};

exports.getProduct = (req, res) => {
  const productId = req.params.id;
  Product.findById(productId, (err, product) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }

    if (!product) {
      return res.status(404).send({ message: 'Product not found' });
    }

    res.send(product);
  });
};

exports.getAllProducts = (req, res) => {
  Product.find({}, (err, products) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }

    res.send(products);
  });
};

exports.deleteProduct = (req, res) => {
  const id = req.params.id;

  Product.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Product with id=${id}. Maybe Product was not found!`,
        });
      } else {
        res.send({
          message: 'Product was deleted successfully!',
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Product with id=' + id,
      });
    });
};

exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, price, image } = req.body;

  Product.findOneAndUpdate({ _id: id }, { name, price, image }, { new: true })
    .then((product) => {
      if (!product) {
        return res.status(404).send({ message: 'Product not found' });
      }
      res.send({ message: 'Product updated successfully', product });
    })
    .catch((error) => {
      res
        .status(500)
        .send({ message: error.message || 'Error updating product' });
    });
};

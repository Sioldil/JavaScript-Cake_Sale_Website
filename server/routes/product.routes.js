const controller = require('../controllers/product.controller');
const multer = require('multer');
const upload = multer({
  /* options */
});

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  app.post('/api/product/upload', controller.uploadProduct);

  app.get('/api/product/getall', controller.getAllProducts);

  app.get('/api/product/get/:id', controller.getProduct);

  app.delete('/api/product/delete/:id', controller.deleteProduct);

  app.put('/api/product/update/:id', upload.any(), controller.updateProduct);
};

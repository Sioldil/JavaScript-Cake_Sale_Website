const controller = require('../controllers/category.controller');

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  app.post('/api/category/create', controller.createNewCategory);

  app.put('/api/category/update', controller.updateCategory);

  app.get('/api/category/getall', controller.findAllCategory);

  app.delete('/api/category/delete/:id', controller.deleteCategory);
};

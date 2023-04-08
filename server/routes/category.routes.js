const controller = require('../controllers/category.controller');

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  /**
   * @swagger
   * /api/category/create:
   *   post:
   *     summary: Create a new category
   *     consumes:
   *       - application/json
   *     parameters:
   *       - in: body
   *         name: body
   *         description: Category object that needs to be added
   *         required: true
   *         schema:
   *           $ref: '#/definitions/Category'
   *     responses:
   *       '200':
   *         description: Category created successfully
   */
  app.post('/api/category/create', controller.createNewCategory);

  /**
   * @swagger
   * /api/category/update:
   *   put:
   *     summary: Update an existing category
   *     consumes:
   *       - application/json
   *     parameters:
   *       - in: body
   *         name: body
   *         description: Category object that needs to be updated
   *         required: true
   *         schema:
   *           $ref: '#/definitions/Category'
   *     responses:
   *       '200':
   *         description: Category updated successfully
   */
  app.put('/api/category/update', controller.updateCategory);

  /**
   * @swagger
   * /api/category/getall:
   *   get:
   *     summary: Get all categories
   *     produces:
   *       - application/json
   *     responses:
   *       '200':
   *         description: An array of categories
   *         schema:
   *           type: array
   *           items:
   *             $ref: '#/definitions/Category'
   */
  app.get('/api/category/getall', controller.findAllCategory);
};

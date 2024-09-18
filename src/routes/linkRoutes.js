const { Router } = require('express');
const linkController = require('../controllers/linkController');

const routes = Router();

routes.get('/buscar', linkController.buscar);

routes.post('/encurtar', linkController.encurtar);

module.exports = routes;
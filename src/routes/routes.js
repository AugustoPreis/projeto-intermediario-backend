const { Router } = require('express');

const routes = Router();

routes.use('/sobre', (_, res) => {
  res.status(200).json({
    estudante: 'Augusto Preis Tomasi',
    projeto: 'Encurtador de Links',
  });
});

module.exports = { routes };
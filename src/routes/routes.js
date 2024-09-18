const { Router } = require('express');
const linkRoutes = require('./linkRoutes');

const routes = Router();

routes.use('/link', linkRoutes);

routes.use('/sobre', (_, res) => {
  res.status(200).json({
    estudante: 'Augusto Preis Tomasi',
    projeto: 'Encurtador de Links',
  });
});

routes.use('/*', (_, res) => {
  res.status(404).json({ message: 'Rota não encontrada' });
});

module.exports = { routes };
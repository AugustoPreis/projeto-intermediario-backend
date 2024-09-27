const express = require('express');
const cors = require('cors');
const database = require('./src/database/database');
const { routes } = require('./src/routes/routes');
const { errorHandler } = require('./src/middlewares/errorHandler');

require('dotenv/config');

const app = express();
const port = process.env.PORT;

app.use(cors());

app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use(express.json({ limit: '50mb' }));

app.use(routes);

app.use(errorHandler);


database
  .initialize()
  .then(() => {
    console.log('Banco de dados iniciado');

    app.listen(port, () => {
      console.log(`Servidor iniciado na porta ${port}`);
    });
  }).catch((err) => {
    console.error('Erro ao iniciar banco de dados:', err.message || err);
    process.exit(1);
  });
const express = require('express');
const { routes } = require('./src/routes/routes');

require('dotenv/config');

const app = express();
const port = process.env.PORT;

app.use(routes);

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
const database = require('../database/database');

async function buscar(context, conn) {
  const query = `
    SELECT
      link.id,
      link.original,
      link.encurtado
    FROM link
    WHERE link.encurtado = $1
  `;
  const rows = await database.execute(query, context, conn);

  return rows[0];
}

async function salvar(context, conn) {
  const query = `
    INSERT INTO link (
      original,
      encurtado
    ) VALUES (
     $1,
     $2
    ) RETURNING id;
  `;
  const result = await database.execute(query, context, conn);

  return result[0].id;
}

module.exports = { buscar, salvar };
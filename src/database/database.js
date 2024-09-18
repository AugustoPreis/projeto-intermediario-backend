const pg = require('pg');

const { Pool } = pg;

async function execute(query, params = []) {
  const pool = createPool();

  try {
    const result = await pool.query(query, params);

    await pool.end();

    return result.rows;
  } catch (error) {
    await pool.end();

    throw error;
  }
}

function createPool() {
  const config = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
  };

  return new Pool(config);
}

module.exports = { execute };
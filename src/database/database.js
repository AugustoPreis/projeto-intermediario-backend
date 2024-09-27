const pg = require('pg');

const { Pool } = pg;

async function initialize() {
  const result = await execute(`SELECT TRUE "connected"`);

  return result[0];
}

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
  const { env } = process;

  const config = {
    user: env.DB_USER,
    host: env.DB_HOST,
    database: env.DB_NAME,
    password: env.DB_PASS,
    port: env.DB_PORT,
  };

  if (env.IS_DOCKER === 'TRUE') {
    config.host = env.DB_IMAGE_NAME;
  }

  return new Pool(config);
}

module.exports = { initialize, execute };
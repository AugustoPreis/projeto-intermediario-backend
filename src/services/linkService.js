const { isValidString } = require('../utils/validators');
const linkRepository = require('../repositories/linkRepository');
const request = require('../utils/request');

async function buscar(params) {
  if (!isValidString(params.urlEncurtada)) {
    throw new Error('URL encurtada não informada');
  }

  const sqlParams = [
    params.urlEncurtada,
  ];

  return await linkRepository.buscar(sqlParams);
}

async function encurtar(params) {
  if (!isValidString(params.link)) {
    throw new Error('Link inválido');
  }

  const result = await request.post(process.env.API_URL, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      url: params.link,
    },
  });

  const linkDB = await buscar(result);

  //evita salvar novamente o mesmo link
  if (linkDB) {
    return result;
  }

  const sqlParams = [
    params.link,
    result.urlEncurtada,
  ];

  await linkRepository.salvar(sqlParams);

  return result;
}

module.exports = { buscar, encurtar };
const axios = require('axios');

async function post(url, config) {
  const { body, headers } = config;

  return new Promise((resolve, reject) => {
    axios.post(url, body || {}, {
      headers,
    }).then((response) => {
      resolve(response.data);
    }).catch((err) => {
      reject(onError(err));
    });
  });
}

function onError(err) {
  const { data } = err.response;

  if (typeof data?.message === 'string') {
    return new Error(data.message);
  }

  if (typeof data?.error === 'string') {
    return new Error(data.error);
  }

  if (typeof data === 'string') {
    return new Error(data);
  }

  try {
    return new Error(JSON.stringify(data));
  } catch {
    return data;
  }
}

module.exports = { post };
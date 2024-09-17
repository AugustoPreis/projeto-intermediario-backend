function errorHandler(erro, _, res, next) {
  let message;

  if (erro instanceof Error) {
    message = erro.message?.trim();
  } else if (typeof erro === 'string') {
    message = erro.trim();
  } else {
    try {
      message = JSON.stringify(erro);
    } catch { }
  }

  if (!message) {
    message = 'Erro desconhecido';
  }

  res.status(404).json({ message });
  next();
}

module.exports = { errorHandler };
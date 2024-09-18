const linkService = require('../services/linkService');

async function buscar(req, res, next) {
  try {
    const result = await linkService.buscar(req.query);

    if (!result) {
      throw new Error('Link não encontrado');
    }

    res.status(200).json({ urlOriginal: result.original });
  } catch (err) {
    next(err);
  }
}

async function encurtar(req, res, next) {
  try {
    const result = await linkService.encurtar(req.body);

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

module.exports = { buscar, encurtar };
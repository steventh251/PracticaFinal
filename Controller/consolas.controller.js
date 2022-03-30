const consolasModel = require('../models/consolas.model');
const consolasController = {};

consolasController.getConsolas = async (req, res) => {

  const consolas = await consolasModel.find();
  res.json(consolas);
};

consolasController.addConsolas = async (req, res) => {
  const consolas = new consolasModel(req.body);
  await consolas.save();
  res.json({'status': 'se guardo satisfactoriamente'});
};

consolasController.deleteConsolas = async (req, res) => {
  await consolasModel.findByIdAndDelete (req.params.id);
  res.json({'status': 'se elimino la consola'});
};

module.exports = consolasController;
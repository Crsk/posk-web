const boletaController = {};
const Boleta = require('../models/boleta');

boletaController.getAll = async (req, res) => {
    const boletas = await Boleta.find();
    res.json(boletas);
};

module.exports = boletaController;
const express = require('express');
const router = express.Router();
const boletaController = require('../controllers/boleta.controller');

router.get('/', boletaController.getAll);

module.exports = router;
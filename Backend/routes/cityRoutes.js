const express = require('express');
const cityController = require('../controllers/cityController');
const router = express.Router();

// Obtener todos los ciudad
router.get('/',
    cityController.getAllCities
);

// Obtener ciudad por ID
router.get('/:idciudad',
    cityController.getCiudadById
);

module.exports = router;
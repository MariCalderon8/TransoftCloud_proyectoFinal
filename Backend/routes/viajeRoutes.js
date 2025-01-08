const express = require('express');
const viajeController = require('../controllers/viajeController');
const router = express.Router();

// Obtener todos los viajes
router.get('/',
    viajeController.getAllViajes
);

// Obtener viaje por ID
router.get('/:idviaje',
    viajeController.getViajeById
);

// Crear viaje
router.post('/',
    viajeController.createViaje
);

// Actualizar viaje
router.put('/:idviaje',
    viajeController.editViaje
);

// Eliminar viaje
router.delete('/:idviaje',
    viajeController.deleteViaje
);

module.exports = router;
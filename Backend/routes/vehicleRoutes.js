const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

// Obtener todos los vehiculos
router.get('/',
    vehicleController.getAllVehicles
);

// Obtener vehiculo por ID
router.get('/:placa',
    vehicleController.getVehicleByPlaca
);

// Crear vehiculo
router.post('/',
    vehicleController.createVehicle
);

// Actualizar vehiculo
router.put('/:placa',
    vehicleController.editVehicle
);

// Eliminar vehiculo
router.delete('/:placa',
    vehicleController.deleteVehicle
);

module.exports = router;
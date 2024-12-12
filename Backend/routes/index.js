const express = require('express');
const router = express.Router();

// Importar rutas específicas
const userRoutes = require('./userRoutes');

// Definir rutas base
router.use('/users', userRoutes);


// Manejo de rutas no encontradas
router.use((req, res, next) => {
  res.status(404).json({
    message: 'Ruta no encontrada',
    path: req.path
  });
});

module.exports = router;

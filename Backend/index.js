const express = require('express');
const vehicleRoutes = require('./routes/vehicleRoutes');

const app = express();

const PORT = 3000;

// Middleware para analizar JSON
app.use(express.json());

// Registrar rutas de vehículos
app.use('/vehicles', vehicleRoutes);

// Manejo de errores generales
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error en el servidor.');
});

// Iniciar el servidor en el puerto 3000
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

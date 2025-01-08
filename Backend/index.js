const express = require('express');
const cors = require('cors');


const vehicleRoutes = require('./routes/vehicleRoutes');
const viajeRoutes = require('./routes/viajeRoutes');
const cityRoutes = require('./routes/cityRoutes');

const app = express();

const PORT = process.env.URL_BACKEND || 3000;

// Middleware para analizar JSON
app.use(express.json());

app.use(cors({
    origin: process.env.URL_FRONTEND || 'http://localhost:5173', // Permitir solo desde este origen
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permitir ciertos métodos
    allowedHeaders: ['Content-Type', 'Authorization'] // Permitir ciertos encabezados
  }));

// Registrar rutas 
app.use('/vehicles', vehicleRoutes);
app.use('/viajes', viajeRoutes);
app.use('/cities', cityRoutes);

// Manejo de errores generales
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error en el servidor.');
});

// Iniciar el servidor en el puerto 3000
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

const databaseConnection = require('../config/database');

class CityController{
    async getAllCities(req, res) {
        try {
            const rows = await databaseConnection.query('SELECT * FROM ciudad');
            const ciudades = rows.map((row) => ({id: row.idciudad, nombre: row.nombre})); // Crear instancias de la clase
            res.json(ciudades);
        } catch (error) {
            res.status(500).json({
                message: 'Error obteniendo las ciudades',
                error: error.message,
            });
        }
    }

    async getCiudadById(req, res) {
        try {
            const { idciudad } = req.params; 
            const query = `SELECT * FROM ciudad WHERE idciudad = ?`;
            const ciudad = await databaseConnection.query(query, [idciudad]);
            res.json(ciudad);
        } catch (error) {
            res.status(500).json({
                message: 'Error obteniendo la ciudad',
                error: error.message,
            });
        }
    }
}

module.exports = new CityController();
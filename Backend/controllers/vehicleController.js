const databaseConnection = require('../config/database');
const Vehicle = require('../models/vehicleModel');

class VehicleController {
    // Obtener todos los vehículos
    async getAllVehicles(req, res) {
        try {
            const rows = await databaseConnection.query('SELECT * FROM vehiculo');
            const vehicles = rows.map((row) => new Vehicle(row.placa, row.tipo, row.propietario, row.marca, row.modelo, row.chasis, row.motor, row.capacidadCarga, row.foto, row.estaActivo, row.usuario)); // Crear instancias de la clase
            res.json(vehicles);
        } catch (error) {
            res.status(500).json({
                message: 'Error obteniendo los vehículos',
                error: error.message,
            });
        }
    }

    async getVehicleByPlaca(req, res) {
        try {
            const { placa } = req.params; 
            const query = `SELECT * FROM vehiculo WHERE placa = ?`;
            const vehicle = await databaseConnection.query(query, [placa]);
            res.json(vehicle);
        } catch (error) {
            res.status(500).json({
                message: 'Error obteniendo el vehículo',
                error: error.message,
            });
        }
    }

    // Crear un nuevo vehículo
    async createVehicle(req, res) {
        try {
            const { placa, tipo, propietario, marca, modelo, chasis, motor, capacidadCarga, foto, estaActivo, usuario } = req.body;
            const vehicle = new Vehicle(placa, tipo, propietario, marca, modelo, chasis, motor, capacidadCarga, foto, estaActivo, usuario);
            // Verificar que ningún parámetro sea undefined
            const params = [
                vehicle.placa ?? null,
                vehicle.tipo ?? null,
                vehicle.propietario ?? null,
                vehicle.marca ?? null,
                vehicle.modelo ?? null,
                vehicle.chasis ?? null,
                vehicle.motor ?? null,
                vehicle.capacidadCarga ?? null,
                vehicle.foto ?? null,
                vehicle.estaActivo ?? null,
                vehicle.usuario ?? null,
            ];
    

            const query = `
                INSERT INTO vehiculo (placa, tipo_vehiculo, propietario, marca, modelo, chasis, motor, capacidad_carga, foto, activo, usuario)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;
            
            await databaseConnection.query(query, params);
            res.status(201).json({ message: 'Vehículo creado exitosamente' });
        } catch (error) {
            console.error('Error detallado:', error);
            res.status(500).json({
                message: 'Error creando el vehículo',
                error: error.message,
            });
        }
    }

    // Editar un vehículo existente
    async editVehicle(req, res) {
        try {
            const { placa, tipo, propietario, marca, modelo, chasis, motor, capacidadCarga, foto, estaActivo, usuario } = req.body;
            const vehicle = new Vehicle(placa, tipo, propietario, marca, modelo, chasis, motor, capacidadCarga, foto, estaActivo, usuario);


            const query = `
                UPDATE vehiculo
                SET tipo_vehiculo = ?, propietario = ?, marca = ?, modelo = ?, chasis = ?, motor = ?, capacidad_carga = ?, foto = ?, activo = ?, usuario = ?
                WHERE placa = ?
            `;
            const params = [
                vehicle.tipo,
                vehicle.propietario,
                vehicle.marca,
                vehicle.modelo,
                vehicle.chasis,
                vehicle.motor,
                vehicle.capacidadCarga,
                vehicle.foto,
                vehicle.estaActivo,
                vehicle.usuario,
                placa,
            ];
            await databaseConnection.query(query, params);
            res.json({ message: 'Vehículo actualizado exitosamente' });
        } catch (error) {
            res.status(400).json({
                message: 'Error actualizando el vehículo',
                error: error.message,
            });
        }
    }

    // Eliminar un vehículo
    async deleteVehicle(req, res) {
        try {
            const { placa } = req.params; 
            const query = `DELETE FROM vehiculo WHERE placa = ?`;
            await databaseConnection.query(query, [placa]);
            res.json({ message: 'Vehículo eliminado exitosamente' });
        } catch (error) {
            res.status(500).json({
                message: 'Error eliminando el vehículo',
                error: error.message,
            });
        }
    }
}

module.exports = new VehicleController();

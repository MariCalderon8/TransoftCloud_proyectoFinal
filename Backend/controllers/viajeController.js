const databaseConnection = require('../config/database');
const { default: Viaje } = require('../models/viajeModel');

class ViajeController {
   
    // Buscar todos los viajes
    async getAllViajes(req, res) {
        try {
            const rows = await databaseConnection.query('SELECT * FROM viaje');
            const viajes = rows.map((row) => new Viaje(row.fecha, row.origen, row.destino, row.cliente, row.valortotal, row.valorpagar, row.conductor, row.placa, row.usuario_creador, row.producto, row.cantidad, row.horaCargue, row.horaDescargue, row.idviaje)); 
            console.log(viajes);
            res.json(viajes);
        } catch (error) {
            res.status(500).json({
                message: 'Error obteniendo los viajes',
                error: error.message,
            });
        }
    }

    // Buscar viaje por id
    async getViajeById(req, res) {
        try {
            const { idviaje } = req.params; 
            const query = `SELECT * FROM viaje WHERE idviaje = ?`;
            const viaje = await databaseConnection.query(query, [idviaje]);
            res.json(viaje);
        } catch (error) {
            res.status(500).json({
                message: 'Error obteniendo el viaje',
                error: error.message,
            });
        }
    }

    // Crear un nuevo viaje
    async createViaje(req, res) {
        try {
            const viajeData = req.body;
            const viaje = new Viaje(viajeData.fecha, viajeData.origen, viajeData.destino, viajeData.cliente, viajeData.valorTotal, viajeData.valorPagar, viajeData.conductor, viajeData.placa, viajeData.usuarioCreador, viajeData.producto, viajeData.cantidad, viajeData.horaCargue, viajeData.horaDescargue);
            const params = [
                viaje.fecha ?? null,
                viaje.origen ?? null,
                viaje.destino ?? null,
                viaje.cliente ?? null,
                viaje.valorTotal ?? null,
                viaje.valorPagar ?? null,
                viaje.conductor ?? null,
                viaje.placa ?? null,
                viaje.usuarioCreador ?? null,
                viaje.producto ?? null,
                viaje.cantidad ?? null,
                viaje.horaCargue ?? null,
                viaje.horaDescargue ?? null
            ];
    
            const query = `
                INSERT INTO viaje (fecha, origen, destino, cliente, valortotal, valorpagar, conductor, placa, usuario_creador, producto, cantidad, horaCargue, horaDescargue)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;
            
            await databaseConnection.query(query, params);
            res.status(201).json({ message: 'Viaje creado exitosamente' });
        } catch (error) {
            console.error('Error detallado:', error);
            res.status(500).json({
                message: 'Error creando el viaje',
                error: error.message,
            });
        }
    }

    // Editar un viaje existente
    async editViaje(req, res) {
        try {
            const viajeData = req.body;
            const viaje = new Viaje(viajeData.fecha, viajeData.origen, viajeData.destino, viajeData.cliente, viajeData.valorTotal, viajeData.valorPagar, viajeData.conductor, viajeData.placa, viajeData.usuarioCreador, viajeData.producto, viajeData.cantidad, viajeData.horaCargue, viajeData.horaDescargue, viajeData.idviaje);

            const query = `
                UPDATE viaje
                SET fecha= ?, origen = ?, destino = ?, cliente = ?, valortotal = ?, valorpagar = ?, conductor = ?, placa = ?, usuario_creador = ?, producto = ?, cantidad = ?, horaCargue = ?, horaDescargue = ?
                WHERE idviaje = ?
            `;
            const params = [
                viaje.fecha ?? null,
                viaje.origen ?? null,
                viaje.destino ?? null,
                viaje.cliente ?? null,
                viaje.valorTotal ?? null,
                viaje.valorPagar ?? null,
                viaje.conductor ?? null,
                viaje.placa ?? null,
                viaje.usuarioCreador ?? null,
                viaje.producto ?? null,
                viaje.cantidad ?? null,
                viaje.horaCargue ?? null,
                viaje.horaDescargue ?? null,
                viaje.idviaje
            ];
            await databaseConnection.query(query, params);
            res.json({ message: 'Viaje actualizado exitosamente' });
        } catch (error) {
            res.status(400).json({
                message: 'Error actualizando el viaje',
                error: error.message,
            });
        }
    }

    // Eliminar un viaje
    async deleteViaje(req, res) {
        try {
            const { idviaje } = req.params; 
            const query = `DELETE FROM viaje WHERE idviaje = ?`;
            await databaseConnection.query(query, [idviaje]);
            res.json({ message: 'Viaje eliminado exitosamente' });
        } catch (error) {
            res.status(500).json({
                message: 'Error eliminando el viaje',
                error: error.message,
            });
        }
    }

}

module.exports = new ViajeController();

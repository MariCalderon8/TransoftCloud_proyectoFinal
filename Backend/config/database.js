const mysql = require('mysql2/promise');
const { getDatabaseConfig } = require('./environments');

class Database {
    constructor(env = 'development') {
        this.config = getDatabaseConfig(env);
        this.pool = null;
    }

    async connect() {
        try {
            this.pool = mysql.createPool({
                host: this.config.host,
                user: this.config.user,
                password: this.config.password,
                database: this.config.database,
                port: this.config.port,
                connectionLimit: this.config.connectionLimit || 10,
                connectTimeout: this.config.connectTimeout || 10000,
                waitForConnections: true,
                queueLimit: 0
            });
            console.log('Conexión a la base de datos establecida');
            return this.pool;
        } catch (error) {
            console.error('Error conectando a la base de datos:', error);
            throw error;
        }
    }

    async query(sql, params = []) {
        if (!this.pool) {
            await this.connect();
        }
        try {
            const [results] = await this.pool.execute(sql, params);
            return results;
        } catch (error) {
            console.error('Error ejecutando consulta:', error);
            throw error;
        }
    }

    async closeConnection() {
        if (this.pool) {
            await this.pool.end();
            console.log('Conexión a la base de datos cerrada');
        }
    }
}

module.exports = (env = 'development') => new Database(env);
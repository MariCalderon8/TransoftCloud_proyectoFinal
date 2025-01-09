// config/database
const mysql = require('mysql2/promise');

class Database {
  constructor() {
    this.pool = null;
  }

  async connect() {
    try {
      this.pool = mysql.createPool({
        host: process.env.HOST || 'autorack.proxy.rlwy.net',
        user: process.env.USER || 'root',
        password: process.env.DB_PASSWORD || 'GeBeVxomwkimHtotjkKcRUWuYcGdBSic',
        database: process.env.DB || 'transoftcloud_bd',
        port: process.env.DBPORT || '53639',
        connectionLimit: 10,
        connectTimeout: 10000,
        waitForConnections: true,
        queueLimit: 0,
      });
      console.log('Conexión a la base de datos establecida');
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

module.exports = new Database();

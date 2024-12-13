const vehicleController = require('./controllers/vehicleController');

async function testGetVehiculos() {
  try {
    console.log('Intentando conectar a la base de datos...');
    const vehicles = await vehicleController.getAllVehicles();
    console.log('Vehículos:', vehicles);
  } catch (error) {
    console.error('Error en la prueba:', error);
  }
}

const db = require('./config/database'); // Ruta al archivo de base de datos

async function testDatabaseConnection() {
  try {
    //const db = createDatabase();

    console.log('Intentando conectar a la base de datos...');
    const tables = await db.query('SHOW TABLES;');
    console.log('Conexión exitosa.');

    // // Inserción de datos con parámetros y validación (ejemplo)
    // const sql = "INSERT INTO usuario (idusuario, nombre, roles, activo, contraseña) VALUES (?, ?, ?, ?, ?)";
    // const values = [3, 'Juancho3000', 'ADMINISTRADOR', 1, '12345']; // Hash de la contraseña

    // try {
    //   const results = await db.query(sql, values);
    //   console.log(`Se insertaron ${results.affectedRows} filas`);
    // } catch (error) {
    //   console.error('Error al insertar datos:', error);
    // }

    console.log(`Tablas en la base de datos:`, tables);
    await db.closeConnection();
  } catch (error) {
    console.error('Error en la prueba de conexión:', error);
  }
}
// Ejecutar la prueba
testGetVehiculos();

// Ejecutar la prueba
//testDatabaseConnection();

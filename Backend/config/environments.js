//config/environments
const environments = {
    development: {
        apiBaseUrl: 'http://localhost:3000', //Puerto en el que corre el back
        host: 'localhost',
        user: 'root',
        password: 'H4tRL2015',
        port: 3306, //Puerto en el que corre la BD
        name: 'pruebacloud'
    },
    production: {
        apiBaseUrl: 'https://mi-proyecto-cloud.com/api',
        host: 'cloud-database-host',
        port: 5432,
        name: 'mi_proyecto_prod'
    }
};

// Cambiar a module.exports para usar con require
module.exports = {
    getEnvironmentConfig: (env = 'development') => {
        const currentEnv = process.env.NODE_ENV || env;
        return environments[currentEnv];
    }
};
const environments = {
    development: {
        apiBaseUrl: 'http://localhost:3306/api',
        host: 'localhost',
        user: 'root',
        password: 'Db/26021986',
        port: 3306,
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
// config/environment.js
const environments = {
    development: {
        apiBaseUrl: 'http://localhost:3000/api',
        database: {
            host: 'localhost',
            port: 5432,
            name: 'mi_proyecto_dev'
        }
    },
    production: {
        apiBaseUrl: 'https://mi-proyecto-cloud.com/api',
        database: {
            host: 'cloud-database-host',
            port: 5432,
            name: 'mi_proyecto_prod'
        }
    }
};

// Función para obtener la configuración del entorno actual
export const getEnvironmentConfig = () => {
    const env = process.env.NODE_ENV || 'development';
    return environments[env];
};
export const getEnvironmentConfig = (env = 'development') => {
    const environments = {
      development: {
        apiBaseUrl: 'http://localhost:3000',
        host: 'localhost',
        user: 'root',
        password: 'H4tRL2015',
        port: 3306,
        name: 'pruebacloud',
      },
      production: {
        apiBaseUrl: 'https://mi-proyecto-cloud.com/api',
        host: 'cloud-database-host',
        port: 5432,
        name: 'mi_proyecto_prod',
      },
    };
  
    const currentEnv = process.env.NODE_ENV || env;
    return environments[currentEnv];
  };
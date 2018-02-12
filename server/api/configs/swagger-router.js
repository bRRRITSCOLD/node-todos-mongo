let path = require('path');

const { SwaggerRouterConfig } = require('./models/swagger-router-config');

const options = {
    swaggerUi: path.join(__dirname, '/swagger.json'),
    controllers: path.join(__dirname, '../controllers'),
    useStubs: process.env.NODE_ENV === 'development'
  }

const swaggerRouterConfig = new SwaggerRouterConfig(options)

module.exports = {
    swaggerRouterConfig: swaggerRouterConfig
}
const { CorsConfig } = require('./models/cors-config');

const options = {
    optionsSuccessStatus: 200
}

const corsConfig = new CorsConfig(options)

module.exports = {
    corsConfig: corsConfig
}
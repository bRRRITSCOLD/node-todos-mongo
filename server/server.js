// node module dependencies
const fs = require('fs');
const path = require('path');
const http = require('http');

const app = require('connect')();
const swaggerTools = require('swagger-tools');
const jsyaml = require('js-yaml');
const cors = require('cors');

// local file dependencies
const { corsConfig } = require('./api/configs/cors');
const { swaggerRouterConfig } = require('./api/configs/swagger-router');

// port decleration
const port = process.env.PORT || 8080;

// api dependencies
const spec = fs.readFileSync(path.join(__dirname,'api/swagger.yaml'), 'utf8');
const swaggerDoc = jsyaml.safeLoad(spec);

// initialize swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, (middleware) => {
    
    // add cors support
    app.use(cors(corsConfig));
    
    // add cors support
    app.use(middleware.swaggerMetadata());
    
    // add cors support
    app.use(middleware.swaggerValidator());
    
    // add cors support
    app.use(middleware.swaggerRouter(swaggerRouterConfig));
    
    // add cors support
    app.use(middleware.swaggerUi());
    
    // add cors support
    http.createServer(app).listen(port, function () {
        console.log('Your server is listening on port %d (http://localhost:%d)', port, port);
        console.log('Swagger-ui is available on http://localhost:%d/docs', port);
      }); 
})
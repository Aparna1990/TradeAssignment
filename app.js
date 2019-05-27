const express = require('express');
const server = express();
const configs = require('./configs/config');
const routes = require('./routes/trade-routes');
const bodyParser = require('body-parser');

class AppLoader { 
    constructor() { 
        this.configs = configs;
        this.dependencies = {};
        this.dependencies.logger = console;
        this.route = new routes(this.configs, this.dependencies);
        
    }

    init() { 
        server.use(bodyParser.urlencoded({ extended: false }));
        server.use(bodyParser.json())
        server.listen(this.configs.server.port);
        this.dependencies.logger.log(`App is listening at ${this.configs.server.port}`);
        this.initializeRoutes(server);
    }

    initializeRoutes(server) { 
        this.route.registerRoutes(server);
    }
}

module.exports = AppLoader;
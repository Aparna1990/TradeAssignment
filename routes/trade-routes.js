const TradeRouteHandler = require('./trade-route-handler');
const SchemaValidator = require('../schema/schema-validator');
const RequestSchema = require('../schema/request-api-schema');
const joi = require('joi');
class Routes { 
    constructor(configs, dependencies) { 
        this.tradeRouteHandler = new TradeRouteHandler(configs, dependencies);
        this.schemaValidator = new SchemaValidator(configs, dependencies);
    }
    
    registerRoutes(server) { 
        server.get('/trades', (req, res) => this.tradeRouteHandler.getTrades(req, res));
        server.delete('/erase', (req, res) => this.tradeRouteHandler.deleteTrades(req, res));
        server.post('/trades', async (req,res,next) => { this.schemaValidator.validateRequest(RequestSchema.TradeRequestSchema, req, res); next() }, (req, res) => this.tradeRouteHandler.addTrade(req, res));
        server.get('/trades/users/:userID', (req, res) => this.tradeRouteHandler.getTradeDetailsByUserId(req, res));
        server.get('/stocks/:stockSymbol/trades:type?:start?:end?', (req, res) => this.tradeRouteHandler.getTradeDetailsByStockSymbolTypeDate(req, res));
        server.get('/stocks/:stockSymbol/price:start?:end?', (req, res) => this.tradeRouteHandler.getMaxMinPrice(req, res));
    }
}

module.exports = Routes;
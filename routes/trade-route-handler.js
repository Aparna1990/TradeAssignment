const TradeService = require('../service/trade-service');
const Messages = require('../common/messages');
class TradeRouteHandler {
    constructor(configs, dependencies) {
        this.tradeService = new TradeService(configs, dependencies);
    }
    async getTrades(req, res) {
        try {
            let result = await this.tradeService.getTrades(req, res);
            res.send(result);
        }
        catch (e) {
            throw e;
        }
    }

    async deleteTrades(req, res) {
        try {
            let result = await this.tradeService.deleteTrades(req, res);
            res.send(result);
        }
        catch (e) {
            throw e;
        }
    }

    async addTrade(req, res) {
        try {
            let result = await this.tradeService.insertTrade(req.body,res);
            res.status(Messages.TradeCreation.statusCode).send(result);
        }
        catch (e) {

        }
    }

    async getTradeDetailsByUserId(req, res) { 
        try {
            let result = await this.tradeService.getTradeDetailsByUserId(req, res);
            res.send(result);
         }
        catch (e) { 
            throw e;
        }
    }

    async getTradeDetailsByStockSymbolTypeDate(req, res) { 
        try { 
            let result = await this.tradeService.getTradeDetailsByStockSymbolTypeDateRange(req, res);
            res.send(result);
        }
        catch (e) {
            throw e;
        }
    }

    async getMaxMinPrice(req, res) {
        try { 
            let result = await this.tradeService.getMaxMinPrice(req, res);
            res.send(result);
        }
        catch (e) { 
            throw e;
        }
    }
}

module.exports = TradeRouteHandler;
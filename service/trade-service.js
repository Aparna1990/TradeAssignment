const TradeManager = require('../manager/trade-manager');
class TradeService { 
    constructor(configs, dependencies) { 
        this.tradeManager = new TradeManager(configs, dependencies);
    }

    async getTrades(req, res) { 
        try { 
            let result = await this.tradeManager.getAllTrades(req, res);
            return result;
        }
        catch (e) { 
            throw e;
        }
    }
    async deleteTrades(req, res) { 
        try { 
            let result = await this.tradeManager.deleteAllTrades(req, res);
            return result;
        }
        catch (e) {
            throw e;
        }
    }

    async insertTrade(req, res) { 
        try { 
            let result = await this.tradeManager.insertTrade(req, res);
            return result;
        }
        catch (e) {  
            throw e;
        }
    }

    async getTradeDetailsByUserId(req, res) {
        try { 
            let result = await this.tradeManager.getTradeDetailsByUserId(req, res);
            return result;
        }
        catch (e) { }
    }

    async getTradeDetailsByStockSymbolTypeDateRange(req, res) { 
        try { 
            let result = await this.tradeManager.getTradeDetailsByStockSymbolTypeDateRange(req, res);
            return result;
        }
        catch (e) { 
            throw e;
        }
    }

    async getMaxMinPrice(req, res) {
        try { 
            let result = await this.tradeManager.getMaxMinPrice(req, res);
            return result;
        }
        catch (e) { 
            throw e;
        }
    }
}
module.exports = TradeService;
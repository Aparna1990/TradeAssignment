const TradeDbAccessor = require('../db-access/trade-db-accessor');
const Messages = require('../common/messages');
const _ = require('lodash');
const Moment = require('moment-timezone');
class TradeManager {
    constructor(configs, dependencies) { 
        this.tradeDbAccessor = new TradeDbAccessor(configs, dependencies);
    }
    async getAllTrades(req,res) { 
        try {
            let result = await this.tradeDbAccessor.getAll(req, res);
            return result;
        }
        catch (e) { 
            throw e;
        }
    }

    async deleteAllTrades(req, res) { 
        try {
            let result = await this.tradeDbAccessor.deleteAll(req, res);
            return result;
         }
        catch (e) { 
            throw e;
        }
    }

    async insertTrade(req, res) { 
        try {
            req.timestamp = Date.now();
            let getTradeDetails = await this.tradeDbAccessor.getById(req, res);
            if (!_.isEmpty(getTradeDetails) && getTradeDetails.length > 0) {
                res.status(Messages.UniqueViolation.statusCode).send(Messages.UniqueViolation.message);
            }
            else {
                let result = await this.tradeDbAccessor.insert(req, res);
                return result;
             }
         }
        catch (e) { 
            throw e;
        }
    }

    async getTradeDetailsByUserId(req, res) { 
        try { 
            let result = await this.tradeDbAccessor.getByUserId(req, res);
            if (_.isEmpty(result)) {
                res.status(Messages.TradeDetailsNotFound.statusCode).send(Messages.TradeDetailsNotFound);
            }
            else
            return result;
        }
        catch (e) { 
            throw e;
        }
    }

    async getTradeDetailsByStockSymbolTypeDateRange(req,res){ 
        try {
            let tradeDetailsBySymbol = await this.tradeDbAccessor.getTradeBySymbol(req, res);
            if (_.isEmpty(tradeDetailsBySymbol)) {
                res.status(Messages.TradeDetailsNotFoundForSymbol.statusCode).send(Messages.TradeDetailsNotFoundForSymbol);
            }
            else { 
                let result = await this.tradeDbAccessor.getByTypeSymbolDate(req, res);
                return result;
            }
         }
        catch (e) { 
            throw e;
        }
    }

    async getMaxMinPrice(req, res) {
        try {
            let result = await this.tradeDbAccessor.getMaxMinPrice(req, res);
            if (result.highest.value == null || result.lowest.value == null) { 
                res.status(Messages.TradeDetailsNotFound.statusCode).send(Messages.TradeDetailsNotFound); 
            }
            return result;
         }
        catch (e) {
            throw e;
        }
    }
}
module.exports = TradeManager;
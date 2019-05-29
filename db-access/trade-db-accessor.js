const ElasticSearchClient = require('../client/elastic-search');
const Constants = require('../common/constants');
class TradeDbAccessor { 
    constructor(configs, dependencies) { 
        this.elasticSearchClient = new ElasticSearchClient(configs,dependencies);
    }
   async getAll(req, res) { 
       try {
            let result =await this.elasticSearchClient.getAll(Constants.ElasticSearch.Trade);
            return result;
         }
        catch (e) { 
            throw e;
        }
   }
    
    async deleteAll(req, res) { 
        try {
            let result = await this.elasticSearchClient.deleteAll(Constants.ElasticSearch.Trade);
            return result;
         }
        catch (e) { 
            throw e;
        }
    } 

    async insert(req, res) { 
        try { 
            let result = await this.elasticSearchClient.add(req, Constants.ElasticSearch.Trade);
            return result;
        }
        catch (e) { 
            throw e;
        }
    }

    async getById(req, res) { 
        try { 
            let result = await this.elasticSearchClient.getById(req, Constants.ElasticSearch.Trade);
            return result;
        }
        catch (e) {
            throw e;
        }

    }
    
    async getByUserId(req, res) { 
        try {
            let result = await this.elasticSearchClient.getByUserId(req, Constants.ElasticSearch.Trade);
            return result;
        }
        catch (e) {
            throw e;
        }
    }

    async getTradeBySymbol(req, res) {
        try {

            let result = await this.elasticSearchClient.getTradeDetailsBySymbol(req, Constants.ElasticSearch.Trade);
            return result;
         }
        catch (e) {
            throw e;
        }
    }

    async getByTypeSymbolDate(req, res) { 
        try {
            let result = await this.elasticSearchClient.getByTypeSymbolDate(req, Constants.ElasticSearch.Trade);
            return result;
         }
        catch (e) { 
            throw e;
        }
    }

    async getMaxMinPrice(req, res) { 
        try { 
            let result = await this.elasticSearchClient.getMaxMinPrice(req, Constants.ElasticSearch.Trade);
            return result;
        }
        catch (e) { 
            throw e;
        }
    }

   
}
module.exports = TradeDbAccessor;
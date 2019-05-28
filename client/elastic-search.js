const ElasticSearch = require('elasticsearch');
const _ = require('lodash');
const Helper = require('./helper');


class ElasticSearchClient { 
    constructor(configs, dependencies) { 
        this.configs = configs;
        const EsClient = new ElasticSearch.Client({ host: `http://${this.configs.elastic_search.host}:${this.configs.elastic_search.port}` });
        this.esClient = EsClient;
    } 
    async getAll(message) {
       
        try {
            let res =
                await this.esClient.search({
                    index: message.index,
                    type: message.type,
                    body: {
                        "query": {
                            "match_all": {}
                        },
                        "size": 100,
                        "sort": [
                            {
                                "id": {
                                    "order": "asc"
                                }
                            }
                        ]
                    }
                
                });
            res = Helper.getParseOutput(res);
            return res;
        }
            catch (e) { 
                throw e;
            }
    }
    
    async deleteAll( message) {
        try {
            let res = await this.esClient.deleteByQuery({
                index: message.index,
                type: message.type,
                body: {
                    "query": {
                        "match_all": {}
                    }
                }

            });
            Helper.getDeletedResults(res);
         }
        catch (e) { 
            throw e;
        }
    }

    async add(req, message) { 
        try { 
            let res = await this.esClient.index({
                index: message.index,
                type: message.type,
                body: req
            });
            if (_.get(res, 'created')) { 
                return [];
            }
        }
        catch (e) { 
            throw e;
        }
    } 

    async getById(req, message) { 
        console.log(req);
        try { 
            let res = await this.esClient.search({
                index: message.index,
                type: message.type,
                body: {
                    "query": {
                        "match": {
                            "id":req.id
                        }
                    }
                }
            });
            console.log(Helper.getParseOutput(res))
            return Helper.getParseOutput(res);
        }
        catch (e) {
            throw e;
        }
    }

    async getByUserId(req, message) { 
        try {
            let res = await this.esClient.search({
                index: message.index,
                type: message.type,
                body:{
                    "query": {
                        "bool": {
                            "must": [
                                { "match": { "user.id": req.params.userID } }
                            ]
                        }
                    },
                    "size": 100,
                    "sort": [
                        {
                            "id": {
                                "order": "asc"
                            }
                        }
                    ]
                }});
            return Helper.getParseOutput(res);
        } catch (e) { 

        }
    }

    async getByTypeSymbolDate(req, message) { 
        try { 
            let res = await this.esClient.search({
                index: message.index,
                type: message.type,
                body: {
                    "query": {
                        "bool": {
                            "must": [{ "match": { "symbol": req.params.stockSymbol } },
                                     { "match": { "type": req.query.type} }],
                            "filter": {
                                "range": { "timestamp": { "gte": req.query.start, "lte": req.query.end} }
                            }
                        }
                    }

                }
            });
            return Helper.getParseOutput(res);
        }
        catch (e) { 
            throw e;
        }
    }

    async getTradeDetailsBySymbol(req, message) { 
        try {
            let res = await this.esClient.search({
                index: message.index,
                type: message.type,
                body: {
                    "query": {
                        "bool": {
                            "must": [
                                { "match": { "symbol": req.params.stockSymbol} }
                            ]
                        }
                    }
                }
            });
            return Helper.getParseOutput(res);
         }
        catch (e) { 
            throw e;
        }
    }

    async getMaxMinPrice(req, message) {
        try { 
            let res = await this.esClient.search({
                index: message.index,
                type: message.type,
                body: {
                    "query": {
                        "bool": {
                            "must": {
                                "term": {
                                    "symbol": req.params.stockSymbol
                                }
                            },
                            "filter": {"range": { "timestamp": { "gte": req.query.start, "lte": req.query.end } }}
                        }
                    },
                    "aggs": {
                        "lowest": { "max": { "field": "price" } },
                        "highest": { "min": { "field": "price" } }
                    }
                }
            });
            console.log(res);
            res = Helper.getAggregatedOutput(res);
            res.symbol = req.params.stockSymbol;
            return res;
        }
        catch (e) { 
            console.log("Error", e);
            throw e;
        }
    }
    
}
module.exports = ElasticSearchClient;
const Configs = require('../configs/config');
const ElasticSearch = require('elasticsearch')

class TestHelper { 
    constructor() { 
        this.configs = Configs;
        this.dependencies = {};
        const EsClient = new ElasticSearch.Client({ host: `http://${this.configs.elastic_search.host}:${this.configs.elastic_search.port}` });
        this.esClient = EsClient;
        
        this.message = {
            index: "trades",
                type: "trades_info"
        }
    }

    async deleteData(id) { 
        
        let res = await this.esClient.deleteByQuery({
            index: this.message.index,
            type: this.message.type,
            body: {
                "query": {
                    "match": {"id":id}
                },
                "conflicts":"proceed"
            }
        });
        if (res.failures.length === 0) { 
            return [];
        }
    }
}

module.exports = TestHelper;
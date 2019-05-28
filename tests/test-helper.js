const Configs = require('../configs/config');
const ElasticSearch = require('elasticsearch')

class TestHelper { 
    constructor() { 
        this.configs = Configs;
        this.dependencies = {};
        this.esclient = new ElasticSearch.Client({host: `http://${this.configs.elastic_search.host}:${this.configs.elastic_search.port}`});
    }
}

module.exports = TestHelper;
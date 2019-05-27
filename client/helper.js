const _ = require('lodash');
module.exports.getParseOutput = function(resp) {
    if (_.get(resp, 'hits.hits.length') > 0) {
        let res = [];
        _.forEach(resp.hits.hits, (data) => {
            data = _.omit(data, '_index', '_type', '_id', '_score');
            res.push(data._source);
        });
        return res;
    }
    else
        return [];
}

module.exports.getAggregatedOutput = function(resp) {
    if (_.get(resp, 'aggregations')) {
        return _.get(resp, 'aggregations');
    }
    else
        return [];

}

module.exports.getDeletedResults = function(resp) {
    if (_.get(resp, 'deleted') && _.get(resp, 'total') && _.get(resp, 'deleted') == _.get(resp, 'total')) {
        return [];
    }
    else {
        if (_.get(resp, 'failures')) {
            return resp.failures;
        }
    }
}


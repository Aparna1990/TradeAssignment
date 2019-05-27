const joi = require('joi');
const Enums = require('../common/enums');
const _ = require('lodash');
const Configs = require('../configs/config');
const moment = require('moment');


const UserDetails = {
    id: joi.number().required(),
    name: joi.string().required()
};



const TradeRequestSchema = joi.object({
    id: joi.number().required(),
    type: joi.string().valid(_.values(Enums.TradeTypes)).required(),
    user: UserDetails,
    symbol: joi.string().required(),
    shares: joi.number().min(Configs.service.trade.share.min).max(Configs.service.trade.share.max).required(),
    price: joi.number().min(Configs.service.trade.price.min).max(Configs.service.trade.price.max).required(),
    timestamp: joi.string().optional()
})

module.exports = {
    TradeRequestSchema
}
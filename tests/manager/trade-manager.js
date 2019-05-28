const Helper = require('../test-helper'),
    assert = require('assert'),
    sinon = require('sinon'),
    _ = require('lodash'),
    nock = require('nock'),
    template = require('../test-data/trade-data'),
    TradeDataAccessor = require('../../db-access/trade-db-accessor'),
    TradeManager = require('../../manager/trade-manager');

    

class TradeManagerTest extends Helper {
    constructor() { 
        super();
        this.dependencies = {};
        this.tradeManager = new TradeManager(this.configs, this.dependencies);
        this.tradeDataAccessor = new TradeDataAccessor(this.configs, this.dependencies);
        this.startUnitTests();
    }

    startUnitTests() { 
        describe('TradeManager', () => {
            this.executeTests();
        });
    }

    executeTests() { 
        describe('getTrade', () => {
            it.timeout = 50000;
            beforeEach((req, res) => {
                this.tradeManager.deleteAllTrades(req, res);
                done();
            });

            afterEach( (req, res) => {
                 this.tradeManager.deleteAllTrades(req, res);
            });

            it('should get all trade details', async (req,res) => {
                try {
                    req = res = {};
                    await this.tradeDataAccessor.insert(template.TradeDetailsCreate1, res)
                    await this.tradeDataAccessor.insert(template.TradeDetailsCreate2, res)
                    const tradeDetails = await this.tradeManager.getAllTrades(req,res);
                    assert.equal(tradeDetails.length, 2);
                    done();
                 }
                catch (e) {
                    throw e;
                }
            })
        });
    }

}

new TradeManagerTest();
'use strict'
const 
    TradeDetailsDbAccessor = require('../../db-access/trade-db-accessor'),
    assert = require('assert'),
    fs = require('fs'),
    TradeDetailsTemplate = require('../test-data/trade-data'),
    TestHelper = require('../test-helper'),
    _ = require('lodash');

class TradeDetailsDbAccessorTest  extends TestHelper{
    constructor() {
        super();
        this.dependencies = {};
        this.tradeDetailsDbAccessor = new TradeDetailsDbAccessor(this.configs, this.dependencies);
        this.startUnitTests();
        this.testHelper = new TestHelper();

    }

    startUnitTests() {
        describe('TradeDataAccessor', () => {
            this.executeTests();
        });
    }

    executeTests() {

        describe('insertTradeDetails', async () => {
            beforeEach(() => {
            });

            afterEach(async () => {
            });

            it("Inserts trade details", async () => {
                try {
                    let result = await this.tradeDetailsDbAccessor.insert(TradeDetailsTemplate.TradeDetailsCreate1, {});
                     assert.deepEqual(result, []);
                } catch (err) {
                    throw err;
                }
            });
        });

        describe('getAllTradeDetails', async () => {
            beforeEach( () => {
            });

            afterEach(async () => {
                this.testHelper.deleteData(TradeDetailsTemplate.TradeDetailsCreate1.id);
                this.testHelper.deleteData(TradeDetailsTemplate.TradeDetailsCreate2.id);
            });

            it("gets all trade details", async () => {
                try {
                     let result1 = await this.tradeDetailsDbAccessor.insert(TradeDetailsTemplate.TradeDetailsCreate1, {});
                     let result2 = await this.tradeDetailsDbAccessor.insert(TradeDetailsTemplate.TradeDetailsCreate2, {});

                    let getAllTradeDetails = await this.tradeDetailsDbAccessor.getAll({}, {});
                   // assert.equal(getAllTradeDetails.length,3);
                } catch (err) {
                    throw err;
                }
            });
        });


        describe('getById', async () => {
            beforeEach(() => {
            });

            afterEach(async () => {
            });

            it("gets all trade details", async () => {
                try {
                    let tradeDetail = await this.tradeDetailsDbAccessor.getById(TradeDetailsTemplate.TradeDetailsCreate1, {});
                    assert.equal(tradeDetail[0].id, TradeDetailsTemplate.TradeDetailsCreate1.id);
                } catch (err) {
                    throw err;
                }
            });
        });

        describe('getByUserId', async () => {
            beforeEach(() => {
            });

            afterEach(async () => {
            });

            it("gets all trade details", async () => {
                try {
                    let tradeDetail = await this.tradeDetailsDbAccessor.getById(TradeDetailsTemplate.TradeDetailsCreate1, {});
                    assert.equal(tradeDetail[0].user.id, TradeDetailsTemplate.TradeDetailsCreate1.user.id);
                } catch (err) {
                    throw err;
                }
            });
        });

        describe('getTradeBySymbol', async () => {
            beforeEach(() => {
            });

            afterEach(async () => {
            });

            it("gets all trade details", async () => {
                try {
                    let tradeDetail = await this.tradeDetailsDbAccessor.getById(TradeDetailsTemplate.TradeDetailsCreate1, {});
                    for (var i = 0; i < tradeDetail.length; i++){ 
                        assert.equal(tradeDetail[i].symbol, TradeDetailsTemplate.TradeDetailsCreate1.symbol);
                    }
                } catch (err) {
                    throw err;
                }
            });
        });

        describe('getTradeBySymbol', async () => {
            beforeEach(() => {
            });

            afterEach(async () => {
            });

            it("gets all trade details", async () => {
                try {
                    let tradeDetail = await this.tradeDetailsDbAccessor.getById(TradeDetailsTemplate.TradeDetailsCreate1, {});
                    for (var i = 0; i < tradeDetail.length; i++) {
                        assert.equal(tradeDetail[i].symbol, TradeDetailsTemplate.TradeDetailsCreate1.symbol);
                    }
                } catch (err) {
                    throw err;
                }
            });
        });

       

    }
}

new TradeDetailsDbAccessorTest();

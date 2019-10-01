'use strict';
const service = require('./purchase.service/purchase-service');
const purchaseService = new service.PurchaseService();

module.exports.test = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'GET API is OK!',
        input: event.body,
      },
      null,
      2
    ),
  };
};

module.exports.portfolio = (event, context, callback) => {

  const done = (err, res) => callback(null, {
    statusCode: err ? '400' : '200',
    body: err ? err.message : JSON.stringify(res),
    headers: {
        'Content-Type': 'application/json',
    },
  });

  purchaseService.read(done);
};

module.exports.purchase = (event, context, callback) => {

  const done = (err, res) => callback(null, {
    statusCode: err ? '400' : '200',
    body: err ? err.message : JSON.stringify(res),
    headers: {
        'Content-Type': 'application/json',
    },
  });

  purchaseService.create(event.body, done);
};
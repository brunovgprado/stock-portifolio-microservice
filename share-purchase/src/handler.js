'use strict';
const service = require('./purchase.service/purchase-service');
const purchaseService = new service.PurchaseService();

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
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

/*   return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Retorna o portfolio',
        input: event,
      },
      null,
      2
    ),
  }; */
};

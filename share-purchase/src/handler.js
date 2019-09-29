'use strict';

console.log('Loading function');

const service = require('./purchase.service/purchase-service');

const purchaseService = new service.PurchaseService();

/* module.exports.register.purchase = async event => {
  
    purchaseService.create(JSON.parse(event.body), done);
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: teste.read(),
          input: usuario,
        },
        null,
        2
      ),
    };
  
    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
  }; */

exports.handler = (event, context, callback) => {

    const done = (err, res) => callback(null, {
        statusCode: err ? '400' : '200',
        body: err ? err.message : JSON.stringify(res),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    switch (event.httpMethod) {
        case 'DELETE':
            purchaseService.delete(JSON.parse(event.body), done);
            break;
        case 'GET':
            purchaseService.read({ TableName: event.queryStringParameters.TableName }, done);
            break;
        case 'POST':
            purchaseService.create(JSON.parse(event.body), done);
            break;
        case 'PUT':
            purchaseService.update(JSON.parse(event.body), done);
            break;
        default:
            done(new Error(`Unsupported method "${event.httpMethod}"`));
    }
};
'use strict';

console.log('Loading function');

const service = require('./purchase.service/purchase-service');

const purchaseService = new service.PurchaseService();

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
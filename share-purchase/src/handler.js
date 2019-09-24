'use strict';

console.log('Loading function');

const repo = require('./purchase.repository/repository');

const repoPurchase = new repo.PurchaseRepository();

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
            repoPurchase.delete(JSON.parse(event.body), done);
            break;
        case 'GET':
            repoPurchase.read({ TableName: event.queryStringParameters.TableName }, done);
            break;
        case 'POST':
            repoPurchase.create(JSON.parse(event.body), done);
            break;
        case 'PUT':
            repoPurchase.update(JSON.parse(event.body), done);
            break;
        default:
            done(new Error(`Unsupported method "${event.httpMethod}"`));
    }
};
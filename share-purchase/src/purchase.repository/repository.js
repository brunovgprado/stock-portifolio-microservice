'use strict';
const AWS = require('aws-sdk');

class PurchaseRepository{
    
    constructor(){
        this.dynamo = new AWS.DynamoDB.DocumentClient();       
    }

    create(data, done){
        this.dynamo.putItem(data, done);
    }
    
    read(data, done){
        this.dynamo.scan(data, done);
    }
    
    update(data, done){
        this.dynamo.updateItem(data, done);
    }

    delete(data, done){
        this.dynamo.deleteItem(data, done);
    }
}
exports.PurchaseRepository = PurchaseRepository;
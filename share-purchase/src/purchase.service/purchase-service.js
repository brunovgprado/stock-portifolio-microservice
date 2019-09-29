
const repo = require('../purchase.repository/repository');
const validator = require('../purchase.validators/purchase-validator');

class PurchaseService{

    constructor(){
        this.repoPurchase = new repo.PurchaseRepository();
        this.validPurchase = new validator.PurchaseValidator();
    }

    create(data, done){
        this.repoPurchase.create(data, done);
    }
    
    read(data, done){
        this.repoPurchase.read(data, done);
    }

    update(data, done){
        this.repoPurchase.update(data, done);
    }

    delete(data, done){
        this.repoPurchase.delete(data, done);
    }
}

exports.PurchaseService = PurchaseService;
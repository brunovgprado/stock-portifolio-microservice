
const repo = require('../purchase.repository/repository');

class PurchaseService{

    constructor(){
        this.repoPurchase = new repo.PurchaseRepository();
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
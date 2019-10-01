const repo = require('../purchase.repository/repository');

class PurchaseService{

    constructor(){
        this.repoPurchase = new repo.PurchaseRepository();
    }

    create(data, done){    
        this.repoPurchase.create(data, done);           
    }
    
    read(done){
        this.repoPurchase.read({ TableName: "StockPurchases" }, done);
    }

    update(data, done){
        this.repoPurchase.update(data, done);
    }

    delete(data, done){
        this.repoPurchase.delete(data, done);
    }
}
exports.PurchaseService = PurchaseService;
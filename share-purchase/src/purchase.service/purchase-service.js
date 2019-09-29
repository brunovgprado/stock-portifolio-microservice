const repo = require('../purchase.repository/repository');
const validator = require('../purchase.validators/purchase-validator');
const adapter = require('../purchase.adapter/purchase-adapter');

class PurchaseService{

    constructor(){
        this.repoPurchase = new repo.PurchaseRepository();
        this.validPurchase = new validator.PurchaseValidator();
    }

    create(data, done){
        let valid = (this.validPurchase.validate(data).length === 0);

        if(valid){
            let entity = new adapter.ModelToEntityAdapter(data);            
            this.repoPurchase.create(this._prepareEntity(entity), done);           
        }
    }
    
    read(data, done){
        this.repoPurchase.read(data, done);
    }

/*     update(data, done){
        this.repoPurchase.update(data, done);
    }

    delete(data, done){
        this.repoPurchase.delete(data, done);
    } */
}
exports.PurchaseService = PurchaseService;
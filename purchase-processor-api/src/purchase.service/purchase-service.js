const uuidv4 = require('uuid/v4');
const request = require('request');
const enume = require('../purchase.enum/enumerators');
const urls = require('../purchase.urls/urls');
const models = require('../purchase.model/persistency-entity');
const valid = require('../purchase.validators/purchase-validator');


class PurchaseService{

    constructor(){
    }

    registerPurchase(data, done){
        let validator = new valid.PurchaseValidator();
        let errors = validator.validate(data);

        if(validator.isValid()){
            let entity = this._prepareEntity(data);
            this._postRequest(entity, done, urls.url.REGISTER);
        }else{done({Message:"Here are some validation errors", Errors: errors}, null)}
    }
    
    readPortfolio(done){
        this._getRequest(done, urls.url.PORTFOLIO);
    }

    writeOfPurchase(data, done){
        //this.repoPurchase.update(data, done);
    }
    
    deletePurchase(data, done){
        //this.repoPurchase.delete(data, done);
    }
    
    _getRequest(done, url){
        
        request.get(url, function (req, res) {
            done(null, res.body)
            console.log(res);
        })
    }
    
    _postRequest(data, done, url){
        request.post({
            url: url,
            headers: {
              'Content-Type': 'application/octet-stream'
            },
            encoding: null, //  if you expect binary data
            responseType: 'buffer',
            body: data,
            json: true
          }, (err, res, body) => {
            if (!err) {
                  done(null, body);
              } else {
                  done(err, null);
              }
          }
          );
        
    }

    _prepareEntity(data){
        let entity = new models.PersistencyEntity();
        entity.TableName = "StockPurchases";
        entity.Item = data;
        entity.Item.Status = enume.status.BUYED;
        entity.Item.PurchaseId = uuidv4();

        return entity;    
    }
}
exports.PurchaseService = PurchaseService;
const uuidv4 = require('uuid/v4');
const request = require('request');
const enume = require('../purchase.enum/enumerators');
const urls = require('../purchase.urls/purchase.urls');
const modelEnity = require('../purchase.model/persistency-entity');
const modelPurchase = require('../purchase.model/purchase');
const valid = require('../purchase.validators/purchase-validator');


class PurchaseService{

    constructor(){
    }

    registerPurchase(data, done){
        let validator = new valid.PurchaseValidator();
        let errors = validator.validate(data);

        if(validator.isValid()){
            this._postRequest(data, done, urls.url.REGISTER);            

            this._increaseEquity(data);
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

    _increaseEquity(data){
        const _done = (err, resp) => {
            if(!err){
                console.log("Integration OK");
            }else{
                console.log("Integration error");
            }
        };

        this._postRequest(this._prepareIntegrationEntity(data), _done, urls.url.EQUITY_INCREASE);
    }
    
    _getRequest(done, url){
        
        request.get(url, function (req, res) {
            done(null, res.body)
        })
    }
    
    _postRequest(data, done, url){

        request.post({
            url: url,
            headers: {
              'Content-Type': 'application/octet-stream'
            },
            encoding: null,
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
        let entity = new modelEnity.PersistencyEntity();
        entity.TableName = "StockPurchases";
        entity.Item = data;
        entity.Item.Status = enume.status.BUYED;
        entity.Item.PurchaseId = uuidv4();

        return entity;    
    }

    _prepareIntegrationEntity(data){
        let entity = new modelPurchase.StockPurchase();
        entity = data;
        return entity;    
    }
}
exports.PurchaseService = PurchaseService;
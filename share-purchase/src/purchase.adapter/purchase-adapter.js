const entity = require('../purchase.model/persistency-entity');
const model = require('../purchase.model/purchase');

const tableName = "StockPurchases";

class EntityToModelAdapter{
    constructor(obj) {
        obj && Object.assign(this, obj);
        this._Model = new model.StockPurchase();
    }

    getModel(){
        this._Model.InvestorId = this.InvestorId;
        this._Model.PurchaseId = this.PurchaseId;
        this._Model.Price = this.Price;
        this._Model.Symbol = this.Symbol;
        this._Model.Amount = this.Amount;
        this._Model.Status = this.Status;
        this._Model.OperationRate = this.OperationRate;

        return this._Model;
    }
}

class ModelToEntityAdapter{
    constructor(obj) {
        obj && Object.assign(this, obj);
        this._Entity = new entity.PersistencyEntity();
    }
    
    getModel(){
        this._Entity.Item = this.Item;
        this._Entity.TableName = tableName;

        return this._Entity
    }
}
exports.EntityToModelAdapter = EntityToModelAdapter;
exports.ModelToEntityAdapter = ModelToEntityAdapter;
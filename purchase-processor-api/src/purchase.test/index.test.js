const test = require('tape')
const valid = require('../purchase.validators/purchase-validator');
const models = require('../purchase.model/purchase');

test('Test validation has error messages', (t) => {
    let model = new models.StockPurchase();
    let vldt = new valid.PurchaseValidator();

    t.assert(vldt.validate(model).length === 4, "Validates perfectly! Well done!");
    t.end();
})

test('Test purchase is valid() = false', (t) => {
    let model = new models.StockPurchase();
    let vldt = new valid.PurchaseValidator();
    vldt.validate(model);

    t.assert(vldt.isValid() == false, "Validates perfectly! You rock!");
    t.end();  
})

test('Test purchase is valid() = true', (t) => {
    let model = new models.StockPurchase();
    model.Symbol = "OIBR3";
    model.InvestorId = "8943t09";
    model.Price = 19;
    model.Amount = 200;

    let vldt = new valid.PurchaseValidator();
    vldt.validate(model);
    
    t.assert(vldt.isValid() == true, "Validates perfectly! You made my day!");
    t.end();  
})